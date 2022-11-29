import logo from './logo.svg';
import './App.css';
import Fighter from './components/GundamFighter/GundamFighter.js';
import Profile from './components/GundamProfiles/GundamProfile.js'

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
    	ImageSrc: require('./components/GundamProfiles/ShiningG.jpeg'),
		ProfilePic: require('./components/GundamProfiles/ShiningGProfile.jpeg'),
		GundamWiki: 'https://gundam.fandom.com/wiki/GF13-017NJ_Shining_Gundam',
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
	  <Profile GundamList = {GundamList}/>
    </div>
  );
}

export default App;
