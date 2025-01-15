import React, { useState } from 'react';

import Homepage1 from './Homepage1';
import Homepage2 from './Homepage2';
import { useEffect } from 'react';
const Homepage = ({}) => {
  
  const [login, setLogin] = useState(false);
    useEffect(() => {
        // Retrieve data from local storage
       
        const storedLogin = localStorage.getItem('login') === 'true';
        if ( storedLogin) {
          
            setLogin(storedLogin);
        }
    }, []);

  return (
   <>
   {/* afterlogin */}
   {!login ? <Homepage1/> : <Homepage2/>}
   </>

    
  
  )
}

export default Homepage
