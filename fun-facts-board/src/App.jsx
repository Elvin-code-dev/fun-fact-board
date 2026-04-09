import "./App.css";
import FunFactCard from "./FunFactCard.jsx";

function App() {
	return (
		<div>
			<FunFactCard fact={"I like soccer!"} />
			<FunFactCard fact={"Volleyball is our favorite sport!"} />
			<FunFactCard fact={"Basketball is fun to play!"} />
			<FunFactCard fact={"Tennis is fun to play!"} />
			<FunFactCard fact={"Ping pong is fun to play and elvin is better at it!"} />
		</div>
		
	);
}

export default App;
