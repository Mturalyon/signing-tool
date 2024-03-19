import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
        <nav className="header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
}

export default Layout;