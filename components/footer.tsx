import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-black">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex lg:text-left w-screen justify-evenly lg:w-2/3 lg:justify-start px-6 lg:px-0">
            <ul className="text-2xl font-bold text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/3">
              <li className="text-left">Contact</li>
              <li className="text-left">Events</li>
              <li className="text-left">Donate</li>
            </ul>
            <div className="flex flex-col items-center lg:pl-4">
              <p className="text-2xl font-bold">Follow Us</p>
              <ul>
                <li className="text-2xl"><a href="https://twitter.com/faultline_journ">X</a></li>
                <li className="text-2xl"><a href="https://www.instagram.com/faultlinemag">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              <img src="https://i.ibb.co/RcjyDHK/uci-seal.png"
              alt="UC Irvine logo" className="w-36 h-36" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
