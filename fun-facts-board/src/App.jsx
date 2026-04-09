import "./App.css";
import FunFactCard from "./FunFactCard.jsx";

function App() {
	return (
		<>
			<section>
				<div className="ahmed-div">
					<h1>Ahmed</h1>
					<FunFactCard fact={"I like soccer!"} />
					<FunFactCard fact={"I like to play the piano"} />
					<FunFactCard fact={"I'm from Iraq!"} />
					<FunFactCard fact={"Ronaldo is the goat."} />
					<FunFactCard
						fact={"Ping pong is fun to play and AHMED is better at it!"}
					/>
				</div>

				<div className="elvin-div">
					<h1>Elvin</h1>
					<FunFactCard fact={"Elvin is better in soccer and thats a fact!"} />
					<FunFactCard fact={"Volleyball just geos better for Elvin and thats a fact!"} />
					<FunFactCard fact={"Basketball is to easy to play for Elvin and thats a fact!"} />
					<FunFactCard fact={"Tennis is fun to play and Elvin is just better and thats a fact!"} />
					<FunFactCard
						fact={"Ping pong is fun to play and elvin is better at then Ahmed and thats a fact!"}
					/>
				</div>
			</section>
		</>
	);
}

export default App;
