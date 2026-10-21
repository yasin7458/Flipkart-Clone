
import Header from "../components/Header";
import BannerSlider from "../components/BannerSlider";
import CategoryNavbar from "../components/CategoryNavbar";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />

            <main className="container-fluid px-3 px-lg-4">
                <BannerSlider />
                <CategoryNavbar />
                <ProductSection />
                <Footer/>
            </main>
        </>
    );
}

export default Home;