export default function Sidebar({ todos, setSelected }) {
  return (
    <aside className="w-1/4 border-r p-4">
      {todos.map(todo => (
        <div
          key={todo.id}
          className="cursor-pointer hover:bg-gray-100 p-2"
          onClick={() => setSelected(todo)}
        >
          {todo.title}
        </div>
      ))}
    </aside>
  );
}
