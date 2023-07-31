import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Header() {
    const pages = await getPages();

    return (
        <header className="flex items-center justify-between ">
            <Link
                href="/"
                className="text-xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-orange-400 transition-all"
            >
                SLMSHDy
            </Link>
            <div className="flex items-center gap-5 text-sm text-gray-600">
                {pages.map((page) => (
                    <Link
                        key={page._id}
                        href={`/${page.slug}`}
                        className="text-lg text-light uppercase text-gray-700 hover:text-pink-500 transition-all"
                    >
                        {page.title}
                    </Link>
                ))}
            </div>
        </header>
    );
}
