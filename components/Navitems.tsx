'use client'

import Link from 'next/link';
import {NAV_ITEMS} from "@/lib/constants";
import {usePathname} from "next/navigation";

const Navitems = () => {
    const pathname = usePathname();

    const isActive =(path:string)=>{
        if(path=== '/') return pathname ==='/';

        return pathname.startsWith(path);
    }

    return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                    <Link
                        href={href}
                        className={`hover:text-yellow-500 transition-colors ${
                            isActive(href) ? "text-gray-100" : ""
                        }`}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
export default Navitems
