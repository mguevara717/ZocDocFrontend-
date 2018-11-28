import React from "react";
import DoctorList from "../containers/DoctorList";
import DoctorSearch from "../containers/DoctorSearch";
import GoogleMap from "../containers/GoogleMap";
import "semantic-ui-css/semantic.min.css";

import "../DoctorPage.css";

class DoctorPage extends React.Component {
  state = {
    docData: [],
    searchTerm: "",
    clicked: false
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/doctors")
      .then(response => response.json())
      .then(doctors => {
        this.setState({
          docData: doctors
        });
      });
  }

  handleChange = event => {
    let searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  filterSearchCity() {
    let results = this.state.docData.filter(docInfo => {
      return docInfo.city
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
    return results;
  }//filter function

  render() {
    return(
      <div>
        <div className="ui segment">
          <div>
            <DoctorSearch handleChange={this.handleChange} />
          </div>
        </div>
        <div className=" ui grid">
          <div className="ten wide column">
            <DoctorList docData={this.filterSearchCity()} />
          </div>
          <div className="six wide column">
            <GoogleMap docLocation={this.filterSearchCity()} />
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorPage;
