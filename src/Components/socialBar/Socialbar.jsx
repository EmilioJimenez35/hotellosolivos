import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './socialbar.css';
import Icofont from 'react-icofont';

const Social = () => {
  return (
    <div className="social-bar">
      <a 
        href="https://www.facebook.com/hotellosolivostermas"
        class="icon icon-facebook"
        target="blank"
      ><Icofont icon="icofont-facebook"/></a>

      <a
        href="https://api.whatsapp.com/send?phone=54 381 575-2128"
        class="icon icon-whatsapp"
        target="blank"
      ><Icofont icon="icofont-whatsapp"/></a>

      <a
        href="https://www.instagram.com/hotellosolivos21"
        class="icon icon-instagram"
        target="blank"
      ><Icofont icon="icofont-instagram"/></a>
    </div>
  );
};

export default Social;
