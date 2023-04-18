import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { request } from 'graphql-request';

import './index.css';

const SingleProduct = () => {
	const [product, setProduct] = useState(null);
	const navigate = useNavigate();
	const { slug, category } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			const { aodai } = await request(
				`${process.env.REACT_APP_HYGRAPH_API_KEY}`,
				`
		{ 
			aodai(where: {slug: "${slug}"}) {
				id
				name
				price
				description
				image {
				  url
				}
			 }
		}
	 `
			);
			setProduct(aodai);
		};
		fetchProduct();
	}, [slug]);

	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="single-product-container">
				<div className="page-title">
					<h2>
						{category}
						<span>.</span>
					</h2>
					{product && (
						<div className="product-container">
							<div className="product-img">
								<img src={product.image.url} alt="" />
							</div>
							<div className="product-info">
								<h3 className="product-title">{product.name}</h3>
								<p className="product-price">${product.price}</p>
								<p className="product-description">{product.description}</p>
								<button
								className="snipcart-add-item btn"
								data-item-id={product.id}
								data-item-price={product.price}
								data-item-image={product.image.url}
								data-item-name={product.name}
							>
								Add to Cart
							</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
