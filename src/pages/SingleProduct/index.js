import { useNavigate } from 'react-router-dom';

import nike1 from './../../assets/images/nike-1.jpg';
import './index.css';

const SingleProduct = () => {
	const navigate = useNavigate();

	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="single-product-container">
				<div className="page-title">
					<h2>
						Nike
						<span>.</span>
					</h2>
					<div className="product-container">
						<div className="product-img">
							<img src={nike1} alt="" />
						</div>
						<div className="product-info">
							<h3 className="product-title">NIKE AIR</h3>
							<p className="product-price">$213</p>
							<p className="product-description">
								The Air Jordan 1 Retro High OG ‘Stage Haze’ features neutral
								tones on the foundational sneaker that started it all. The upper
								combines a white leather base with a grey suede heel overlay and
								a forefoot overlay in cracked black leather.
							</p>
							<button className=" btn">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
