import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { request } from 'graphql-request';

const CategoryPage = () => {
	const [products, setProducts] = useState([]);
	const { category } = useParams();
	const navigate = useNavigate();
	
	useEffect(() => {
		const fetchAodais = async () => {
			const { aodais } = await request(
				`${process.env.REACT_APP_HYGRAPH_API_KEY}`,
				`
         { 
            aodais(where: {category: {slug: "${category}"}}, first: 50) {
							id
							name
							price
							slug
							image {
								url
							}
							category{
								slug
							}
						}
					}
				`
			);

			setProducts(aodais);
		};
		fetchAodais();
	}, [category]);

	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="page-title">
				<h2>
					{category}
					<span>.</span>
				</h2>
			</div>
			<div className="products">
				{products.map((product) => (
					<div key={product.id} className="product">
						<img src={product.image.url} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
								<Link to={`/shop/${product.category.slug}/${product.slug}`}>
									<h3>{product.name}</h3>
								</Link>
								<p className="price">${product.price}</p>
							</div>
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
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
