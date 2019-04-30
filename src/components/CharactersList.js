import React from "react";
import axios from "axios";
import SweetAlert from 'sweetalert2-react';

class CharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersList: "",
      show: true,
    }

  }
  componentDidMount() {
    this.getCharactersLists();
  }

  getCharactersLists() {

    axios.get(`https://swapi.co/api/people/`)
      .then(response => (response.data))
      .then(data => this.setState({ charactersList: data.results }))
  };

  getVehiculs = () => {



  }

  render() {
    return (
      <div>

        {this.state.charactersList
          &&
          this.state.charactersList.map((character, i) => {
            return (
              <div key={i}>

                <p>name:{character.name}</p>
                <p>birth_year:{character.birth_year}</p>
                <p>Color eyes: {character.eye_color}</p>
                <p>Genre:{character.gender}</p>
                <p> color hair:{character.hair_color}</p>
                <p>Height:{character.height}</p>
                <p>mass:{character.mass}</p>

                <button onClick={() => this.setState({ show: true })}>Alert</button>
                <SweetAlert
                  show={this.state.show}
                  title="STARSHIPS"
                  text={character.starships}
                  onConfirm={() => this.setState({ show: false })}
                />


                <br />
              </div>
            )
          }
          )

        }


      </div>

    );

  }

}
export default CharactersList;