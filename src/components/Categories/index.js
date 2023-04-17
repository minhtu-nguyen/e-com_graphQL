import './index.css';

import './index.css';

// import nikeCategory from './../../assets/images/nike-category.png';
// import yeezyCategory from './../../assets/images/yeezy-category.png';
// import jordanCategory from './../../assets/images/jordan-category.png';

const Categories = () => {
	return (
		<div className="categories-container">
			<h2 className="title">Categories</h2>
			<div className="categories">
				<div className="category">
					<img src="/udata/1QLy1P1PoMo/nike-category.jpeg" className="category-img" alt="" loading="lazy" />
				</div>
				<div className="category">
					<img src="/udata/kkGJE7mYb1E/yeezy-category.jpeg" className="category-img" alt="" loading="lazy" />
				</div>
				<div className="category">
					<img src="/udata/z0l5q2YErVa/jordan-category.jpeg" className="category-img" alt="" loading="lazy" />
				</div>
			</div>
		</div>
	);
};

export default Categories;
