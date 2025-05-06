import React, { useEffect, useState } from "react";
import LoaderLogo from "../../components/Loader/LoaderLogo";
import { chosenTheme } from "../theme";
import { useRouter } from "next/router";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

const Splash = () => {
  const [redirect, setRedirect] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const id = setTimeout(() => setRedirect(true), 5500);
    () => clearTimeout(id)
  }, [])
  useEffect(()=>{
    if(redirect){
      router.replace('/')
    }
  },[redirect])
  
  return (
    <AnimatedSplash theme={chosenTheme} />
  );

}

export default Splash;
