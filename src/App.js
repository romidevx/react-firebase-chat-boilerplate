import React,{ useState, useEffect } from 'react';
import './App.css';

//FIREBASE TOOLS
import db from './firebase';
import firebase from 'firebase';

//COMPONENTS
import Todo from './components/Todo';

function App() {

  const [todo, setTodo] = useState('');
  const [todos,setTodos] = useState([]);
  
  useEffect(() => {

    db.collection('tasks').orderBy('timestamp','desc').onSnapshot(snapshot => {
      //console.log(snapshot.docs.map( doc => doc.data()))
      setTodos(snapshot.docs.map( doc => ({ 
        id:doc.id, 
        todo: doc.data().todo 
      })));
    })

  }, []);


  const addTodo = () => {

    db.collection('tasks').add({
      todo:todo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodo('');
  }


  return (
    <div className="App">
      <h1>Todo App Firebase</h1>

      <input 
        placeholder="Enter new todo.." value={todo}
        onChange={e => setTodo(e.target.value)}
      />

      <button  disabled={!todo} onClick={addTodo}>Add todo</button>
        {
          todos.map( (item,index) => 
            <Todo key={index} item={item}/>
          )
        }
      
    </div>
  );
}

export default App;
