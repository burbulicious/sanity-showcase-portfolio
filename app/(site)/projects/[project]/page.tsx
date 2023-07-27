import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: {
        project: string;
    };
};
export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div className="">
            <div className="w-full h-[500px]"></div>
            <h1 className="text-black text-3xl lg:text-5xl font-extrabold leading-small">
                {project.name}
            </h1>
            <div className="text-lg text-gray-700 mt-5 block">
                <PortableText value={project.content} />
            </div>
            {project.buttonText && (
                <a
                    href={project.url}
                    title="View project"
                    target="_blank"
                    rel="noopener noreferrer "
                    className="bg-pink-500 rounded-lg text-white font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-700  transition-all flex w-fit mt-8"
                >
                    {project.buttonText}
                </a>
            )}

            <Image
                src={project.image}
                alt={project.name}
                width={1920}
                height={1080}
                className="mt-10 rounded-xl object-cover"
            />
        </div>
    );
}
