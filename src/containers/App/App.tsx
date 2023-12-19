import Layout from '../../components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import SingleShow from '../SingleShow/SingleShow';
import HomePage from '../HomePage/HomePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <>
      <Layout>
          <Routes>
            <Route path="/" element={<HomePage/>}>
              <Route path="/shows/:id" element={<SingleShow/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
      </Layout>
    </>
  );
};

export default App;