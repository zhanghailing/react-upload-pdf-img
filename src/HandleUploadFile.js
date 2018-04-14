import React from 'react';
// handler
export default function HandleUploadFile (ComposedComponent) {
  return class  extends React.Component {
    constructor() {
      super()
      this.state = {
        files_array: []
      }
    }
    onDrop = (files) => {
      var test = this.state.files_array;
      this.setState({
        files_array: test.concat(files)
      });
    }
    deleteFile = (index) => {

      var test = this.state.files_array;
      var removed = test.splice(index, 1)
      this.setState({
        files_array: test
      });
    }
    componentWillMount(){
      this.setState({files_array:this.props.files_array})
    }
    // componentWillUnmount(){
    //   this.setState({files_array:[]})
    // }

    render() {
      return <ComposedComponent {...this.props} {...this.state} onDrop={this.onDrop}
                                deleteFile={this.deleteFile} files_array={this.state.files_array}
      />;
    }
  }
};

