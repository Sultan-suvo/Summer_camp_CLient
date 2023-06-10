import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Song Book | Home</title>
            </Helmet>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;