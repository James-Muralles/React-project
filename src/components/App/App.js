import React, {useState} from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

// const business = {
//     imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//     name: 'MarginOtto Pizzeria',
//     address: '1010 Paddington Way',
//     city: 'Flavortown',
//     state: 'NY',
//     zipCode: '10101',
//     category: 'Italian',
//     rating: 4.5,
//     reviewCount: 90
// };

// const businesses = [
//     business,
//     business,
//     business,
//     business,
//     business,
//     business
// ];
const App = () =>{
// class App extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state ={
//             businesses: []
//         };
//         this.searchYelp = this.searchYelp.bind(this);
//     }

    const [businesses, setBusinesses] = useState([]);

   const searchYelp = (term, location, sortBy) =>{
    Yelp.searchYelp(term, location, sortBy).then(businesses=>{
        // this.setState({
        //     businesses: businesses
        // })
        setTimeout(businesses)
    })
    };

  // render(){
       return <div className="App">
            <h1>RAVENOUS</h1>
            <SearchBar searchYelp={searchYelp}/>
            <BusinessList businesses={businesses}/>
        </div>
    }
// }

export default App;
