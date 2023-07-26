import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
const config = defineConfig({
    projectId: "9dnepip6",
    dataset: "production",
    title: "My website",
    apiVersion: "2023-07-26",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
});
export default config;
