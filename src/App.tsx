import React, { useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {

  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState()

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    console.log(task);
  }

  return (
    <>
      <h1>Typescript</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setTask(e.target.value)}/>
        <button>save</button>
      </form>
    </>
  );
}

export default App;
