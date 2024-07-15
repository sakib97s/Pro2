import banner from '../assets/banner.png'
import Slider from "react-slick";

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="">
                        <img src={banner} className='w-full' alt="banner" />
                    </div>
                    <div className="">
                        <img src={banner} className='w-full' alt="banner" />
                    </div>
                    <div className="">
                        <img src={banner} className='w-full' alt="bann" />
                    </div>
                </Slider>
            </div>

        </section>
    )
}

export default Banner