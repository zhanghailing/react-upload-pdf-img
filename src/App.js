import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import ImagesUploader from 'react-images-uploader';
// import 'react-images-uploader/styles.css';
// import 'react-images-uploader/font.css';
import UploadFile from './UploadFile'
import HandleUploadFile from './HandleUploadFile'
const HandledUploadFile=HandleUploadFile(UploadFile)
class App extends Component {
  constructor() {
    super()
    this.state = {
      test_files: [],
      files_array: []
    }
  }
  //
  // onDrop = (files) => {
  //   var test = this.state.files_array;
  //   this.setState({
  //     files: files,
  //     files_array: test.concat(files)
  //   });
  //   console.log(this.state.files)
  //   console.log(files)
  //   console.log(this.state.files_array)
  //
  // }

  render() {
console.log(this.state.test_files);
    return (
      <div className="App">
        <section>
          <button type="button" onClick={()=>console.log(this.state.files_array)}/>
          {/*<div className="dropzone">*/}
          {/*/!*{this.state.files.map((index)=>(*!/*/}
          {/*/!*<Dropzone key={index} onDrop={this.onDrop.bind(this)} accept="image/jpeg,application/pdf"*!/*/}
          {/*/!*multiple={true}*!/*/}
          {/*/!*>*!/*/}
          {/*/!*<p>Try dropping some files here, or click to select files to upload.</p>*!/*/}
          {/*/!*</Dropzone>*!/*/}
          {/*/!*))}*!/*/}
          {/*<Dropzone onDrop={this.onDrop.bind(this)} accept="image/jpeg,application/pdf"*/}
          {/*style={dropzoneStyle}*/}
          {/*>*/}
          {/*<i className="fa fa-arrow-circle-up fa-lg"></i>*/}
          {/*<p style={dropzoneTextGrey}>Drag a file here or <span style={dropzoneTextBlue}>browse</span> for a file to upload</p>*/}
          {/*</Dropzone>*/}
          {/*</div>*/}
          {/*<small className="float-left">Constraints on file format and size.</small>*/}
          <div className="row">
            <div className="col-9 offset-1">
              <HandledUploadFile constrain="* Constraints on file format and size." accept="image/jpeg,application/pdf" files_array={this.state.files_array}/>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default App;
