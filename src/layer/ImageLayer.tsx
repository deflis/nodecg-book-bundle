import React from "react";
import styled from "@emotion/styled";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import Book from "../replicants/book";
import noImage from "../assets/no_image.png";

const ImageTransitions = styled(ReactCSSTransitionReplace)`
  .flip-leave {
    transform: rotateY(0);
    transform-style: preserve-3d;
  }

  .flip-leave.flip-leave-active {
    transform: rotateY(90deg);
    transition: transform
      ${({ transitionLeaveTimeout }) => (transitionLeaveTimeout ?? 500) / 1000}s
      ease-in;
  }

  .flip-enter {
    transform: rotateY(90deg);
    transform-style: preserve-3d;
  }

  .flip-enter.flip-enter-active {
    transform: rotateY(0);
    transition: transform
      ${({ transitionLeaveTimeout, transitionEnterTimeout }) =>
        ((transitionEnterTimeout ?? 1000) - (transitionLeaveTimeout ?? 500)) /
        1000}s
      ${({ transitionLeaveTimeout }) => (transitionLeaveTimeout ?? 500) / 1000}s
      ease-out;
  }
`;

const Image = styled("div")`
  width: 525px;
  height: 700px;
  background: no-repeat center/contain
    url("${({ src }: { src: string }) => src}");
`;

const ImageLayerBase = styled("div")`
  position: absolute;
  left: 75px;
  top: 100px;
  width: 525px;
  height: 700px;
  padding: 10px;
  background: #000a;
  border: #aaa 10px solid;
  border-radius: 20px;
`;

type ImageLayerProps = { item?: Book };

export const ImageLayer: React.FC<ImageLayerProps> = ({ item }) => {
  return (
    <ImageLayerBase>
      <ImageTransitions
        component="div"
        transitionName="flip"
        transitionEnterTimeout={2000}
        transitionLeaveTimeout={500}
      >
        <Image
          key={item?.isbn ?? "noImage"}
          src={item === undefined ? "" : item.image ? item.image : noImage}
        />
      </ImageTransitions>
    </ImageLayerBase>
  );
};
