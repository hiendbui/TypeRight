
import React from 'react';
import TypeContainer from '../typing/typing_container';
import LibraryContainer from '../library/library_container';
import CreateTest from "./create_test"
class MainPage extends React.Component {

  render() {
    return (
      <div>
        <TypeContainer/>
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