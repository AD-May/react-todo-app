import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";

export default function App() {
    return (
      <div className="container-fluid">
        <Header />
        <main>
          <TodoList />
        </main>
      </div>
    );
}