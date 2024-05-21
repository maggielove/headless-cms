import Link from "next/link";

export default function Nav() {
  return (
    <div class="h-50 p-6 mb-16 border-b-2 border-black">
      <div class="w-full">
        <Link
          href={`/`}
          className="text-8xl font-bold hover:underline"
          dangerouslySetInnerHTML={{ __html: `Faultline` }}
        ></Link>
      </div>
      <div class="flex flex-row justify-between w-full">
        <Link
          href={`/`}
          className="flex text-base font-bold uppercase hover:underline"
          dangerouslySetInnerHTML={{ __html: `Fiction` }}
        ></Link>
        <Link
          href={`/`}
          className="flex text-base font-bold uppercase hover:underline"
          dangerouslySetInnerHTML={{ __html: `Poetry` }}
        ></Link>
        <Link
          href={`/`}
          className="flex text-base font-bold uppercase hover:underline"
          dangerouslySetInnerHTML={{ __html: `Interviews` }}
        ></Link>
        <Link
          href={`/`}
          className="flex text-base font-bold uppercase hover:underline"
          dangerouslySetInnerHTML={{ __html: `Store` }}
        ></Link>
        <Link
          href={`/`}
          className="flex text-base font-bold uppercase hover:underline"
          dangerouslySetInnerHTML={{ __html: `About` }}
        ></Link>
      </div>
    </div>
  );
}
