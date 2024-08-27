import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import gsap from "gsap";
import BackToTop from "../components/BackToTop";
import DisplayBanner from "../components/DisplayBanner";
import Cursor from "../components/Cursor";
import About from "../components/About";
import Discovery from "../components/Discovery";

function Home() {
    useGSAP(() => {
        gsap.to(".main", 0, {
            css: {
                visibility: "visible",
            },
        });
    }, []);

    return (
        <main className="main w-screen overflow-hidden">
            <Navbar />
            <DisplayBanner />
            <section className="overflow-visible" id="scroll" >
                <Welcome />
                <About />
                <Discovery />
            </section>
            <Footer />
            <BackToTop />
            <Cursor />
        </main>

    );
}

export default Home;
