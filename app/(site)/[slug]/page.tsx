import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: {
        slug: string;
    };
};
export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);
    return (
        <div>
            <div>
                <h1 className="text-black text-3xl lg:text-5xl font-extrabold leading-small">
                    {page.title}
                </h1>
            </div>
            <div className="text-lg text-gray-700 mt-5">
                <PortableText value={page.content} />
            </div>
        </div>
    );
}
