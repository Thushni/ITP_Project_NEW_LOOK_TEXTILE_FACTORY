import React from 'react';
import '../css/home_styles.css';
import Background from '../../img5.jpeg';

const Home = () => {
    return(
        <div className='d-flex justify-content-center' style={{  }}>

            <div className='pt-lg-5' style={{ position: 'absolute', textAlign: 'center' }}>
                <h1 style={{ color: 'black' }} className='font-weight-bold display-4'><b>Look Your Newest Fashion</b></h1>
                <h1 style={{ color: 'black' }} className='font-weight-bold display-7'>Come and join with us</h1><br/><br/>
                <h1 style={{ color: 'black' }} className='font-weight-bold display-4'> <b>Creative Textile mills- textile manufactures in Sri Lanka</b></h1>
                
            </div>

            <div style={{ position: 'absolute', marginTop: 550 }}>
                <h3 style={{ color: 'black' }} className='font-weight-bold'>newLook.twitter.com</h3>
                <h3 style={{ color: 'black' }} className='font-weight-bold'>newlook.facebook.com</h3>
                <h3 style={{ color: 'black' }} className='font-weight-bold'>newlook.facebook.com</h3>
                <h3 style={{ color: 'black' }} className='font-weight-bold'>NewLook.youtube.com</h3>
            </div>
            <div style={{ position: 'absolute', marginTop: 750 }}>
                <h3 style={{ color: 'black' }} className='font-weight-bold'>Hotline - 011-8666550, 076-4511181, 070-3299000</h3>
            </div>

            
            <img className='imgHome' src={ Background } />

            
            
        </div>
    )
}

export default Home;