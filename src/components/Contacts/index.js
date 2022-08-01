import React, { useState } from 'react';

import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

function Contacts() {
    const [inputText, setInputText] = useState("");//header için
    const [todos, setTodos] = useState([]);//list için 

  // Listelemede footerdan gelen bilgiyi alabilmek için hide adında string değer tutan bir state oluştuyoruz. Varsayılan değeri 'All'
    const [hide, setHide] = useState("All");

    //const [ todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')));


  return (
    <div>
        <section className="todoapp">
            <Header 
            inputText={inputText} 
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}/>

        <section className="main">
            <List todos={todos}
            setTodos={setTodos}
            hide={hide}/>
        </section>
        
        </section>
            <Footer todos={todos} setTodos={setTodos} setHide={setHide} />
        <footer className="info">
            <p>Click to edit a todo</p>
            <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    </div>

  )
}

export default Contacts
