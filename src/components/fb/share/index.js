import React from 'react';

export default (props)=> {
    return (
        <div {...props}>
            <div className="fb-share-button"
                 data-href="http://elliotcardin.com/trans-vallee-2017"
                 data-layout="button">
            </div>
        </div>
    );
}