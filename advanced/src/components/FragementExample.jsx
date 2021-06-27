import React, { Component } from "react";

export default class FragementExample extends Component {
  // If you normally observe suppose we have  a table as parent component and columns as child component
  // but when we add child comp (colums) to the parent component(table), the child comp has a div tag wrapped around the td tags
  // that is a error cause table inside tr cannot have div's right to avoid that we directly remove the
  // parent element and combines the all elements in the child comp with React.Fragement so that wont have div tag wrapper
  // instead will directly add td tag to parent tr component

  // React Fragement are used to group the jsx and return it without parent element
  // You can avoid parent element and can have multiple elements in jsx with react fragments
  // we can also use key attribute to the React.Fragment tag
  // shortcut is also availble i.e  <> </> - this tag refers to React fragment but cannot bind key attrib in this approch

  render() {
    // let items = ["item1", "item2"];
    return (
      // use case 1
      //   <React.Fragment key={"one"}>
      //     <p>
      //       Welcome to React Fragements. Inspect this line you will see me right
      //       after parent div in App.js
      //     </p>
      //   </React.Fragment>

      // use case 2
      //   items.map((item) => (
      //     <React.Fragment key={item}>
      //       <p>{item}</p>
      //     </React.Fragment>
      //   ))

      // usecase 3
      <>
        <h3>This is a React fragement Example</h3>
      </>
    );
  }
}
