import React from 'react';
import LibraryContainer from '../library/library_container';
import CreateTest from "./create_test";
// import TypingContainer from "../typing/typing_container"
import "./main_page.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main-wrapper-component">
        {/* <TypeContainer/> */}
        <LibraryContainer/>
        <CreateTest/>
        <footer className="footer">
          Created by Anthony Bologna, Hien Bui, Josh Bubar, and Lawrence Nguyen &copy; 2020
        </footer>
      </div>
    );
  }
}

export default MainPage;