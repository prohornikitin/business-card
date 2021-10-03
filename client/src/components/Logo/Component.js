import style from './style.css'
import React from 'react';
import classnames from 'classnames'

function Logo(props) {
    return (
        <div className={classnames(style.container, props.className)} 
          style={Object.assign({}, props.style, {
            justifyContent: "space-start",
          })}>
            <img src={props.imgSrc} className={style.logo} alt="logo" />
            <h2 style={{
              color: "white",
              verticalAlign:"middle"
            }}>{props.text}</h2>
      </div>
    );
}

export default Logo;