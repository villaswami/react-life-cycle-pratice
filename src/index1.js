import React from "react";
// class Sample extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             age:30,
//             height:122
//         }
//         console.log("method")
//     }
//     // static getDerivedStateFromProps(props,state){
//     //     return{age:500,height:22}
//     // }
//     componentDidMount(){
//         setTimeout(()=>{this.setState({age:300})},500)
//     }
//     shouldComponentUpdate(){
//         return true;
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState){
//         console.log(prevProps,prevState)
//     }
//     componentDidUpdate(){
//         console.log("componentDidUpdate")
//     }
//     render(){
//         return(
//             <div>
//                 <h1>hello iam in{this.state.age},{this.state.height}</h1>
//             </div>
//         )
//     }
// }
// export default Sample

import ReactDOM from 'react-dom';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
export default Container