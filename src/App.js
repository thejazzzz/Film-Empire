import './App.css';

const PersonDetails = (props) => {
  return(
  <>
  <h1>Name : {props.name}</h1>
  <h1>Last Name : {props.last}</h1>
  <h1>Age : {props.age}</h1>
  </>
);}
const App = () => {

  return (
    <div className="App">
      <PersonDetails
        name ={'Jibii'}
        last = {'Thomas'}
        age = {29}/>
    </div>
  );
}

export default App;
