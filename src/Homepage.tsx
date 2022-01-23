import { useAppDispatch, useAppSelector } from "./state/hooks/ndex";
import { logout } from "./state/slices/userSlice";

const Homepage: React.FC = function () {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="container">
        <div className="user">
          {user.isAuthenticate ? (
            <h2>Current user is {user.name}</h2>
          ) : (
            <>Not logged in</>
          )}
        </div>
        <div className="action-buttons">
          <button
            className="logout"
            onClick={(e) => {
              dispatch(logout());
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
