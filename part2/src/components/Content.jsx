import Form from "./Form";

const Content = ({
  persons,
  addPerson,
  removePerson,
  newName,
  handleNameChange,
  handleNumberChange,
  newNumber,
  name,
}) => {
  return (
    <div>
      <Header name={name} />
      <Form
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <div>
        <h2>Numbers</h2>
        {persons.map((person) => (
          <div key={person.id}>
            <p>
              {person.name} {person.number}
            </p>
            <button onClick={() => removePerson(person.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

export default Content;
