import React from 'react'

function List({todos, setTodos, hide} ) {
 
  const deleteHandler = (tt) => {
      setTodos(todos.filter((el) => el.id !== tt.id))// id karşılaştırması yaparak filtreleme yapıyoruz.
  } 

  const completeHandler = (e) => {//tıkladığımda true & false yap
    console.log(e);
    setTodos(todos.map((item) => {
        if(item.id === e.id){
          return {
            ...item, completed: !item.completed
          }
        }
        return item;
    }))
  }

  const isComplated = (e) => {
    // Event olarak gelen verinin işaretli olma durumuna göre ve footerdan gelen veriye göre listeleme yapıyoruz.
    // hidden classı atandığında dom listede görünmüyor.
    if (e.completed === true && hide === "All") {
      return "completed";
    } else if (e.completed === true && hide === "Active") {
      return "completed hidden";
    } else if (e.completed === false && hide === "Completed") {
      return "hidden";
    }
  };

  return (
    <div>
      <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todos.map((todo) => (// todos map ederek gelen veriler ile liste elemanlarımızı oluşturuyoruz.
            <li key={todo.id} className={isComplated(todo)}>
              <div className="view">
                <input  className="toggle" type="checkbox"  defaultChecked={todo.completed} onClick={() => completeHandler(todo)}/>
                <label>{todo.text}</label>
                <button onClick={() => deleteHandler(todo)} className="destroy"></button>
              </div>
            </li>
          ))} 
        </ul>
    </div>
  )
}

export default List
