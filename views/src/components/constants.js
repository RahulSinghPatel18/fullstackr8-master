import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Code from "@editorjs/code";
// import LinkTool from "@editorjs/link";
import SimpleImage from "@editorjs/simple-image";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";

export const EDITOR_JS_TOOLS = {
    header: {
        class: Header,
        inlineToolbar: ["link"],
        config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 1,
        },
    },
    list: {
        class: List,
        inlineToolbar: ["link", "bold"],
        config: {
            defaultStyle: "unordered",
        },
    },
    embed: {
        class: Embed,
        inlineToolbar: false,
        config: {
            services: {
                youtube: true,
            },
        },
    },
    code: Code,
    image: {
        class: Image,
        config: {
            endpoints: {
                byFile: "http://localhost:3030/uploadBlog",
                // byUrl: "http://localhost:3000/fetchUrl",
            },
            field: "blog",
            type: "image/*",
        },
    },
    simpleImage: SimpleImage,
    quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
        },
    },
};

// https://medium.com/geekculture/how-to-upload-images-to-cloudinary-with-a-react-app-f0dcc357999c
