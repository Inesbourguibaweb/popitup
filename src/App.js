
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className="App">
      <PersonCard 
      LastName={"Doe"}
      FirstName= {"Jane"}
      age={45}
      hairColor={"Black"}
      />
       <PersonCard 
      LastName={"Smith"}
      FirstName= {"John"}
      age={88}
      hairColor={"Brown"}
      />
       <PersonCard 
      LastName={"Fillmore"}
      FirstName= {"Millard"}
      age={50}
      hairColor={"Brown"}
      />
       <PersonCard 
      LastName={"Smith"}
      FirstName= {"Maria"}
      age={62}
      hairColor={"Brown"}
      />
    </div>
    </div>
  );
}

export default App;
