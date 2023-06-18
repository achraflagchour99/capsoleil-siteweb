import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import picture1 from "../../assets/img/wacvsdhj1.jpg";
import picture2 from "../../assets/img/wacvsdhj2.jpg";
import picture3 from "../../assets/img/wacvsdhj3.jpg";

function IndexHeader() {
  const [currentPicture, setCurrentPicture] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPicture((prevPicture) => (prevPicture + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const pictures = [picture1, picture2, picture3];

  return (
    <>
      <div className="page-header dark-filter">
        <div
          className="page-header-image dark-filter"
          style={{
            backgroundImage: `url(${pictures[currentPicture]})`,
            transition: "background-image 0.75s ease-in-out" // Add the transition CSS property
          }}
        ></div>
      </div>
    </>
  );
}

export default IndexHeader;
