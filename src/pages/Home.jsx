import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products.json';
import HomeCategory from '../components/HomeCategory';
import '../style/home.css';
import HomeCarousel from '../components/HomeCarousel';

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const categories = Object.keys(products);
        this.setState({categories});
    }

    render() {
        return(

                <div className="home">
                    <div className='home__band'>
                       <p className='home__band__text'>Free Delivery & Returns</p> 
                       <p className='home__band__text'>100 Days Return</p>
                       <p className='home__band__text'>Loyalty Points</p> 
                    </div>


                    <div className='home__header'>
                        <h1 className='home__header__title'>Essentials for this season</h1>
                        <button className='home__header__btn btn'>Shop all</button>

                    </div>

                    <div className='home__shopby container'>
                        <Link to="/categories">
                        <h2 className='home__shopby__title'>New In</h2>
                        <h3 className='home__shopby__subtitle'>Shop all new by category</h3>
                        </Link>
                        <div className="home__categories">
                        {this.state.categories.map((category, index) =>
                            <HomeCategory
                                key={index}
                                route={category}
                                name={products[category].name}
                                description={products[category].description}
                                image={products[category].image}
                            />
                        )}
                        </div>
                    </div>

                    <div className='home__favs container'>
                        <Link to="/">
                        <h2 className='home__favs__title'>Must Haves</h2>
                        <h3 className='home__favs__subtitle'>Shop all time favorites</h3>
                        </Link>
                    <div>
                        <HomeCarousel/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;