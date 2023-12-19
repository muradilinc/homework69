import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {clearShows, selectorShows, selectShow} from '../../store/searchShowsSlice';
import {useNavigate} from 'react-router-dom';

const Autocomplete = () => {
  const shows = useAppSelector(selectorShows);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSelectShow = (id: number) => {
    dispatch(selectShow(id));
    navigate(`/shows/${id}`);
    dispatch(clearShows());
  };

  return (
    <>
      {
        shows.length !== 0 ?
          <div className="border border-blue-500 rounded-xl absolute left-[10%] overflow-hidden z-10 bg-white">
            {
              shows.map((show) => (
                <div
                  key={show.id}
                  onClick={() => onSelectShow(show.id)}
                  className="p-3 hover:bg-gray-400 hover:text-white"
                >
                  <h4 className="text-xl">{show.name}</h4>
                </div>
              ))
            }
          </div>
          :
          null
      }
    </>
  );
};

export default Autocomplete;