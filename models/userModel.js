const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userModel = new mongoose.Schema(
    {
        name: {
            type: String,
            minLength: [4, "name must have atleast 4 characters"],
            required: [true, "name is required"],
        },
        username: {
            type: String,
            unique: true,
            minLength: [4, "username must have atleast 4 characters"],
            // required: [true, "username is required"],
        },
        email: {
            type: String,
            require: [true, "email is required"],
            validate: [validator.isEmail, "email is invalid"],
        },
        password: {
            type: String,
            select: false,
            minLength: [6, "name must have atleast 4 characters"],
            required: [true, "name field must not empty"],
            match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        },
        bio: {
            type: String,
            maxLength: [69, "bio must have almost 69 characters"],
            // required: [true, "username is required"],
        },
        about: {
            type: String,
            maxLength: [143, "about must have almost 143 characters"],
            // required: [true, "username is required"],
        },
        avatar: {
            type: Object,
            default: {
                public_id: "",
                url: "",
            },
        },
        lists: [{ type: mongoose.Schema.Types.ObjectId, ref: "blog" }],
        stories: [{ type: mongoose.Schema.Types.ObjectId, ref: "blog" }],
        passwordResetToken: 0,
    },
    { timestamps: true }
);

userModel.pre("save", async function () {
    if (this.password) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

userModel.methods.comparepassword = function (userpassword) {
    return bcrypt.compareSync(userpassword, this.password);
};

userModel.methods.gettoken = function () {
    return jwt.sign({ id: this._id }, "SECRETKEYJWT", { expiresIn: "1h" });
};

const user = mongoose.model("user", userModel);

module.exports = user;
