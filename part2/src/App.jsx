import { useState, useEffect } from "react";
import axios from "axios";
import Content from "./components/Content";
import personsService from "./services/personsService";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 0, name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log(response.data);
      setPersons(response.data);
    });
  }, []);

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
    personsService.create({ name, number }).then((response) => {
      setPersons(persons.concat(response));
      setNewName("");
      setNewNumber("");
    });
  };

  const removePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    const result = window.confirm(`Delete ${person.name} ?`);
    if (result) {
      personsService.remove(id).catch(() => {
        alert(
          `Information of ${person.name} has already been removed from server`
        );
      });
      setPersons(persons.filter((p) => p.id !== id));
    }
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
        persons={persons}
        addPerson={addPerson}
        removePerson={removePerson}
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
