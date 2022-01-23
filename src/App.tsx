import { Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Homepage from "./Homepage";
import Login from "./Login";

const App: React.FC = function () {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Fragment>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
