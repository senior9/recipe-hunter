import React from 'react';
import { useContext } from 'react';
import { authProvider } from '../../Provider/UseProvider';
import { ProgressBar } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading,user} = useContext(authProvider);
   if (loading) {
    return (
        <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={20} key={2} />
        <ProgressBar striped variant="danger" now={10} key={3} />
      </ProgressBar>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>;
};

export default PrivateRoute;