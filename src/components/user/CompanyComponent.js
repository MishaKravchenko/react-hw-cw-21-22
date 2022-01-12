import React from 'react';

function CompanyComponent(props) {
    let {name, catchPhrase, bs} = props.company
    return (
        <div className={"container_company"}>
            <h3>C O M P A N Y</h3>
            <p>name - {name}</p>
            <p>catchPhrase - {catchPhrase}</p>
            <p>bs - {bs}</p>
        </div>
    );
}

export default CompanyComponent;