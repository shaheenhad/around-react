import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="edit-profile-pic"
      title="Change profile picture"
      btnText="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <div className="popup__input-wrapper">
        <input
          className="popup__input popup__input_type_image"
          type="url"
          placeholder="Image link"
          id="profile-pic"
          name="avatar"
          required
        />
        <span className="popup__input-error profile-pic-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
