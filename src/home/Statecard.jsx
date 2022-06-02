import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Statecard extends React.Component {
    render() { 
        return <React.Fragment>
            <div><FontAwesomeIcon icon={this.props.logoo}></FontAwesomeIcon></div>
        </React.Fragment>;
    }
}
 
export default Statecard;