const Form = () => {
  return (
    <form className="my-5">
      <div className="flex">
        <label className="text-xl" htmlFor="show">Search for Tv show:</label>
        <input
          id="show"
          className="outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
        />
      </div>
    </form>
  );
};

export default Form;