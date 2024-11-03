import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";
import { useState } from "react";


const Coffees = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)
    const handleSort = (sortBy)=> {
        if(sortBy === 'popularity'){
            const sorted = [...data].sort((a, b)=> b.popularity - a.popularity)
            setCoffees(sorted)
        }
        else if(sortBy === 'rating'){
            const sorted = [...data].sort((a, b)=> b.rating - a.rating)
            setCoffees(sorted)
        }
    }

    return (
        <>
            <div className="flex justify-between my-10">
                <div>
                    <h1 className="text-2xl font-bold">Sort coffees by popularity and ratings</h1>
                </div>
                <div>
                    <button onClick={()=> handleSort('popularity')} className="btn btn-warning mr-8">Sort by popularity</button>
                    <button onClick={()=> handleSort('rating')} className="btn btn-warning">Sort by rating</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {
                    coffees.map(coffee => <Cards key={coffee.id} coffee={coffee}></Cards>)
                }
            </div>
        </>
    );
};

export default Coffees;