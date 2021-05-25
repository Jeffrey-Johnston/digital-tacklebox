import { useContext } from "react";
import Link from "next/link";
// import { useHistory } from "react-router-dom";

import AuthContext from "../../context/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  // const history = useHistory();

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // history.replace("/auth");
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Tackle Junkie </Link>
      </div>

      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link href="/user-profile">Profile</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
