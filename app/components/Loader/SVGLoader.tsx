import classNames from "classnames";
import React from "react";

interface Props {
  showLoader: boolean;
  message?: string;
  subMessage?: string;
  className?: string;
  iconColor?: string;
  textColor?: string;
  isFixed?: boolean;
}
function SVGLoader({
  showLoader,
  iconColor = "#FB607F",
  textColor = "#FB607F",
  message,
  subMessage,
  className,
  isFixed = false,
}: Props) {
  if (!showLoader) {
    return null;
  }

  const fixedLoaderCSS = isFixed
    ? "fixed  h-full w-full "
    : " absolute inset-0 ";
  return (
    <div
      className={classNames(
        `-z-1 flex items-center justify-center bg-white opacity-0 ${fixedLoaderCSS} ${className} `,
        {
          " !z-999999  opacity-100 ": showLoader,
        }
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <rect width="10" height="10" x="1" y="1" fill={iconColor} rx="1">
            <animate
              id="svgSpinnersBlocksShuffle30"
              fill="freeze"
              attributeName="x"
              begin="0;svgSpinnersBlocksShuffle3b.end"
              dur="0.2s"
              values="1;13"
            />
            <animate
              id="svgSpinnersBlocksShuffle31"
              fill="freeze"
              attributeName="y"
              begin="svgSpinnersBlocksShuffle38.end"
              dur="0.2s"
              values="1;13"
            />
            <animate
              id="svgSpinnersBlocksShuffle32"
              fill="freeze"
              attributeName="x"
              begin="svgSpinnersBlocksShuffle39.end"
              dur="0.2s"
              values="13;1"
            />
            <animate
              id="svgSpinnersBlocksShuffle33"
              fill="freeze"
              attributeName="y"
              begin="svgSpinnersBlocksShuffle3a.end"
              dur="0.2s"
              values="13;1"
            />
          </rect>
          <rect width="10" height="10" x="1" y="13" fill={iconColor} rx="1">
            <animate
              id="svgSpinnersBlocksShuffle34"
              fill="freeze"
              attributeName="y"
              begin="svgSpinnersBlocksShuffle30.end"
              dur="0.2s"
              values="13;1"
            />
            <animate
              id="svgSpinnersBlocksShuffle35"
              fill="freeze"
              attributeName="x"
              begin="svgSpinnersBlocksShuffle31.end"
              dur="0.2s"
              values="1;13"
            />
            <animate
              id="svgSpinnersBlocksShuffle36"
              fill="freeze"
              attributeName="y"
              begin="svgSpinnersBlocksShuffle32.end"
              dur="0.2s"
              values="1;13"
            />
            <animate
              id="svgSpinnersBlocksShuffle37"
              fill="freeze"
              attributeName="x"
              begin="svgSpinnersBlocksShuffle33.end"
              dur="0.2s"
              values="13;1"
            />
          </rect>
          <rect width="10" height="10" x="13" y="13" fill={iconColor} rx="1">
            <animate
              id="svgSpinnersBlocksShuffle38"
              fill="freeze"
              attributeName="x"
              begin="svgSpinnersBlocksShuffle34.end"
              dur="0.2s"
              values="13;1"
            />
            <animate
              id="svgSpinnersBlocksShuffle39"
              fill="freeze"
              attributeName="y"
              begin="svgSpinnersBlocksShuffle35.end"
              dur="0.2s"
              values="13;1"
            />
            <animate
              id="svgSpinnersBlocksShuffle3a"
              fill="freeze"
              attributeName="x"
              begin="svgSpinnersBlocksShuffle36.end"
              dur="0.2s"
              values="1;13"
            />
            <animate
              id="svgSpinnersBlocksShuffle3b"
              fill="freeze"
              attributeName="y"
              begin="svgSpinnersBlocksShuffle37.end"
              dur="0.2s"
              values="1;13"
            />
          </rect>
        </svg>

        {message && (
          <p
            className={classNames(
              `mt-4 w-full text-center text-base tracking-widest text-primary ${textColor}`
            )}
          >
            {message}
          </p>
        )}
        {subMessage && (
          <p
            className={classNames(
              `mt-2 w-full text-center text-base tracking-widest text-primary ${textColor}`
            )}
          >
            {subMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default SVGLoader;
