import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark py-3 shadow-sm mb-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-white">💬 Chat App</h5>
          <nav className="d-flex gap-3">
            <Link to="/admin">
              <p className="mb-0 text-white fw-semibold" role="button">
                Admin
              </p>
            </Link>
            <Link to="/list">
              <p className="mb-0 text-white fw-semibold" role="button">
                List
              </p>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
