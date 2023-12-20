import {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch} from '../../redux/hooks';
import {fetchShows} from '../../store/searchShowsThunk';

const Form = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');

  useEffect(() => {
    dispatch(fetchShows(name));
  }, [dispatch, name]);

  const changeName = (events: ChangeEvent<HTMLInputElement>) => {
    setName(events.target.value);
  };

  return (
    <form className="my-5">
      <div className="flex">
        <label className="text-xl" htmlFor="show">Search for Tv show:</label>
        <input
          value={name}
          onChange={changeName}
          id="show"
          autoComplete="off"
          className="outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
        />
      </div>
    </form>
  );
};

export default Form;