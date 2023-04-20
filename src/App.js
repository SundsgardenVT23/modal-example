import { useState } from "react";
import Modal from "./Modal";
import Close from "./Close";

function App() {
  const [status, setStatus] = useState(false);

  return (
    <div style={{ color: "white" }} className="container">
      <Close className="svg" />
      {status && (
        <Modal close={() => setStatus(false)}>
          <div className="container">
            <p>This is the Modal!</p>
          </div>
        </Modal>
      )}
      <button onClick={() => setStatus(true)} className="modal-btn">
        Click me
      </button>
    </div>
  );
}

export default App;
