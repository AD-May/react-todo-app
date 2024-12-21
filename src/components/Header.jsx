import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    return (
      <header>
        <FontAwesomeIcon icon={faReact} aria-label="React logo" className="react-logo" />
        <h1 className="title">Todo App</h1>
      </header>
    );
}