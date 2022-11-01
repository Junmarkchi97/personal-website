import React, { useEffect, useRef } from "react";
import "./styles/menu.scss";

function App() {
  const menu = useRef(null);
  const menuItems = useRef([]);
  const background = useRef(null);
  const menuArr = ["Home", "About Me", "Projects", "Contact"];

  // useEffect(() => {}, []);

  window.onmousemove = (e) => {
    const mouseX = e.clientX,
      mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
      yDecimal = mouseY / window.innerHeight;

    const maxX = background.current.offsetWidth - window.innerWidth,
      maxY = background.current.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1,
      panY = maxY * yDecimal * -1;

    // menu.current.style.transform = `translate(${xDecimal}px, ${yDecimal}px)`;
    // console.log(background)

    // background.current.animate(
    //   {
    //     transform: `translate(${panX}px, ${panY}px)`,
    //   },
    //   {
    //     duration: 4000,
    //     fill: "forwards",
    //     easing: "ease",
    //   }
    // );
  };

  const hoverEffects = (e) => {
    menu.current.dataset.activeIndex = e.target.id;
    // console.log(e.target.style.color = "black");
  };

  return (
    <div id="menu" ref={menu}>
      <div id="menu-items">
        {menuArr.map((item, index) => {
          return (
            <a
              href="/"
              className="menu-item"
              key={index}
              id={index}
              ref={(element) => {
                menuItems.current[index] = element;
              }}
              onMouseOver={(e) => hoverEffects(e)}
            >
              {item}
            </a>
          );
        })}
      </div>
      <div id="menu-background-pattern" ref={background}></div>
    </div>
  );
}

export default App;
