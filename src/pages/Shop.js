import { useNavigate } from 'react-router-dom';

import nike1 from './../assets/images/nike-1.jpg';
import nike2 from './../assets/images/nike-2.jpg';
import nike3 from './../assets/images/nike-3.jpg';

const Shop = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="page-title">
				<h2>
					Shop<span>.</span>
				</h2>
			</div>
			<div className="products">
				<div className="product">
					<img src={nike1} className="product-img" alt="" /> @todo change these
					<div className="product-content">
						<div className="flex-row">
							<h3>NIKE AIRFORCE !</h3>
							<p className="price">$512</p>
						</div>
						<button className=" btn">Add to Cart</button>
					</div>
				</div>
				<div className="product">
					<img src={nike2} className="product-img" alt="" />
					<div className="product-content">
						<div className="flex-row">
							<h3>NIKE AIRFORCE !</h3>
							<p className="price">$512</p>
						</div>
						<button className=" btn">Add to Cart</button>
					</div>
				</div>
				<div className="product">
					<img src={nike1} className="product-img" alt="" />
					<div className="product-content">
						<div className="flex-row">
							<h3>NIKE AIRFORCE !</h3>
							<p className="price">$512</p>
						</div>
						<button className=" btn">Add to Cart</button>
					</div>
				</div>
				<div className="product">
					<img src={nike3} className="product-img" alt="" />
					<div className="product-content">
						<div className="flex-row">
							<h3>NIKE AIRFORCE !</h3>
							<p className="price">$512</p>
						</div>
						<button className=" btn">Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
