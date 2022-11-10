import React from "react";

function menu() {
  return (
    <div id="menu" ref={menu}>
      {/* <div id="menu-items" ref={menuContainer}>
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
                onClick={(e) => menuClickHandler(e)}
              >
                {item}
              </div>
            );
          })}
        </div> */}
      {/* <div id="menu-logo" ref={menuExit} onClick={menuExitHandler}>
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          <span>
            <i className="fa-solid fa-briefcase"></i>
          </span>
          <span>
            <i className="fa-solid fa-file-lines"></i>
          </span>
          <span>
            <i className="fa-solid fa-phone"></i>
          </span>
          <span>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div> */}
      {/* <div id="menu-background-pattern" ref={backgroundPattern}></div> */}
      {/* <div id="menu-background-image" ref={backgroundImage}></div> */}
    </div>
  );
}

export default menu;
