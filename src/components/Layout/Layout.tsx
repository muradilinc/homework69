import React, {PropsWithChildren} from 'react';
import Header from '../Header/Header';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <div className="container mx-auto">
        {children}
      </div>
    </>
  );
};

export default Layout;
