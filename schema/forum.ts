import mongoose, { Document, Schema, model } from "mongoose";

interface IForum extends Document {
    id: number;
    links: string;
    prefix: string;
    selectTags: string[];
    selectedTags: string[];
}


const forumSchema = new Schema<IForum>({
    id: {
        type: Number,
        required: true,
    },
    links: {
        type: String,
        required: true,
    },
    prefix: {
        type: String,
        required: true,
    },
    selectTags: {
        type: [String],
        required: true,
    },
    selectedTags: {
        type: [String],
        default: [],
    },
});

export default mongoose?.models?.ForumLists || model<IForum>('ForumLists', forumSchema);

