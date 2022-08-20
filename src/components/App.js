import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import AddCardPopup from "./AddCardPopup";

function App() {
  // hooks for opening/closing form popups
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} />
        <AddCardPopup isOpen={isAddPlacePopupOpen} />

        {/* <div className="popup popup_type_edit">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close popup__close_edit"
            ></button>
            <form id="popup-profile" className="popup__form" noValidate>
              <h2 className="popup__title">Edit profile</h2>
              <fieldset className="popup__form-fieldset">
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
                <button
                  type="submit"
                  className="popup__submit-button popup__submit-button_disabled"
                  disabled
                >
                  Save
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="popup popup_type_add">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close popup__close_add"
            ></button>
            <form id="popup-add-card" className="popup__form" noValidate>
              <h2 className="popup__title">New place</h2>
              <fieldset className="popup__form-fieldset">
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
                <button
                  type="submit"
                  className="popup__submit-button popup__submit-button_disabled"
                  disabled
                >
                  Create
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="popup popup_type_delete">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close popup__close_delete"
            ></button>
            <form id="popup-delete-card" className="popup__form" noValidate>
              <h2 className="popup__title popup__title_type_delete">
                Are you sure?
              </h2>
              <fieldset className="popup__form-fieldset">
                <button type="submit" className="popup__submit-button">
                  Yes
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="popup popup_type_edit-profile-pic">
          <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <form id="popup-profile-pic" className="popup__form" noValidate>
              <h2 className="popup__title">Change profile picture</h2>
              <fieldset className="popup__form-fieldset">
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
                <button
                  type="submit"
                  className="popup__submit-button popup__submit-button_disabled"
                  disabled
                >
                  Save
                </button>
              </fieldset>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
