import airbnb from '../images/logo.png';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={airbnb} alt="logo" className='navbar_image' />
        </nav>
    )
}