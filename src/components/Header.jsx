import React from 'react'
import "tailwindcss";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 px-8 py-4 z-30 w-full bg-gradient-to-b from-black">
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix_logo"
      />
    </div>
  )
}

export default Header