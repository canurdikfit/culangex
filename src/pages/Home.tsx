import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import gsap from "gsap";
import BackToTop from "../components/BackToTop";
import DisplayBanner from "../components/DisplayBanner";
import Cursor from "../components/Cursor";

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
            <Welcome />
            <Footer />
            <BackToTop />
            <Cursor />
        </main>

    );
}

export default Home;
