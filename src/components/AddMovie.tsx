import React, { SyntheticEvent, useRef } from "react";
import { MovieNoIdType } from "../types";

import classes from "./AddMovie.module.css";

interface AddMovieProps {
  onAddMovie: (movie: MovieNoIdType) => void;
}

function AddMovie(props: AddMovieProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: SyntheticEvent) {
    event.preventDefault();

    // could add validation here...
    if (
      titleRef === null ||
      titleRef.current === null ||
      openingTextRef === null ||
      openingTextRef.current === null ||
      releaseDateRef === null ||
      releaseDateRef.current === null
    ) {
      return;
    }

    const movie: MovieNoIdType = {
      title: titleRef.current!.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
