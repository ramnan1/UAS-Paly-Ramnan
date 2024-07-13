import React from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { MdEventNote } from "react-icons/md";

const ModalComponent = ({}) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      {email == "" ? (
        <MdEventNote onClick={() => setOpenModal(true)} className="text-2xl" />
      ) : (
        <TextInput
          id="small"
          type="text"
          sizing="sm"
          value={email}
          onClick={() => setOpenModal(true)}
        />
      )}

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Note" />
              </div>
              <TextInput
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <Button onClick={onCloseModal}>Save</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
