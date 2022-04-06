import styles from './Toast.module.scss';

function Toast(props) {
  return (
    <div
      className={`position-fixed top-0 end-0 p-3 ${styles.MessengerContainer}`}
    >
      <div
        ref={props.toastRef}
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-delay="10000"
      >
        <div className="toast-header">
          
          <strong className="me-auto">Pokemon List</strong>
          
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>

        <div className="toast-body">
          {props.message}
        </div>
      </div>
    </div>
  );
}

export { Toast };
