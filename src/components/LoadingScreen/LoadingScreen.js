import { Fragment } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <Fragment>
      <p id="loading">Loading...</p>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
}
