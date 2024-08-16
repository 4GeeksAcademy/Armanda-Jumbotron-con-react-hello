import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer"




//create your first component
const Home = () => {
	const CartsDatos = [
		{
			image: "https://tse1.mm.bing.net/th?id=OIP.8ghpTHyGu32g83yPWWK3HwHaGa&pid=Api&P=0&h=180",
			title: "Card 1",
			description: "hjdgfidhfopijfgo`perfik"
			
		},
		{
			image: "https://via.placeholder.com/150",
			title: "Card 3",
			description: "This is a description for card 2.",
			link: "#"
		  },
		{
			image: "https://tse2.mm.bing.net/th?id=OIP.DCUM4mhh8DU4scSUCz704AHaFj&pid=Api&P=0&h=180",
			title: "Card 2",
			description: "This is a description for card 3.",
			link: "#"
		  },
		{
			image: "https://via.placeholder.com/150",
			title: "Card 4",
			description: "This is a description for card 4.",
			link: "#"
		  }

			
		
	];

	return (
		<>
		<Navbar />
		<Jumbotron />
		<div className="container">
			<div className="row row-col-1 row-cols-md-4 g-4">
				{CartsDatos.map((card, index) => {
					console.log(card)
					return (
						<Card 
				key={index}
				imagen={card.image}
				title={card.title}
				description={card.description}
				link={card.link} />

					)
				
})}
			</div>
		</div>
		<Footer />
		</>
	)

};




export default Home;
