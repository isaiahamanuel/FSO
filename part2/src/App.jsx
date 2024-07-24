import { useState } from "react";
import Content from "./components/Content";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const { name, number } = { name: newName, number: newNumber };
    const exists = persons.some((p) => {
      return p.name === newName || p.number === newNumber;
    });
    if (exists) {
      alert(`Name or Number is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }
    setPersons(persons.concat({ name, number }));
    setNewName("");
    setNewNumber("");
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  return (
    <div>
      {" "}
      <Content
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
        name="Phonebook"
      />
    </div>
  );
};

export default App;
