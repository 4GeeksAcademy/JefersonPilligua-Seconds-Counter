import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ secondSix, secondFive, secondFour, secondThree, secondTwo, secondOne }) => {
	return (
		<div className="text-center">
			<h1>SIMPLE COUNTER</h1>
			<div className="seconds">
				<div className="lineSix">{secondSix % 10}</div>
				<div className="lineFive">{secondFive % 10}</div>
				<div className="lineFour">{secondFour % 10}</div>
				<div className="lineThree">{secondThree % 10}</div>
				<div className="lineTwo">{secondTwo % 10}</div>
				<div className="lineOne">{secondOne % 10}</div>
			</div>
		</div>
	);
};


export default Home;