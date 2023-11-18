import React from 'react';
import products from '../products.json';
import HomeCategory from '../components/HomeCategory';
import '../style/home.css';

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

                <div className="">
                    <div className='home__band'>
                       <p className='home__text'>Free Delivery & Returns</p> 
                       <p className='home__text'>100 Days Return</p>
                       <p className='home__text'>Loyalty Points</p> 
                    </div>


                    <div className='home__header'>
                        <h1 className='home__header__title'>Essentials for this season</h1>
                        <button className='home__header__btn'>Shop all</button>

                    </div>

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
        );
    }
}

export default Home;