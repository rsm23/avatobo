import React, {Component} from 'react';

class Scroll extends Component{
   render(){
       return (
            <div style={{'overflowY':'scroll', 'borderTop':'2px solid rgba(0,0,0,.5)','height':'100%'}}>
                {this.props.children}
            </div>
       );
   }
}
export default Scroll;