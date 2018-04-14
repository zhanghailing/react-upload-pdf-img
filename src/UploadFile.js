import React from 'react';
import Dropzone from 'react-dropzone'

const borderStyle = {
  borderWidth: '2px',
  borderColor: '#D4D4D4',
  borderRadius: '25px',
  borderStyle: 'dashed',
}
const fileCardStyle = {
  width: '150px',
  height: '150px',
  boxShadow: '1px 1px 1px 2px rgb(75, 144, 226,0.20)',
  margin: '3px 5px'
}
const imgStyle = {
  position: 'relative',
  top: '-45px',
  width: '150px',
  height: '150px',
  padding: '0.5em',
  overflow: 'hidden',
}
const dropzoneTextGrey = {
  color: '#D4D4D4',
}
const dropzoneTextBlue = {
  color: '#4B90E2',
}
const constrainStyle = {
  color: '#757575',
}
const deletionCrossStyle = {
  position: 'relative',
  top: '-10px',
  right: '-70px',
  fontSize: '30px',
  zIndex: '10'
}

class UploadFile extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Dropzone onDrop={(e) => this.props.onDrop(e)} accept={this.props.accept}
                      style={borderStyle}>
              <br />
              <br />
              <i className="fa fa-arrow-circle-up fa-lg btn"
                 style={{fontSize: '50px', color: 'rgb(75, 144, 226,0.20)'}}></i>
              <p style={dropzoneTextGrey}>Drag a file here or <span style={dropzoneTextBlue}>browse</span> for a file to
                upload</p>
              <br />
            </Dropzone>
          </div>
          <div className="col-9" style={borderStyle}>
            <div className="row" style={{margin:'5px 5px'}}>
            {

            this.props.files_array.map((f, index) =>
              <div style={fileCardStyle} key={index}>
                <i className="fa fa-times-circle btn" style={deletionCrossStyle}
                   onClick={() => this.props.deleteFile(index)}/>
                <img src={f.preview} style={imgStyle}/>
              </div>
            )
            }</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <small style={constrainStyle} className="float-left">{this.props.constrain}</small>
          </div>
        </div>


      </div>
    );
  }
}

export default UploadFile;
