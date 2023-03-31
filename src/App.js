
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
     
      <PersonCard 
      LastName={"Doe  "}
      FirstName= {"Jane"}
      intialAge={45}
      />
       <PersonCard 
      LastName={"Smith"}
      FirstName= {"John"}
      intialAge={88}
      />
    
    </div>
  );
}

export default App;
