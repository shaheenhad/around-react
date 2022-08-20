import React from "react";
import profilePath from "../images/profile.jpg";

function Main(props) {
  return (
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
          <button
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfileClick}
          ></button>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
