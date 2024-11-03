import { NavLink } from "react-router-dom";


const Categories = ({categories}) => {

    return (
        <div role="tablist" className="tabs tabs-boxed ">
            {
                categories.map(category => (<NavLink key={category.id} to={`/category/${category.category}`} role="tab" className={({isActive})=> `tab text-2xl font-bold ${isActive? 'tab-active': ''}`}>{category.category}</NavLink>))
            }
        </div>
    );
};

export default Categories;