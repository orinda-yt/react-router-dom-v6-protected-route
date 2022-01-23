import { useAppDispatch} from "./state/hooks/ndex";
import { login } from "./state/slices/userSlice";

const Login: React.FC = function () {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="container">
        <h1>Click the button to login</h1>
        <div className="action-buttons">
          <button
            className="login"
            onClick={(e) => {
              dispatch(login());
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
