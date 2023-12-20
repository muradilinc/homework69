import Form from '../../components/Form/Form';
import Autocomplete from '../../components/Autocomplete/Autocomplete';
import {Outlet} from 'react-router-dom';
import {useAppSelector} from '../../redux/hooks';
import {selectorFetchLoading} from '../../store/searchShowsSlice';
import Spinner from '../../components/Spinner/Spinner';

const HomePage = () => {
  const fetchLoading = useAppSelector(selectorFetchLoading);

  return (
    <>
      <div className="relative">
        <Form/>
        <Autocomplete/>
      </div>
      <div>
        {
          fetchLoading ?
            <Spinner/>
            :
            <Outlet/>
        }
      </div>
    </>
  );
};

export default HomePage;