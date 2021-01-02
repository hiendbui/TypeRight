export const OPEN_SESSION_MODAL = 'OPEN_SESSION_MODAL';
export const CLOSE_SESSION_MODAL = 'CLOSE_SESSION_MODAL';
export const OPEN_TEST_MODAL = 'OPEN_TEST_MODAL';
export const CLOSE_TEST_MODAL = 'CLOSE_TEST_MODAL';

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

export const openTestFormModal = (modal) => {
  return {
    type: OPEN_TEST_MODAL,
    modal,
  };
};

export const closeTestFormModal = () => {
  return {
    type: CLOSE_TEST_MODAL,
  };
};