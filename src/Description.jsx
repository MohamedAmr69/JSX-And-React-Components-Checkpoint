/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

function Description({ description }) {
  return (
    <>
      <figure class="chair">
        <div class="chair-box">
          <h3>The Laid Back</h3>
          <ul class="chair-details">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="chair-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span>Leisure and relaxing</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="chair-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Comfortable for 4h</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="chair-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Vegan leather</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="chair-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <span>Weighs 16 kg</span>
            </li>
          </ul>
          <div class="chair-price">
            <strong>250€</strong>
            <a href="#" class="btn btn--small">
              Add to cart
            </a>
          </div>
        </div>
      </figure>
    </>
  );
}

export default Description;
