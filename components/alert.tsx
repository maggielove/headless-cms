import Container from "./container";
import Link from "next/link";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Alert({ preview }) {
  if (preview) {
    return (
      <div
        className={cn("border-b", {
          "bg-accent-7 border-accent-7 text-white": preview,
          "bg-accent-1 border-accent-2": !preview,
        })}
      >
        <Container>
          <div className="py-2 text-center text-sm">
              <>
                This is a page preview.{" "}
                <Link
                  href={`/api/exit-preview`}
                  className="underline hover:text-cyan duration-200 transition-colors"
                  dangerouslySetInnerHTML={{ __html: `Click here ` }}
                ></Link>
                to exit preview mode.
              </>
          </div>
        </Container>
      </div>
    );
  }

}
