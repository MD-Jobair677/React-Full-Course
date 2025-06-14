import { useState } from "react";

const Todo = () => {


    const [list, setList] = useState([]);
    const [Item, setItem] = useState("");


    const setItemList = () => {
        list.push(Item)
        setList([...list]);

    }

    const RemoveItem = (index) => {
      list.splice(index, 1);
      setList([...list]);
    }


    return (
        <div className="todo">
            <h1>Todo List</h1>
            <p>Manage your tasks efficiently!</p>

            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        list.length !== 0 ? (
                            list.map((itemList,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{itemList}</td>
                                    <td><button onClick={() => {
                                        RemoveItem(index);
                                        
                                    }}>Remove</button></td>
                                </tr>
                            );
                            })
                         
                        ) : (<tr></tr>)
                    }





                   

                </tbody>
            </table>




            <input onChange={(e) => setItem(e.target.value)} type="text" placeholder="Inter any thing" />
            <button onClick={setItemList}>Add</button>






        </div>
    );
}
export default Todo;