import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CoffeeDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [coffee, setCoffee] = useState({})
    useEffect(() => {
        const singleData = data.find(coffee => coffee.id == id)
        setCoffee(singleData)
    }, [data, id])

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src={coffee.image} alt="" />
                    <h3 className="text-2xl font-bold">{coffee.name}</h3>
                    <p className="py-6">{coffee.description}</p>
                    <ul><li>{coffee.ingredients}</li></ul>
                    <button className="btn btn-warning">Add fevorits</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;