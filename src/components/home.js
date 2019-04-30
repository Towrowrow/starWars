import React from "react";
import CharactersList from "./CharactersList"


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    }

  }
  render() {
    return (
      <div>
        <CharactersList />
      </div>

    );

  }




}
export default Home;