import './App.css';
import Fighter from './components/GundamFighter/GundamFighter.js';
import Profile from './components/GundamProfiles/GundamProfile.js'

const GundamList = [ //List of Gundams 
	{
		Name: Strike_Gundam,
		ImageSrc:require(),
		ProfilePic:require(),
		HP: 10,
		Dex: 3,
		Str: 3,
		Const: 4,
		getStrike: function() {
			return this.StrikeG
		}
	},

	{	Name: ZetaG,
		ImageSrc:require(),
		ProfilePic:require(),
		HP: 10,
		Dex: 5,
		Str: 3,
		Const: 2,
		getZeta: function() {
			return this.ZetaG
		}
	},

	{
		Name: Sinanju,
		ImageSrc:require(),
		ProfilePic:require('./components/GundamProfiles/SinanjuProfile'),
		HP: 10,
		Dex: 4,
		Str: 4,
		Const: 3, 
		getSinanju: function() {
			return this.Sinanju
		}
	},

 	{
		Name: Command_Quanta,
		ImageSrc:require('./components/GundamProfiles/Command_Quanta.jpeg'),
		ProfilePic:require('./components/GundamProfiles/Command_QuantaProfile.jpeg'),
		HP: 10,
		Dex: 4,
		Str: 3,
		Const: 3,
		getCommQuant: function() {
			return this.getCommQuantG
		}
	},

	{
		Name: Shining_Gundam,
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
]

function App() {
  return (
    <div className="App">
      <Fighter GundamList = {GundamList}/>
	  <Profile GundamList = {GundamList}/>
    </div>
  );
}

export default App;
