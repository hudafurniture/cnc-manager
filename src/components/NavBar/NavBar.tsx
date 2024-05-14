import styles from "./NavBarStyle.module.scss";
import logo from "../../assets/Logo.png";
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const nav1Ref = useRef<HTMLInputElement>(null);
  const nav2Ref = useRef<HTMLInputElement>(null);
  const nav3Ref = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    // change nav items background color based on pathname
    const nav1 = nav1Ref.current;
    const nav2 = nav2Ref.current;
    const nav3 = nav3Ref.current;
    if (location.pathname === "/cnchome") {
      nav1?.classList.add(styles.clickedItem);
      nav2?.classList.remove(styles.clickedItem);
      nav3?.classList.remove(styles.clickedItem);
    } else if (location.pathname === "archive") {
      nav1?.classList.remove(styles.clickedItem);
      nav2?.classList.add(styles.clickedItem);
      nav3?.classList.remove(styles.clickedItem);
    } else if (location.pathname === "cncsettings") {
      nav1?.classList.remove(styles.clickedItem);
      nav2?.classList.remove(styles.clickedItem);
      nav3?.classList.add(styles.clickedItem);
    }
  }, [location.pathname]);

  return (
    <div className="navbar">
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 hover:text-gray-900"
          >
            <img src={logo} className="h-8" alt="Alhuda Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-mono">
              Alhuda
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-base  text-gray-600 dark:gray-yellow-500 hover:text-gray-900 "
            >
              CNC Manager
            </a>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-sm  text-gray-600 dark:gray-yellow-500 hover:text-red-600"
            >
              Logout (Ahmed)
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm ">
              <li className={styles.navLink} ref={nav1Ref}>
                <a
                  href="#"
                  className=" dark:text-white underline-none hover:text-gray-900"
                  aria-current="page"
                >
                  CNC Maker
                </a>
              </li>
              <li className={styles.navLink} ref={nav2Ref}>
                <a
                  href="#"
                  className=" dark:text-white underline-none hover:text-gray-900"
                >
                  Archive
                </a>
              </li>
              <li className={styles.navLink} ref={nav3Ref}>
                <a
                  href="#"
                  className=" dark:text-white underline-none hover:text-gray-900"
                >
                  Settings
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
