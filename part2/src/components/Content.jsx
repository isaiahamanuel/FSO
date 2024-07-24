import Form from "./Form";

const Content = ({
  addPerson,
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
    </div>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

export default Content;
