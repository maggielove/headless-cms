import Alert from "./alert";
import Nav from "./nav";
import MobileNav from "./nav-mobile";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Nav />
        <MobileNav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
