import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyWrapper = ({
  children,
  lazyLoad = true,
  ...props
}) => {
  return (
    <>
      {lazyLoad ? (
        <LazyLoad {...props}>{children}</LazyLoad>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default LazyWrapper;