import React from 'react';

export default (props)=> {
    return (
        <div {...props}>
            <div className="fb-like"
                 data-href="http://www.elliotcardin.com/trans-vallee-2017"
                 data-layout="button"
                 data-action="like"
                 data-show-faces="true">
            </div>
        </div>
    );
}