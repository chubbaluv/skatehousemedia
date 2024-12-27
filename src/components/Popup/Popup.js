import React, { useEffect } from "react";
import { ContentWrapper, Container } from "./PopupStyled";
import useScrollBlock from "#/hooks/useScrollBlock";

const Popup = ({ children, handleClose = () => {}, isOpen }) => {
  const { blockScroll, allowScroll } = useScrollBlock();

  useEffect(() => {
    if (isOpen) {
      blockScroll();
    }
    return () => allowScroll();
  }, [isOpen, blockScroll, allowScroll]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container $isOpen={isOpen}>
      <ContentWrapper $isOpen={isOpen}>{children}</ContentWrapper>
    </Container>
  );
};

export default Popup;
