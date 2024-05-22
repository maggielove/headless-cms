import { useState } from 'react';
import Link from "next/link";
import cn from "classnames";

export default function MobileNav() {
  const [mobileNavExpanded, setmobileNavExpanded] = useState(false);

  const toggleFullNav = () => {
    console.log('toggle nav');
    setmobileNavExpanded(!mobileNavExpanded);
  }

  return (
    <>
    <div className="block sm:hidden h-50 p-6 mb-6 border-b-2 border-black">
      <div className="flex w-full items-center">
        <div onClick={toggleFullNav} className="pr-6"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
          viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu hamburger-icon">
          <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21"
          y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
        <Link
          href={`/`}
          className="text-6xl sm:text-8xl font-bold hover:underline"
          dangerouslySetInnerHTML={{ __html: `Faultline` }}
        ></Link>
      </div>
    </div>
    <div className={cn("flex flex-col justify-start w-full h-screen bg-white pl-4", {
      "hidden": !mobileNavExpanded,
    })}>
      <Link
        href={`/fiction`}
        className="flex text-xl font-bold uppercase hover:underline pb-4"
        dangerouslySetInnerHTML={{ __html: `Fiction` }}
      ></Link>
      <Link
        href={`/poetry`}
        className="flex text-xl font-bold uppercase hover:underline pb-4"
        dangerouslySetInnerHTML={{ __html: `Poetry` }}
      ></Link>
      <Link
        href={`/interviews`}
        className="flex text-xl font-bold uppercase hover:underline pb-4"
        dangerouslySetInnerHTML={{ __html: `Interviews` }}
      ></Link>
      <Link
        href={`/store`}
        className="flex text-xl font-bold uppercase hover:underline pb-4"
        dangerouslySetInnerHTML={{ __html: `Store` }}
      ></Link>
      <Link
        href={`/about`}
        className="flex text-xl font-bold uppercase hover:underline"
        dangerouslySetInnerHTML={{ __html: `About` }}
      ></Link>
    </div>
    </>
  );
}
