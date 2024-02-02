import mongoose, { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    image: string;
    provider: string;
    type: string;
    providerAccountId: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>({
    id: String,
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    image: {
        type: String,
        default: "",
    },
    provider: String,
    type: String,
    providerAccountId: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Users || model<IUser>("Users", userSchema);