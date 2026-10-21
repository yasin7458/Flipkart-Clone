import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function BannerSlider() {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const banners = [
        {
            title: "Big Savings, Bigger Smiles!",
            subtitle: "Discover amazing deals on your favourite products.",
            offer: "UP TO 50% OFF",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
        },
        {
            title: "Upgrade Your Lifestyle",
            subtitle: "Explore the latest trends in fashion and lifestyle.",
            offer: "NEW COLLECTION",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80"
        },
        {
            title: "Your Next Favourite Find",
            subtitle: "Shop smart and find something special every day.",
            offer: "EXCITING DEALS",
            image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1600&q=80"
        }
    ];

    function previousSlide() {
        if (currentSlide === 0) {
            setCurrentSlide(banners.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    function nextSlide() {
        if (currentSlide === banners.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    return (
        <section className="shop-banner">
            <img
                className="shop-banner-image"
                src={banners[currentSlide].image}
                alt="ShopKart shopping offers"
            />

            <div className="shop-banner-overlay"></div>

            <div className="shop-banner-content">
                <span className="shop-banner-offer">
                    {banners[currentSlide].offer}
                </span>

                <h1>{banners[currentSlide].title}</h1>

                <p>{banners[currentSlide].subtitle}</p>

                <button
                    className="shop-banner-btn"
                    onClick={() => navigate("/products")}
                >
                    Shop Now <FaArrowRight />
                </button>
            </div>

            <button
                className="shop-banner-arrow shop-banner-prev"
                onClick={previousSlide}
                aria-label="Previous banner"
            >
                <FaChevronLeft />
            </button>

            <button
                className="shop-banner-arrow shop-banner-next"
                onClick={nextSlide}
                aria-label="Next banner"
            >
                <FaChevronRight />
            </button>

            <div className="shop-banner-dots">
                {banners.map((banner, index) => (
                    <button
                        key={banner.title}
                        className={
                            currentSlide === index ? "active" : ""
                        }
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to banner ${index + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
}

export default BannerSlider;
