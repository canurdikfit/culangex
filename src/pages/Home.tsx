import { useGSAP } from "@gsap/react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import gsap from "gsap";

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
            <Loading />
            <Navbar />
            <Banner />
            <Welcome />
            <Footer />
        </main>
    );
}

export default Home;
