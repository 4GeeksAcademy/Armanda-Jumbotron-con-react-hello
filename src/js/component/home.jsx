import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer"





const Home = () => {
	const CartsDatos = [
		{
			image: "https://tse1.mm.bing.net/th?id=OIP.8ghpTHyGu32g83yPWWK3HwHaGa&pid=Api&P=0&h=180 500x325",
			title: "Card title",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere ultrices eros, eu feugiat tellus ultricies in. Aliquam ullamcorper, enim in viverra finibus, ipsum arcu feugiat nulla, id iaculis tellus nisl a risus. Curabitur vel neque nibh",
			link: "#"


		},

		{
			image: "http://estag.fimagenes.com/img/1/W/p/8/Wp8_900.jpg",
			title: "Card title",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere ultrices eros, eu feugiat tellus ultricies in. Aliquam ullamcorper, enim in viverra finibus, ipsum arcu feugiat nulla, id iaculis tellus nisl a risus. ",
			link: "#"
		},
		{
			image: "https://tse3.mm.bing.net/th?id=OIP.DYr1QNhGoPN2fqfHplmICQHaHI&pid=Api&P=0&h=180",
			title: "Card title",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere ultrices eros, eu feugiat tellus ultricies in. Aliquam ullamcorper, enim in viverra finibus, ipsum arcu feugiat nulla, id iaculis tellus nisl a risus. Curabitur vel neque nibh",
			link: "#"
		},
		{
			image: "https://tse1.mm.bing.net/th?id=OIP.JDCUii7YUWvrYGKjqBmQ3QHaF7&pid=Api&P=0&h=180",
			title: "Card title",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere ultrices eros, eu feugiat tellus ultricies in. Aliquam ullamcorper, enim in viverra finibus, ipsum arcu feugiat nulla, id iaculis tellus nisl a risus. Curabitur vel neque nibh",
			link: "#"
		}



	];

	return (

		<>
			<div>
				<Navbar />
				<div className="container">
					<Jumbotron />

					<div className="row row-col-1 row-cols-md-4 g-4">
						{CartsDatos.map((card, index) => {
							console.log(card)
							return (
								<Card
									key={index}
									imagen={card.image}
									title={card.title}
									text={card.text}
									link={card.link} />

							)

						})}
					</div>
				</div>

				<Footer />

			</div>
		</>
	)

};




export default Home;
