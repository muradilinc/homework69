import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-center py-5 bg-blue-500 text-white">
      <h1 className="text-3xl"><Link to="/">Tv shows</Link></h1>
    </div>
  );
};

export default Header;