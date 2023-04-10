import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div class="bg-white relative lg:py-10">
        <Link className="btn btn-primary" to="/">
        Home
        </Link>
      <div
        class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
      >
        <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <img
                src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                class="btn-"
              />
            </div>
          </div>
          <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
            >
              <p class="w-full text-4xl font-medium text-center leading-snug">
                Sign up for an account
              </p>
              {children}
            </div>
            <svg
              viewbox="0 0 91 91"
              class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
            fill-current"
            >
              <g stroke="none" strokewidth="1" fillrule="evenodd">
                <g fillrule="nonzero">
                  <g>
                    <g>
                      <circle cx="3.261" cy="3.445" r="2.72" />
                      <circle cx="15.296" cy="3.445" r="2.719" />
                      <circle cx="27.333" cy="3.445" r="2.72" />
                      <circle cx="39.369" cy="3.445" r="2.72" />
                      <circle cx="51.405" cy="3.445" r="2.72" />
                      <circle cx="63.441" cy="3.445" r="2.72" />
                      <circle cx="75.479" cy="3.445" r="2.72" />
                      <circle cx="87.514" cy="3.445" r="2.719" />
                    </g>
                    <g transform="translate(0 12)">
                      <circle cx="3.261" cy="3.525" r="2.72" />
                      <circle cx="15.296" cy="3.525" r="2.719" />
                      <circle cx="27.333" cy="3.525" r="2.72" />
                      <circle cx="39.369" cy="3.525" r="2.72" />
                      <circle cx="51.405" cy="3.525" r="2.72" />
                      <circle cx="63.441" cy="3.525" r="2.72" />
                      <circle cx="75.479" cy="3.525" r="2.72" />
                      <circle cx="87.514" cy="3.525" r="2.719" />
                    </g>
                    <g transform="translate(0 24)">
                      <circle cx="3.261" cy="3.605" r="2.72" />
                      <circle cx="15.296" cy="3.605" r="2.719" />
                      <circle cx="27.333" cy="3.605" r="2.72" />
                      <circle cx="39.369" cy="3.605" r="2.72" />
                      <circle cx="51.405" cy="3.605" r="2.72" />
                      <circle cx="63.441" cy="3.605" r="2.72" />
                      <circle cx="75.479" cy="3.605" r="2.72" />
                      <circle cx="87.514" cy="3.605" r="2.719" />
                    </g>
                    <g transform="translate(0 36)">
                      <circle cx="3.261" cy="3.686" r="2.72" />
                      <circle cx="15.296" cy="3.686" r="2.719" />
                      <circle cx="27.333" cy="3.686" r="2.72" />
                      <circle cx="39.369" cy="3.686" r="2.72" />
                      <circle cx="51.405" cy="3.686" r="2.72" />
                      <circle cx="63.441" cy="3.686" r="2.72" />
                      <circle cx="75.479" cy="3.686" r="2.72" />
                      <circle cx="87.514" cy="3.686" r="2.719" />
                    </g>
                    <g transform="translate(0 49)">
                      <circle cx="3.261" cy="2.767" r="2.72" />
                      <circle cx="15.296" cy="2.767" r="2.719" />
                      <circle cx="27.333" cy="2.767" r="2.72" />
                      <circle cx="39.369" cy="2.767" r="2.72" />
                      <circle cx="51.405" cy="2.767" r="2.72" />
                      <circle cx="63.441" cy="2.767" r="2.72" />
                      <circle cx="75.479" cy="2.767" r="2.72" />
                      <circle cx="87.514" cy="2.767" r="2.719" />
                    </g>
                    <g transform="translate(0 61)">
                      <circle cx="3.261" cy="2.846" r="2.72" />
                      <circle cx="15.296" cy="2.846" r="2.719" />
                      <circle cx="27.333" cy="2.846" r="2.72" />
                      <circle cx="39.369" cy="2.846" r="2.72" />
                      <circle cx="51.405" cy="2.846" r="2.72" />
                      <circle cx="63.441" cy="2.846" r="2.72" />
                      <circle cx="75.479" cy="2.846" r="2.72" />
                      <circle cx="87.514" cy="2.846" r="2.719" />
                    </g>
                    <g transform="translate(0 73)">
                      <circle cx="3.261" cy="2.926" r="2.72" />
                      <circle cx="15.296" cy="2.926" r="2.719" />
                      <circle cx="27.333" cy="2.926" r="2.72" />
                      <circle cx="39.369" cy="2.926" r="2.72" />
                      <circle cx="51.405" cy="2.926" r="2.72" />
                      <circle cx="63.441" cy="2.926" r="2.72" />
                      <circle cx="75.479" cy="2.926" r="2.72" />
                      <circle cx="87.514" cy="2.926" r="2.719" />
                    </g>
                    <g transform="translate(0 85)">
                      <circle cx="3.261" cy="3.006" r="2.72" />
                      <circle cx="15.296" cy="3.006" r="2.719" />
                      <circle cx="27.333" cy="3.006" r="2.72" />
                      <circle cx="39.369" cy="3.006" r="2.72" />
                      <circle cx="51.405" cy="3.006" r="2.72" />
                      <circle cx="63.441" cy="3.006" r="2.72" />
                      <circle cx="75.479" cy="3.006" r="2.72" />
                      <circle cx="87.514" cy="3.006" r="2.719" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              viewbox="0 0 91 91"
              class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
            fill-current"
            >
              <g stroke="none" strokewidth="1" fillrule="evenodd">
                <g fillrule="nonzero">
                  <g>
                    <g>
                      <circle cx="3.261" cy="3.445" r="2.72" />
                      <circle cx="15.296" cy="3.445" r="2.719" />
                      <circle cx="27.333" cy="3.445" r="2.72" />
                      <circle cx="39.369" cy="3.445" r="2.72" />
                      <circle cx="51.405" cy="3.445" r="2.72" />
                      <circle cx="63.441" cy="3.445" r="2.72" />
                      <circle cx="75.479" cy="3.445" r="2.72" />
                      <circle cx="87.514" cy="3.445" r="2.719" />
                    </g>
                    <g transform="translate(0 12)">
                      <circle cx="3.261" cy="3.525" r="2.72" />
                      <circle cx="15.296" cy="3.525" r="2.719" />
                      <circle cx="27.333" cy="3.525" r="2.72" />
                      <circle cx="39.369" cy="3.525" r="2.72" />
                      <circle cx="51.405" cy="3.525" r="2.72" />
                      <circle cx="63.441" cy="3.525" r="2.72" />
                      <circle cx="75.479" cy="3.525" r="2.72" />
                      <circle cx="87.514" cy="3.525" r="2.719" />
                    </g>
                    <g transform="translate(0 24)">
                      <circle cx="3.261" cy="3.605" r="2.72" />
                      <circle cx="15.296" cy="3.605" r="2.719" />
                      <circle cx="27.333" cy="3.605" r="2.72" />
                      <circle cx="39.369" cy="3.605" r="2.72" />
                      <circle cx="51.405" cy="3.605" r="2.72" />
                      <circle cx="63.441" cy="3.605" r="2.72" />
                      <circle cx="75.479" cy="3.605" r="2.72" />
                      <circle cx="87.514" cy="3.605" r="2.719" />
                    </g>
                    <g transform="translate(0 36)">
                      <circle cx="3.261" cy="3.686" r="2.72" />
                      <circle cx="15.296" cy="3.686" r="2.719" />
                      <circle cx="27.333" cy="3.686" r="2.72" />
                      <circle cx="39.369" cy="3.686" r="2.72" />
                      <circle cx="51.405" cy="3.686" r="2.72" />
                      <circle cx="63.441" cy="3.686" r="2.72" />
                      <circle cx="75.479" cy="3.686" r="2.72" />
                      <circle cx="87.514" cy="3.686" r="2.719" />
                    </g>
                    <g transform="translate(0 49)">
                      <circle cx="3.261" cy="2.767" r="2.72" />
                      <circle cx="15.296" cy="2.767" r="2.719" />
                      <circle cx="27.333" cy="2.767" r="2.72" />
                      <circle cx="39.369" cy="2.767" r="2.72" />
                      <circle cx="51.405" cy="2.767" r="2.72" />
                      <circle cx="63.441" cy="2.767" r="2.72" />
                      <circle cx="75.479" cy="2.767" r="2.72" />
                      <circle cx="87.514" cy="2.767" r="2.719" />
                    </g>
                    <g transform="translate(0 61)">
                      <circle cx="3.261" cy="2.846" r="2.72" />
                      <circle cx="15.296" cy="2.846" r="2.719" />
                      <circle cx="27.333" cy="2.846" r="2.72" />
                      <circle cx="39.369" cy="2.846" r="2.72" />
                      <circle cx="51.405" cy="2.846" r="2.72" />
                      <circle cx="63.441" cy="2.846" r="2.72" />
                      <circle cx="75.479" cy="2.846" r="2.72" />
                      <circle cx="87.514" cy="2.846" r="2.719" />
                    </g>
                    <g transform="translate(0 73)">
                      <circle cx="3.261" cy="2.926" r="2.72" />
                      <circle cx="15.296" cy="2.926" r="2.719" />
                      <circle cx="27.333" cy="2.926" r="2.72" />
                      <circle cx="39.369" cy="2.926" r="2.72" />
                      <circle cx="51.405" cy="2.926" r="2.72" />
                      <circle cx="63.441" cy="2.926" r="2.72" />
                      <circle cx="75.479" cy="2.926" r="2.72" />
                      <circle cx="87.514" cy="2.926" r="2.719" />
                    </g>
                    <g transform="translate(0 85)">
                      <circle cx="3.261" cy="3.006" r="2.72" />
                      <circle cx="15.296" cy="3.006" r="2.719" />
                      <circle cx="27.333" cy="3.006" r="2.72" />
                      <circle cx="39.369" cy="3.006" r="2.72" />
                      <circle cx="51.405" cy="3.006" r="2.72" />
                      <circle cx="63.441" cy="3.006" r="2.72" />
                      <circle cx="75.479" cy="3.006" r="2.72" />
                      <circle cx="87.514" cy="3.006" r="2.719" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
