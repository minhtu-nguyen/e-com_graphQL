import { Link } from 'react-router-dom';
import './index.css';

const Hero = () => {
	return (
		<div className="hero-container">
			<h1>
				Welcome<span>.</span>
			</h1>
			<h3>Ao dai Online Store</h3>
			<small>Modern | Traditional | Linen</small>
			<Link to="/shop" className="btn">
				Shop Now
			</Link>
		</div>
	);
};

export default Hero;