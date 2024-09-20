import React from "react";

export default function Alert({ alert }) {
  return (
    <>
      <div
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
      >
        <strong> {alert}</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
}
