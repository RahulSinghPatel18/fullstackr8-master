const mongoose = require("mongoose");

const blogModel = new mongoose.Schema(
    {
        data: {
            type: String,
            required: [true, "name is required"],
        },
        author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        comments: [],
    },
    { timestamps: true }
);

const blog = mongoose.model("blog", blogModel);

module.exports = blog;
