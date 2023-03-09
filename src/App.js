import React from 'react';

function App() {

  let [petList, setPetList]=React.useState([]);
  let [petName, setPetName]=React.useState("");
  let [petBreed, setPetBreed]=React.useState("");
  let [petAge, setPetAge]=React.useState(0);

  function handleNameInput(event) {
    setPetName(event.target.value)
  }

  function handleBreedInput(event) {
    setPetBreed(event.target.value)
  }
  
  function handleAgeInput(event) {
    setPetAge(event.target.value)
  }

  function handleClick() {
    let petObject = {"petName":petName, "petBreed":petBreed, "petAge":petAge};
    setPetList( [...petList, petObject]);
    setPetName("");
    setPetBreed("");
    setPetAge(0);
  }

  let petElementArray = petList.map((animal, index) => (
    <div key={index}>
      <div>Name: {animal.petName}</div>
      <div>Breed: {animal.petBreed}</div>
      <div>Age: {animal.petAge}</div>
    </div>
  ));

  return (  
    <div>
      <h4>Pet Store Animal List</h4>
      {petElementArray}
      <input value={petName} 
            onChange={handleNameInput} type="text" placholder="Pet Name"/>
      <input value={petBreed} 
            onChange={handleBreedInput} type="text" placholder="Pet Breed"/>
      <input value={petAge} 
            onChange={handleAgeInput} type="text" placholder="Pet Age"/>                          
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
