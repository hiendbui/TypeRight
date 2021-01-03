import React from 'react';
import LibraryContainer from '../library/library_container';
import CreateTest from "./create_test";
import "./main_page.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <LibraryContainer/>
        <CreateTest/>
        <footer>
          Created by Anthony Bologna, Hien Bui, Josh Bubar, and Lawrence Nguyen &copy; 2020
        </footer>
      </div>
    );
  }
}

export default MainPage;