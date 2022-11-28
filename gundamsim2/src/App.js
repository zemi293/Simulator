import logo from './logo.svg';
import './App.css';
import Fighter from './components/GundamFighter';

const GundamList = { //List of Gundams 
	StrikeG: {
		HP: 10,
		Dex: 3,
		Str: 3,
		Const: 4,
		getStrike: function() {
			return this.StrikeG
		}
	},

	ZetaG: {
		HP: 10,
		Dex: 5,
		Str: 3,
		Const: 2,
		getZeta: function() {
			return this.ZetaG
		}
	},

	Sinanju: {
		HP: 10,
		Dex: 4,
		Str: 4,
		Const: 3, 
		getSinanju: function() {
			return this.Sinanju
		}
	},

 	CommQuantG: {
		HP: 10,
		Dex: 4,
		Str: 3,
		Const: 3,
		getCommQuant: function() {
			return this.getCommQuantG
		}
	},

	ShiningG: {
    ImageSrc: require('./GundamProfiles/ShiningG.jpeg'),
		HP: 10,
		Dex: 2,
		Str: 5,
		Const: 3,
		getShining: function() {
			return this.ShiningG
		}
	},
}

function App() {
  return (
    <div className="App">
      <Fighter GundamList = {GundamList}/>
    </div>
  );
}

export default App;
