import React from "react";

const ScrollableRowMovieCardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-[14.3%] 2xl:w-[12.5%] 3xl:w-[11.1%] inline-block">
      {children}
    </div>
  );
};

export default ScrollableRowMovieCardWrapper;
