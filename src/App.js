import React, { useEffect, useRef, useState } from "react";
import "./styles/menu.scss";

function App() {
  const menu = useRef(null);
  const menuItems = useRef([]);
  const menuContainer = useRef(null);
  const backgroundPattern = useRef(null);
  const background2 = useRef(null);
  const menuExit = useRef(null);
  const cursor = useRef(null);
  const menuArr = ["Home", "About Me", "Projects", "Contact"];
  const [isHover, setIsHover] = useState(false);
  // useEffect(() => {}, []);

  // window.onmousemove = (e) => {
  //   const mouseX = e.clientX,
  //     mouseY = e.clientY;

  //   const xDecimal = mouseX / window.innerWidth,
  //     yDecimal = mouseY / window.innerHeight;

  //   const maxX = background2.current.offsetWidth - window.innerWidth,
  //     maxY = background2.current.offsetHeight - window.innerHeight;

  //   const panX = maxX * xDecimal * -1,
  //     panY = maxY * yDecimal * -1;

  //   // menu.current.style.transform = `translate(${xDecimal}px, ${yDecimal}px)`;
  //   // console.log(background)

  //   background2.current.animate(
  //     {
  //       transform: `translate(${panX}px, ${panY}px)`,
  //     },
  //     {
  //       duration: 4000,
  //       fill: "forwards",
  //       easing: "ease",
  //     }
  //   );
  // };

  window.onmousemove = (e) => {
    const mouseX = e.clientX,
      mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
      yDecimal = mouseY / window.innerHeight;

    const maxX = menuContainer.current.offsetWidth - window.innerWidth,
      maxY = menuContainer.current.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal,
      panY = maxY * yDecimal;

    // backgroundPattern.current.style.backgroundPosition = `-${xDecimal * 10}% -${
    //   yDecimal * 10
    // }%`;

    cursor.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    // console.log(xDecimal * 10, yDecimal * 10);
    // menuContainer.current.animate(
    //   {
    //     transform: `translate(${panX + 100}px, ${panY + 200}px)`,
    //   },
    //   {
    //     duration: 4000,
    //     fill: "forwards",
    //     easing: "ease",
    //   }
    // );
  };

  const mouseLeaveHandler = () => {
    cursor.current.style.opacity = "0";
  };

  const mouseEnterHandler = () => {
    cursor.current.style.opacity = "1";
  };

  const clickHandler = (e) => {
    e.target.classList.add("active");
    backgroundPattern.current.style.opacity = "0";

    // menuExit.current.style.opacity = "0";
    menuContainer.current.style.pointerEvents = "none";

    menuItems.current.forEach((element) => {
      if (element.id != e.target.id) {
        element.classList.add("inactive");
      }
    });
  };

  const hoverEffects = (e) => {
    menu.current.dataset.activeIndex = e.target.id;
    menu.current.dataset.hover = true;
  };

  const menuHoverChecker = (e) => {
    menu.current.dataset.hover = false;
  };

  return (
    <div
      id="menu"
      ref={menu}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
    >
      <div id="menu-items" ref={menuContainer}>
        {menuArr.map((item, index) => {
          return (
            <div
              className="menu-item"
              key={index}
              id={index}
              ref={(element) => {
                menuItems.current[index] = element;
              }}
              onMouseOver={(e) => hoverEffects(e)}
              onMouseLeave={menuHoverChecker}
              onClick={(e) => clickHandler(e)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div id="menu-logo" ref={menuExit}>
        <span>
          <i className="fa-solid fa-house"></i>
        </span>
        <span>
          <i className="fa-solid fa-user"></i>
        </span>
        <span>
          <i className="fa-solid fa-briefcase"></i>
        </span>
        <span>
          <i className="fa-solid fa-phone"></i>
        </span>
        <span>
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      <div id="menu-background-pattern" ref={backgroundPattern}></div>
      <div id="menu-background-image" ref={background2}></div>
      <i className="fa-solid fa-arrow-pointer" ref={cursor}></i>
    </div>
  );
}

export default App;
