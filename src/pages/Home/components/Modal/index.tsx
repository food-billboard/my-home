import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./index.less";

export type ModalProps = {
  visible?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

const Modal = ({
  visible,
  children: propsChildren,
  onClose,
}: ModalProps) => {

  const children = (
    <>
      <div 
        className={styles["preview-modal-mask"]} 
        style={{
          opacity: visible ? 1 : 0,
          zIndex: visible ? 99 : -1
        }}
      />
      <div
        className={styles["preview-modal"]}
        style={{
          transform: `scale(${visible ? 1 : 0})`
        }}
      >
        <div 
          onClick={onClose} className={styles["preview-modal-mask"]} 
          style={{
            zIndex: 0,
            backgroundColor: 'transparent'
          }}
        />
        <div 
          className={styles["preview-modal-main"]}
        >
          <div className={styles["preview-modal-close"]} onClick={onClose}>
            X
          </div>
          {propsChildren}
        </div>
      </div>
    </>
  );

  return createPortal(children, document.body);
};

export default Modal;
