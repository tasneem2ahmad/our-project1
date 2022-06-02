import React from 'react';
class Classcard extends React.Component {
    render() { 
        return <React.Fragment>
            <div className='classCard'>
                <img src={this.props.imageName} alt={this.props.alt}></img>
            
            </div>
        </React.Fragment>;
    }
}
 
export default Classcard;