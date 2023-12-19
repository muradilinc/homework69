import Form from '../../components/Form/Form';
import Autocomplete from '../../components/Autocomplete/Autocomplete';
import {Outlet} from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <Form/>
        <Autocomplete/>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  );
};

export default HomePage;