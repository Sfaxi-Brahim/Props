import photo from "./profilePhoto.jpg"
import Profile from "./Components/Profile";

function App() {
  const styleObject = {color: 'bleu' , textAlign:'center' , margin : '10px'}
  return (
    <div style={styleObject} className="App">
      <Profile fullName="Sfaxi Brahim" onPersoClick={()=> alert("Hi! I'm Sfaxi Brahim")} bio="Hey i'm learning react !" profession="Developper"><img src={photo} alt ='profilePhoto' /></Profile>
    </div>
  );
}

export default App;
