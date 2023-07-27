import { getProjects, getHomePage } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const projects = await getProjects();
    const homePage = await getHomePage();
    const headingParts = homePage.title.split(homePage.callOutWord);
    const headingStyle =
        " text-4xl md:text-5xl lg:text-7xl font-extrabold pb-8 text-center";
    return (
        <div>
            <div className="pb-24 max-w-5xl mx-auto">
                {headingParts?.length > 1 && homePage.title && (
                    <h1 className={headingStyle}>
                        {headingParts[0]}
                        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
                            {homePage.callOutWord}
                        </span>
                        {headingParts[1]}
                    </h1>
                )}
                {headingParts?.length < 2 && homePage.title && (
                    <h1 className={headingStyle}>{homePage.title}</h1>
                )}

                <p className="mt-3 text-lg lg:text-2xl text-black text-center leading-normal">
                    {homePage.description}
                </p>
            </div>

            <div className="w-full rounded-xl bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 px-6 md:px-12 py-12 md:py-20">
                <h2 className=" pb-8 text-4xl font-light text-white text-center uppercase">
                    {homePage.projectsTitle}
                </h2>
                <div className="mt-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link
                            href={`/projects/${project.slug}`}
                            key={project._id}
                            className="rounded-lg flex relative flex-col bg-white transition-all hover:scale-105  pb-8"
                        >
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={750}
                                    height={300}
                                    className="object-cover rounded-lg transition-all "
                                />
                            )}
                            <p className="font-bold text-center text-lg pt-4 px-4 text-gray-700 ">
                                {project.name}
                            </p>
                            <p className="font-normal uppercase text-center pt-3 px-4 text-pink-500 ">
                                View recipe
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
