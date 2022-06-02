import React from 'react';

class Logo extends React.Component {
    render() { 
        return <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div className='logo'>
                <div>HAIRKOO</div><br/><br/>
                <div>HAIR SALON</div>
            </div>
        </div>;
    }
}
 
export default Logo;