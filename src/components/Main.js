import React from "react";
import { api } from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.toggleLike(card._id, isLiked).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id)
      );
    });
  }

  return (
    <main>
      <section className="profile">
        <div
          className="profile__image-container"
          onClick={props.onEditAvatarClick}
        >
          <img
            src={currentUser.avatar}
            alt="profile"
            id="avatar"
            className="profile__image"
          />
          <div className="profile__image-overlay"></div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__description">{currentUser.about}</p>
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
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              oncCardDelete={handleCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
