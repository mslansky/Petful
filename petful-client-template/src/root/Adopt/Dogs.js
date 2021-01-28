import React from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom";

export default function Dogs(props) {
  const handleClickAdopt = (e, context) => {
    const currentDog = context.dogs[0];
    const name = context.name;
    console.log(currentDog);
    context.adoptDog(currentDog);
    context.deletePeople(name);
    context.setError("Meet Your New Best Friend!");
    context.setName("");
    context.setDogNode(context.dogs[1]);
  };

  const clearError = (e, context) => {
    context.setError("");
  };

  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        if (context.dogs.length < 1) {
          return (
            <div>
              <h3>Sorry, there aren't any dogs left!</h3>
            </div>
          );
        }
        return (
          <div>
            <Link onClick={(e) => clearError(e, context)} to={{ pathname: "/" }}>
              <h1>Dogs</h1>
            </Link>
            <h2>{context.dogNode.name}</h2>
            <img
              src={context.dogNode.imageURL}
              alt={context.dogNode.imageDescription}
            />
            <h3>Descriptions:</h3>
            <p>
              <span className="bold">Story: </span>
              {context.dogNode.story}
            </p>
            <p>
              <span className="bold">Gender: </span>
              {context.dogNode.gender}
            </p>
            <p>
              <span className="bold">Age: </span> {context.dogNode.age}{" "}
            </p>
            <p>
              <span className="bold">Breed: </span> {context.dogNode.breed}{" "}
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