export const OPEN_SESSION_MODAL = 'OPEN_SESSION_MODAL';
export const CLOSE_SESSION_MODAL = 'CLOSE_SESSION_MODAL';

export const openSessionModal = modal => {
  return {
    type: OPEN_SESSION_MODAL,
    modal
  };
};

export const closeSessionModal = () => {
  return {
    type: CLOSE_SESSION_MODAL
  };
};