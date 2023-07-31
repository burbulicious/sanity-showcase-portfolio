import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import {
    FaRegClock,
    FaRegUserCircle,
    FaFire,
    FaEuroSign,
} from "react-icons/fa";

type Props = {
    params: {
        project: string;
    };
};
export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);
    const cookingInfo =
        "p-6 rounded bg-pink-50 flex flex-col items-center justify-center";
    const iconStyle = "text-pink-700 text-xl mb-2";
    const cookingInfoText =
        "w-full text-center text-[14px] uppercase text-pink-700";
    return (
        <div className="">
            <div className="w-full flex justify-center items-center h-[250px] md:h-[350px] lg:h-[450px] relative rounded-xl overflow-hidden mb-12">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full object-cover absolute h-full t-0 l-0 z-0"
                />
                <div className="w-full absolute h-full t-0 l-0 z-10 bg-black bg-opacity-60"></div>
                <h1 className="text-white text-4xl text-center md:text-5xl lg:text-7xl font-extrabold leading-small z-20 px-8">
                    {project.name}
                </h1>
            </div>
            <div className="max-w-4xl mx-auto px-4">
                <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                    <div className={cookingInfo}>
                        <FaRegClock className={iconStyle} />
                        <p className={cookingInfoText}>
                            <span className="font-bold">{project.time}</span>{" "}
                            <span>minutes</span>
                        </p>
                    </div>

                    <div className={cookingInfo}>
                        <FaRegUserCircle className={iconStyle} />
                        <p className={cookingInfoText}>
                            <span>Serves</span>{" "}
                            <span className="font-bold">
                                {project.servesFor}
                            </span>{" "}
                            <span>persons</span>
                        </p>
                    </div>
                    <div className={cookingInfo}>
                        <FaFire className={iconStyle} />
                        <p className={cookingInfoText}>
                            <span className="font-bold">
                                {project.calories}
                            </span>{" "}
                            <span>calories</span>
                        </p>
                    </div>
                    <div className={cookingInfo}>
                        <FaEuroSign className={iconStyle} />
                        <p className={cookingInfoText}>
                            <span className="font-bold">{project.price}</span>{" "}
                            <span>€</span>
                        </p>
                    </div>
                </div>
                <div className="text-lg text-gray-700 my-16 block ">
                    <PortableText value={project.content} />
                </div>
                {project.buttonText && (
                    <a
                        href={project.url}
                        title="View project"
                        target="_blank"
                        rel="noopener noreferrer "
                        className="bg-pink-500 rounded text-white uppercase py-3 px-6 whitespace-nowrap hover:bg-pink-700  transition-all flex w-fit m mx-auto"
                    >
                        {project.buttonText}
                    </a>
                )}
            </div>
        </div>
    );
}
