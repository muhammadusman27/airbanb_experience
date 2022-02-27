// import one from '../images/hero images/1.png';
// import two from '../images/hero images/2.png';
// import three from '../images/hero images/3.png';
// import four from '../images/hero images/4.png';
// import five from '../images/hero images/5.png';
// import six from '../images/hero images/6.png';
// import seven from '../images/hero images/7.png';
// import eight from '../images/hero images/8.png';
// import nine from '../images/hero images/9.png';

import heroall from '../images/hero.png';


export default function Hero() {
    return (
        <section className='hero'>
            <img src={heroall} alt="hero logo" className='hero_img' />
            <h1 className='hero_header'>Online Experiences</h1>
            <p className='hero_text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}