import React from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom";

export default function Cats(props) {
  const handleClickAdopt = (e, context) => {
    const currentCat = context.cats[0];
    const name = context.name;
    console.log(currentCat);
    context.adoptCat(currentCat);
    context.deletePeople(name);
    context.setError("Meet Your New Best Friend!");
    context.setName("");
    context.setCatNode(context.cats[1]);
  };


  const clearError = (e, context) => {
    context.setError("");
  };

  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        if (context.cats.length < 1) {
          return (
            <div>
              <h3>Sorry, there aren't any cats left!</h3>
            </div>
          );
        }
        return (
          <div>
            <Link
              onClick={(e) => clearError(e, context)}
              to={{ pathname: "/" }}
            >
              <h1>Cats</h1>
            </Link>
            <h2>{context.catNode.name}</h2>
            <img
              src={context.catNode.imageURL}
              alt={context.catNode.imageDescription}
            />
            <h3>Descriptions:</h3>
            <p>
              <span className="bold">Story: </span> {context.catNode.story}
            </p>
            <p>
              <span className="bold">Gender: </span>
              {context.catNode.sex}
            </p>
            <p>
              <span className="bold">Age: </span> {context.catNode.age}
            </p>
            <p>
              <span className="bold">Breed: </span> {context.catNode.breed}
            </p>
            {context.name.length > 1 && (
              <button onClick={(e) => handleClickAdopt(e, context)}>
                Take Me Home!
              </button>
            )}
            <p className="error">{context.error}</p>
          </div>
        );
      }}
    </Context.Consumer>
  );
}