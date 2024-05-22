import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-black">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex lg:text-left lg:w-2/3">
            <ul className="text-2xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/3">
              <li className="text-left">Contact</li>
              <li className="text-left">Events</li>
              <li className="text-left">Donate</li>
            </ul>
            <div className="flex flex-col justify-center items-center lg:pl-4">
              <p className="text-2xl font-bold">Follow Us</p>
              <ul>
                <li className="text-2xl"><a href="">X</a></li>
                <li className="text-2xl" a href="">Instagram</li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb0%2FThe_University_of_California_Irvine.svg%2F512px-The_University_of_California_Irvine.svg.png&f=1&nofb=1&ipt=73fd7748658c492de5d98ba34c41bca6da2a759a9f696e90eb1ce93e209f47b6&ipo=images"
              alt="UC Irvine logo" className="w-36 h-36" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
