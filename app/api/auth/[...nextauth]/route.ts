import forumSchema from "@/schema/forum";
import { connectDB } from "@/utils/db";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import UserSchema from "@/schema/user"
import data from "@/data/tableData.json";
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        })
    ],
    callbacks: {
        session: async ({ session, user }: { session: any, user: any }) => {
            try {
                console.log("GOOGLE SESSION DETAILS: ", { session, user });
                await connectDB();
                await forumSchema.insertMany(data);
                const userDetails = await UserSchema.findOne({ email: session.user.email });
                if (userDetails) {
                    session.user = {
                        id: userDetails.id,
                        name: userDetails.name,
                        email: userDetails.email,
                        image: userDetails.image,
                        provider: userDetails.provider,
                        type: userDetails.type,
                        providerAccountId: userDetails.providerAccountId,
                    };
                }
                return session;
            } catch (error) {
                console.log("error: ", error);
                return session;
            }
        },
        //  @ts-ignore 
        signIn: async ({ profile, user, account }: { profile: any, user: any, account: any }) => {
            try {
                console.log("GOOGLE USER DETAILS: ", { profile, user, account });
                await connectDB();
                const userExist = await UserSchema.findOne({ email: user.email });
                if (userExist) return true;
                await UserSchema.create({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    provider: account.provider,
                    type: account.type,
                    providerAccountId: account.providerAccountId,
                });
                return true;
            } catch (error) {
                console.log("error: ", error);
                return false;
            }
        },
    }
})
export { handler as GET, handler as POST }