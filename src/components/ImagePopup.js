import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_image">
        <button
          type="button"
          className="popup__close popup__close_image"
        ></button>
        <img className="popup__image" src="#" alt="" />
        <p className="popup__caption"></p>
      </div>
    </div>
  );
}

export default ImagePopup;
