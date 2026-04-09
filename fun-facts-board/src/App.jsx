import "./App.css";
import FunFactCard from "./FunFactCard.jsx";

function App() {
	return (
		<>
			<section>
				<div className="ahmed-div">
					<h1>Ahmed</h1>
					<FunFactCard fact={"I like soccer!"} />
					<FunFactCard fact={"Volleyball is our favorite sport!"} />
					<FunFactCard fact={"Basketball is fun to play!"} />
					<FunFactCard fact={"Tennis is fun to play!"} />
					<FunFactCard
						fact={"Ping pong is fun to play and elvin is better at it!"}
					/>
				</div>

				<div className="elvin-div">
					<h1>Elvin</h1>
					<FunFactCard fact={"I like soccer!"} />
					<FunFactCard fact={"Volleyball is our favorite sport!"} />
					<FunFactCard fact={"Basketball is fun to play!"} />
					<FunFactCard fact={"Tennis is fun to play!"} />
					<FunFactCard
						fact={"Ping pong is fun to play and elvin is better at it!"}
					/>
				</div>
			</section>
		</>
	);
}

export default App;
