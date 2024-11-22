import React, { useState } from "react";

export default function Chat() {
  return (
    <>
      <ul className="list-unstyled chat-details">
        <li className="d-flex justify-content-between mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
            alt="avatar"
            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
            width="40"
          />
          <div className="card">
            <div className="card-header d-flex justify-content-between p-2">
              <p className="fw-bold mb-0">Brad Pitt</p>
              <p className="text-muted small mb-0">
                <i className="far fa-clock"></i> 12 mins ago
              </p>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </li>
        <li className="d-flex justify-content-between mb-4">
          <div className="card w-100">
            <div className="card-header d-flex justify-content-between p-2">
              <p className="fw-bold mb-0">Lara Croft</p>
              <p className="text-muted small mb-0">
                <i className="far fa-clock"></i> 13 mins ago
              </p>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
            alt="avatar"
            className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
            width="40"
          />
        </li>
        <li className="d-flex justify-content-between mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
            alt="avatar"
            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
            width="40"
          />
          <div className="card">
            <div className="card-header d-flex justify-content-between p-2">
              <p className="fw-bold mb-0">Brad Pitt</p>
              <p className="text-muted small mb-0">
                <i className="far fa-clock"></i> 10 mins ago
              </p>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </li>
        <li className="mb-3 ">
          <div data-mdb-input-init className="form-outline position-relative">
            <input
              type="text"
              className="form-control bg-primary-light rounded-5"
            />
            <div className="right-12 float-end position-absolute">
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn p-0 px-1"
              >
                <i class="bi bi-mic"></i>
              </button>
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn p-0 px-1"
              >
                <i class="bi bi-paperclip"></i>
              </button>
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn p-0 px-1"
              >
                <i class="bi bi-send"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
