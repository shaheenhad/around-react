import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <button className="card__trash" type="button"></button>
      <div
        className="card__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      ></div>
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like"></button>
          <p className="card__like-num">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;
