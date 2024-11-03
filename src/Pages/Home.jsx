import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";


const Home = () => {

    const categories = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;