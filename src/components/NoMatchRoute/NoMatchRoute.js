import { Toast as bootstrapToast } from 'bootstrap';
import { useEffect } from 'react';

function NoMatchRoute(props) {
  const setToastMessage = props.params.messenger.updater,
        toastElement = props.params.messenger.element;
        
  useEffect(() => {
    const toast = new bootstrapToast(toastElement.current);
    setToastMessage("There's nothing here!");
    toast.show();
  }, [setToastMessage, toastElement]);

  return <></>;
}

export { NoMatchRoute };
