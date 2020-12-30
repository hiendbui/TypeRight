
import React from 'react';
import TypeContainer from '../typing/typing_container';
import LibraryContainer from '../library/library_container';
// import NewTest from "./addTest"
class MainPage extends React.Component {

  render() {
    return (
      <div>
        <TypeContainer/>
        <LibraryContainer/>
        {/* <NewTest/> */}
        <footer>
          Created by Anthony Bologna, Hien Bui, Josh Bubar, and Lawrence Nguyen &copy; 2020
        </footer>
      </div>
    );
  }
}

export default MainPage;