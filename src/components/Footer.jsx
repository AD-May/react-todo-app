import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <small>Created by 
                <a href="https://github.com/AD-May">
                    <FontAwesomeIcon icon={faGithub} />
                Alexander May
                </a>
            </small>
        </footer>
    );
}