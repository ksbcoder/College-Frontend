import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Confirmation"
    >
      <div className="text-center">
        <h2>Confirm Elimination</h2>
        <p>Are you sure you want to remove this student?</p>
        <button className="btn btn-outline-info me-2" onClick={onConfirm}>
          Confirm
        </button>
        <button className="btn btn-outline-danger" onClick={onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
