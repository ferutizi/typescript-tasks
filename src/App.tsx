import { type } from "os";
import React, { useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {

  const [task, setTask] = useState<string>('');

  const [tasks, setTasks] = useState<ITask[]>([])

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(task);
    setTask('')
  }

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, {name, done: false}]
    setTasks(newTasks)
    console.log(tasks)
  }

  return (
    <>
      <h1>Typescript</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setTask(e.target.value)} value={task}/>
        <button>save</button>
      </form>
      {
        tasks.map((item: ITask, i: number) => {
          return <h1 key={i}>{item.name}</h1>
        })
      }
    </>
  );
}

export default App;
