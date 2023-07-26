import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const projects = await getProjects();
    return (
        <div className="">
            <h1 className="text-7xl font-extrabold ">
                Will the real{" "}
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                    Slim Shady
                </span>{" "}
                please stand up
            </h1>
            <p className="mt-3 text-xl text-grey-600">
                Look, if you had one shot, or one opportunity to seize
                everything you ever wanted, in one moment would you capture it,
                or just let it slip?
            </p>
            <h2 className="mt-24 text-3xl font-bold text-grey-700">
                My mom's spaghetti projects
            </h2>
            <div className="mt-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        key={project._id}
                        className="border border-grey-500 rounded-lg p-3 flex relative flex-col"
                    >
                        {project.image && (
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={750}
                                height={300}
                                className="object-cover rounded-lg border border-grey-500"
                            />
                        )}
                        <p className="font-extrabold ">{project.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
