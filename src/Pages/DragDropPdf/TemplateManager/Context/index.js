import React from 'react';

const LoadingContext = React.createContext({ isLoading : false, setLoading : () => {}, scale : 1, setScale : () => {} });
export { LoadingContext };