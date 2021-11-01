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

  const bgURL =
    "https://images.unsplash.com/photo-1635752782385-bc676ec52709?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80";

  return (
    <>
      <img src={bgURL} alt="bg" className="hero" />
      <main className="page-home">
        <Modal type="create" isOpen={isOpen} onClose={() => setIsOpen(false)}>
          New course
        </Modal>
        <section className="content">AAA</section>
        <div className="footer-background" />
      </main>
    </>
  );
}
