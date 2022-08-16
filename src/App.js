import logoPath from "./images/around_logo.svg";
import profilePath from "./images/profile.jpg";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <header className="header">
          <img className="logo" src={logoPath} alt="around the us logo" />
        </header>
        <main>
          <section className="profile">
            <div className="profile__image-container">
              <img
                src={profilePath}
                alt="profile"
                id="avatar"
                className="profile__image"
              />
              <div className="profile__image-overlay"></div>
            </div>

            <div className="profile__info">
              <h1 className="profile__name">Cousteau</h1>
              <p className="profile__description">Explorer</p>
              <button type="button" className="profile__edit-button"></button>
            </div>
            <button type="button" className="profile__add-button"></button>
          </section>
          <section className="elements"></section>
        </main>
        <footer className="footer">
          <p className="footer__text">© 2021 Around The U.S.</p>
        </footer>
        <div className="popup popup_type_edit">
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
        </div>
      </div>
    </div>
  );
}

export default App;
