import styles from "./loginStyle.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className="font-sans">
        <div className={styles.formContainer}>
          <div className="relative  flex flex-col sm:justify-center items-center">
            <div className="relative sm:max-w-sm w-full">
              <div className="card bg-gray-600 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
              <div className="card bg-yellow-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label className="block mt-3 text-lg text-gray-700 text-center font-semibold">
                  CNC Manager
                </label>
                <label className="block mt-10 text-sm text-gray-700 text-center font-semibold">
                  Login
                </label>
                <form method="#" action="#" className="mt-7">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="mt-1 p-2 block w-full border-none bg-gray-100 h-10 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 text-xs"
                    />
                  </div>

                  <div className="mt-7">
                    <input
                      type="password"
                      placeholder="Password"
                      className="mt-1 p-2 block w-full border-none bg-gray-100 h-10 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                  </div>

                  <div className="mt-7 flex">
                    <label className="inline-flex items-center w-full cursor-pointer">
                      <input
                        id="remember_me"
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        name="remember"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Remember me
                      </span>
                    </label>

                    <div className="w-full text-right">
                      <a
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 mb-4">
                    <button className="bg-gray-500 w-full py-2 rounded-xl text-white shadow-xl hover:bg-gray-600 focus:outline-none">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
