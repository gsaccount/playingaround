import React from "react";

// every element in react has the props parameter by default even if we dont pass it
// using props.children we can always access the childs of a <tag>
const Scroll = (props) => {
    return (
<div  style={{overflow: 'scroll', border: '2px dashed black', height: '800px'}}>
    {props.children}
</div>
);
}

export default Scroll;