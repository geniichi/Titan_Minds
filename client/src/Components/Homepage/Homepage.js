import React, { useState, useEffect } from "react";
import AboutUs from "./AboutUs/AboutUs";
import PopSectLG from './PopularSect/PopSectLG'
import PopSectSM from './PopularSect/PopSectSM'
import Review from "./Reviews/Review";
import Welcome from "./WelcomeSection/Welcome";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = ({SortedByPopularityBooks}) => {
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsLarge(window.innerWidth > 991.98);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <>
            <Welcome/>
            <AboutUs/>
            {isLarge ? <PopSectLG SortedByPopularityBooks={SortedByPopularityBooks}/> : <PopSectSM SortedByPopularityBooks={SortedByPopularityBooks}/>}
            <WhyChooseUs/>
            <Review/>
        </>
    )
}

export default Home;
