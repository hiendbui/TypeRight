import { CLOSE_WELCOME_TEXT } from "../../actions/ui_actions";

export default function TestModalReducer(oldState = true, action) {
  switch (action.type) {
    case CLOSE_WELCOME_TEXT:
      return false;
    default:
      return oldState;
  }
}
