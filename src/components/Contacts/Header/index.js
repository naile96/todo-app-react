import React from 'react'


function Header({ inputText, setInputText, todos, setTodos }) {
    //const [input, setInput] = useState();

    // const  = (e) => {
    //     console.log(e.target.value);
    // }
     const inputTextHandler = (e) => {
         setInputText(e.target.value)
         

     };

    const submitTodoHandler = (e) => {
        
        e.preventDefault();
        //değişikliği sağlaması için setTodos u aldık
        setTodos([...todos, //önce ki todosları al
            {   text: inputText, //inputTextten aldığın değeri ata
                completed: false, //checked işleminde üstünü çizmek için 
                id: Math.floor(Math.random()*1000)

            }//obj olarak atadık
        ]);
        
        setInputText("")//submit ettikten sonra boş input yap


        // if(input === ""){ 
        //     return false; 
        // }

        // setTodo([...input, input]); 
    };

  return (
    <div>
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={submitTodoHandler}>
                <input value={inputText} className="new-todo" placeholder="What needs to be done?" onChange={inputTextHandler} autoFocus />
            </form>
        </header>
    </div>
  );
}

export default Header
