const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
        {
            name: "buttonText",
            title: "Button text",
            type: "string",
        },
        {
            name: "url",
            title: "URL",
            type: "url",
        },
        {
            name: "time",
            title: "Cooking time in minutes",
            type: "number",
        },
        {
            name: "servesFor",
            title: "Serves fot this many people",
            type: "number",
        },
        {
            name: "calories",
            title: "Calories",
            type: "number",
        },
        {
            name: "price",
            title: "Price for full meal",
            type: "number",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
export default project;
