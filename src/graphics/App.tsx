import emotionReset from "emotion-reset";
import React from "react";

import { css, Global } from "@emotion/react";

import { ImageLayer } from "../layer/ImageLayer";
import { TextLayer } from "../layer/TextLayer";
import { useBook } from "../replicants/book";

export const App: React.FC = () => {
  const [book] = useBook();

  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          backgroud-color: rgba(0,0,0,0);
          overflow: hidden;
          body {
            width: 1920px;
            height: 1080px;
          }
        `}
      />
      <ImageLayer item={book} />
      <TextLayer item={book} />
    </>
  );
};
