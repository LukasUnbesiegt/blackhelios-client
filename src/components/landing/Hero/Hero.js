import React, { Component } from "react";
import styles from "./Hero.module.css";
import { connect } from "react-redux";
import Register from "../../accounts/register/Register";
import Editor from "../../reusable/forms/editor/quill/Editor";
import SinglePhoto from "../../reusable/forms/files/image_upload/single/PhotoUploadSingle";
import Editor2 from "../../reusable/forms/editor/Editor";
import MultiplePhoto from "../../reusable/forms/files/image_upload/multiple/PhotoUploadMultiple";
import { Button_Styled_MU } from "../../styles/reusable/material_ui/Button";
class Hero extends Component {
  state = {
    doc: null,
  };

  componentDidMount = () => {};

  renderHero = () => {
    return (
      <div className="container text-center my-2 py-2">
        <h4 className="display-3">Black Helio Boilerplate</h4>
        <p>Home Page</p>
        <Button_Styled_MU variant="contained">
          Material UI Button
        </Button_Styled_MU>
        <div>
          <Register />
        </div>
        <div>
          <Editor />
        </div>
        <div>
          <Editor2
            description="description"
            initialContent={`<div>sample</div>`}
          />
        </div>
        <div>
          <MultiplePhoto />
        </div>
        <div>
          <SinglePhoto />
        </div>
      </div>
    );
  };

  render() {
    return this.renderHero();
  }
}

const mapStateToProps = (state) => ({
  // locale: state.locale
});

const mapDispatchToProps = {};

export default connect()(Hero);
