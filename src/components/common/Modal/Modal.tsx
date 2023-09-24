import React from "react";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-28 w-full h-full flex items-center justify-center z-50">
      <div
        className="bg-white w-1/2 p-4 rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
