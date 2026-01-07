import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import * as todoService from "../services/todo.service";
import Sidebar from "../components/Sidebar";
import UpdateTodoModal from "../components/UpdateTodoModal";

export default function Todos() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    todoService.getTodos(user.uid).then(setTodos);
  }, []);

  const handleUpdate = async () => {
    await todoService.updateTodo(user.uid, selected.id, { title });
    setOpen(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar todos={todos} setSelected={setSelected} />
      <main className="flex-1 p-4">
        {selected && (
          <>
            <h2>{selected.title}</h2>
            <button onClick={() => {
              setTitle(selected.title);
              setOpen(true);
            }}>
              Edit
            </button>
          </>
        )}
      </main>

      <UpdateTodoModal
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
        onSave={handleUpdate}
      />
    </div>
  );
}
