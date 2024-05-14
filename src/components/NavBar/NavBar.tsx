import styles from "./NavBarStyle.module.scss";
import logo from "../../assets/Logo.png";
const NavBar = () => {
  return (
    <div dir="rtl" className="navbar">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600 hover:text-gray-900"
          >
            <img src={logo} className="h-8" alt="Alhuda Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Alhuda
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-base  text-gray-600 dark:gray-yellow-500 hover:text-gray-900 "
            >
              מערכת לניהול קבצי CNC
            </a>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-sm  text-gray-600 dark:gray-yellow-500 hover:text-red-600"
            >
              התנתק (Ahmed)
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm ">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white underline-none hover:text-gray-900"
                  aria-current="page"
                  dir="ltr"
                >
                  CNC בונה
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white underline-none hover:text-gray-900"
                >
                  היסטוריה
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white underline-none hover:text-gray-900"
                >
                  הגדרות
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
