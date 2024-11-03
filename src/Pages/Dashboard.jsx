import { useEffect, useState } from "react";
import { getAllFevorite } from "../components";
import Cards from "../components/Cards";

const Dashboard = () => {

    const [coffees, setCoffees] = useState([])
    useEffect(()=> {
        const fevorites = getAllFevorite()
        setCoffees(fevorites)
    }, [])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {
                coffees.map(coffee => <Cards key={coffee.id} coffee={coffee}></Cards>)
            }
        </div>
    );
};

export default Dashboard;