const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'author',
    },
    comments: {
        type: [Schema.Types.ObjectId],
        ref: 'comments'
    },
    cover:{
        type: String,
    },
    // Cantidad de likes
    likes:{
        type: Number,
        default:0,
    },
    // Quienes dieron esos likes
    liked_by:{
        type: [Schema.Types.ObjectId],
        ref: 'author'
    },
    is_active:{
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('posts', PostSchema);