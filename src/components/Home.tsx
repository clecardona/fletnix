//@ts-nocheck
//NPM PAckages
import { useState } from "react";

//Local imports
import { useAuth } from "state/AuthProvider";
import Modal from "components/shared/Modal";

export default function Teacher() {
  // Global state
  const { user } = useAuth();

  //Local states
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="page-teacher">
      <h1>Home Page</h1>

      <Modal type="create" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        New course
      </Modal>
    </main>
  );
}
