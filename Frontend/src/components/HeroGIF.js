import React, { useState, useEffect } from "react";

function HeroGIF() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prevState) => !prevState);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {showFirst ? (
        <lord-icon
          src="https://cdn.lordicon.com/gjkgpzlj.json"
          trigger="loop"
          stroke="bold"
          colors="primary:#121331,secondary:#e83a30,tertiary:#3a3347,quaternary:#ebe6ef,quinary:#646e78,senary:#4bb3fd,septenary:#ffc738"
          style={{
            width: "500px",
            height: "500px",
            transition: "opacity 1s ease-in-out",
          }}
        ></lord-icon>
      ) : (
        <lord-icon
          src="https://cdn.lordicon.com/tvnlqabt.json"
          trigger="loop"
          colors="primary:#4bb3fd,secondary:#ffc738,tertiary:#3a3347,quaternary:#e83a30,quinary:#646e78,senary:#ebe6ef"
          style={{
            width: "500px",
            height: "500px",
            transition: "opacity 1s ease-in-out",
          }}
        ></lord-icon>
      )}
    </div>
  );
}

export default HeroGIF;
