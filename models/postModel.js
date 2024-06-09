import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    author: {
        type: String
    },
    company: {
        type: String
    },
    type: {
        type: String,
        enum: ['FTE', 'Internship']
    },
    role: {
        type: String
    },
    content: {
        type: String
    },
    duration: {
        type: String
    },
    location: {
        type: String
    },
    salary: {
        type: String
    }
});

export const Post = mongoose.model('Post',postSchema);