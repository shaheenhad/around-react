import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState();
  const [link, setLink] = React.useState();

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();

    // Pass the values of the managed components to the external handler
    props.onAddPlaceSubmit({
      name,
      link,
    });

    document.querySelector("#add").reset();
  }

  return (
    <PopupWithForm
      name="add"
      title="New Place"
      isOpen={props.isOpen}
      btnText="Create"
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          onChange={handleNameChange}
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
          onChange={handleLinkChange}
        />
        <span className="popup__input-error link-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
