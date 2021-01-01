import React from "react";
import styled from "@emotion/styled";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import Book from "../replicants/book";

const TextTransitions = styled(ReactCSSTransitionReplace)``;

const ImageLayerBase = styled("div")`
  position: absolute;
  left: 650px;
  top: 100px;
  width: 700px;
  height: 700px;
  padding: 10px;
  background: #000a;
  color: #fff;
  border: #aaa 10px solid;
  border-radius: 20px;
`;

const ImageLayerContainer = styled("div")`
  font-family: fot-rodin-pron, sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 700px;
  height: 700px;
  font-size: 50px;
  overflow: hidden;
`;

const Catchcopy = styled("div")`
  position: relative;
  margin-bottom: 10px;

  .flip-leave & {
    opacity: 1;
    transform: translateY(0);
    transform-style: preserve-3d;
  }

  .flip-leave.flip-leave-active & {
    transform: translateY(70px);
    opacity: 0;
    transition: all 0.2s 0.3s ease-in;
  }

  .flip-enter & {
    opacity: 0;
    transform: translateY(70px);
    transform-style: preserve-3d;
  }

  .flip-enter.flip-enter-active & {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.2s 0.7s ease-out;
  }
`;

const Title = styled("div")`
  position: relative;
  margin-bottom: 10px;
  font-size: 70px;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;

  font-family: fot-seurat-pron, sans-serif;
  font-weight: 900;
  font-style: normal;

  .flip-leave & {
    opacity: 1;
    transform: translateY(0);
    transform-style: preserve-3d;
  }

  .flip-leave.flip-leave-active & {
    transform: translateY(70px);
    opacity: 0;
    transition: all 0.2s 0.3s ease-in;
  }

  .flip-enter & {
    opacity: 0;
    transform: translateY(70px);
    transform-style: preserve-3d;
  }

  .flip-enter.flip-enter-active & {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s 0.7s ease-out;
  }
`;

const Comment = styled("div")`
  position: relative;
  .flip-leave & {
    opacity: 1;
    transform: translateY(0);
    transform-style: preserve-3d;
  }

  .flip-leave.flip-leave-active & {
    transform: translateY(70px);
    opacity: 0;
    transition: all 0.6s ease-in;
  }

  .flip-enter & {
    opacity: 0;
    transform: translateY(70px);
    transform-style: preserve-3d;
  }

  .flip-enter.flip-enter-active & {
    opacity: 1;
    transform: translateY(0);
    transition: all 1s 0.7s ease-out;
  }
`;

type TextLayerProps = { item?: Book };

export const TextLayer: React.FC<TextLayerProps> = ({ item }) => {
  return (
    <ImageLayerBase>
      <TextTransitions
        component="div"
        transitionName="flip"
        transitionEnterTimeout={2000}
        transitionLeaveTimeout={2000}
      >
        <ImageLayerContainer key={item?.isbn ?? ""}>
          {item && (
            <>
              <Catchcopy>{item.catchcopy}</Catchcopy>
              <Title>{item.title}</Title>
              <Comment>
                {item.comment.split("\n").map((current) => (
                  <p>{current}</p>
                ))}
              </Comment>
            </>
          )}
        </ImageLayerContainer>
      </TextTransitions>
    </ImageLayerBase>
  );
};
