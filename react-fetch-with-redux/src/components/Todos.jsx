import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTodos from "../services/Action/TodosAction";


const API_URL = `https://jsonplaceholder.typicode.com/todos`

const Todos = () => {
      const { isLoading, todos, error } = useSelector((state) => state)
      console.log(isLoading);

      const dispatch = useDispatch()

      useEffect(() => {
            dispatch(getAllTodos())
      }, [])
      return (
            <div>
                  <h4>This is todos App</h4>
                  {isLoading && <small>Loading......</small>}
                  {error && <small>{error.message}</small>}

                  <section>
                        {todos && todos.map((todo) => {
                              return <article key={todo.id}>
                                    <h4>{todo.title}</h4>
                              </article>
                        })}
                  </section>
            </div>
      );
};

export default Todos;