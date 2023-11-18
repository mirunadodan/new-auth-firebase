import React from 'react';
import {Link} from 'react-router-dom';

const HomeCategory = (props) => {
    const {route, name, description, image} = props;

    return(
        <div className="home__category__item" style={{ backgroundImage:`url(${image})`,backgroundSize:"cover", backgroundPosition: "center" }}>
            <Link to={`/category/${route}`}>
                <div className='home__category__overlay'>
                <strong>{name}</strong>
                <p>{description}</p>
                </div>
            </Link>
        </div>
    );
}

export default HomeCategory;