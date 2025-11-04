import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../../features/home/Home";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="max-w-[1425px] mx-auto">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
