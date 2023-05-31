import { Link } from "react-router-dom";

const MainPageHeader = () => {
  return (
      <header>
          <h1 className="title">Electric Games</h1>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/delete-games">
              Delete Game
            </Link>
          </li>
          <li>
            <Link className="link" to="/game-by-id">
              Get Game By ID
            </Link>
          </li>
          <li>
            <Link className="link" to="/game-by-title">
              Get Game By title
            </Link>
          </li>
          <li>
            <Link className="link" to="/update-game">
              Update Game
            </Link>
          </li>
          <li>
            <Link className="link" to="/create-game">
              Create Game
            </Link>
          </li>
          <li>
            <Link className="link" to="/game-quiz">Quiz</Link>
          </li>
        </ul>
      </header>
  );
};

export default MainPageHeader;
