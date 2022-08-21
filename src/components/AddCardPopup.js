import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddCardPopup(props) {
  return (
    <PopupWithForm
      name="add"
      title="New Place"
      isOpen={props.isOpen}
      btnText="Create"
      onClose={props.onClose}
    >
      <div className="popup__input-wrapper">
        <input
          className="popup__input popup__input_type_image-title"
          type="text"
          placeholder="Title"
          id="image-title"
          name="name"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error image-title-input-error"></span>
      </div>
      <div className="popup__input-wrapper">
        <input
          className="popup__input popup__input_type_image"
          type="url"
          placeholder="Image link"
          id="link"
          name="link"
          required
        />
        <span className="popup__input-error link-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddCardPopup;
