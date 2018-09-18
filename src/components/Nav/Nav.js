import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
        return (
            <div className='Nav'>
            <Link to={'/'}>
            <img src="https://cdn.shopify.com/s/files/1/2160/1407/files/JT_Full_Logo_RGB_75x@2x.png" alt=""/>
            </Link>
            <button>New</button>
            <button>Clothing</button>
            <button>Shoes</button>
            <button>Accessories</button>
            <button>Sale</button>
            <input type="text" placeholder='Search'/>
            <Link to={'/account/login'}>
            <button>Account</button>
            </Link>
            <button>Bag</button>
            </div>
        )
}

export default Nav;