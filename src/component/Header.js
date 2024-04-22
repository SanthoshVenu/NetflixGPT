import React from "react";

const Header = () => {
  return (
    <div>
      <img
        className="absolute w-44 px-5 py-2 bg-gradient-to-b from-black z-30"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
    </div>
  );
};

export default Header;
