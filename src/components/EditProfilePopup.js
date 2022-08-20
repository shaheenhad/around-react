import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit"
      title="Edit profile"
      btnText="Save"
      isOpen={props.isOpen}
    >
      <div className="popup__input-wrapper">
        <input
          className="popup__input popup__input_type_name"
          type="text"
          placeholder="Name Surname"
          id="name"
          name="name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error name-input-error"></span>
      </div>
      <div className="popup__input-wrapper">
        <input
          className="popup__input popup__input_type_title"
          type="text"
          placeholder="Title"
          id="title"
          name="title"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error title-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
