import Alert from "./alert";
import Nav from "./nav";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
