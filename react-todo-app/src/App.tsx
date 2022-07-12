import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("red");
  const [gender, setGender] = React.useState<string | undefined>("");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const changeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, age, color, gender);
  };

  return (
    <div className="pa-16">
      <form onSubmit={handleSubmit}>
        <Input name="Name" value={name} onChange={changeName} />
        <Input name="Age" value={age} onChange={changeAge} />
        <RadioInput name="Gender" onChange={changeGender} />
        <Select name="Favourite Color" value={color} onChange={changeColor} />
        <button type="submit" className="btn-primary mb-16">
          Submit
        </button>
        <button className="btn-secondary">Clear</button>
      </form>
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type RadioType = {
  name: string;
  // value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioInput = ({ name, onChange }: RadioType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <br />
      <input
        type="radio"
        name="gender"
        value="Male"
        onChange={onChange}
        className="radioInput"
      />
      <label>Male</label>
      <br />
      <input
        type="radio"
        name="gender"
        value="Female"
        onChange={onChange}
        className="radioInput"
      />
      <label>Female</label>
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

// class app extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type="radio" value="Male" name="gender" /> Male
//         <input type="radio" value="Female" name="gender" /> Female
//         <input type="radio" value="Other" name="gender" /> Other
//       </div>
//     );
//   }
// }
