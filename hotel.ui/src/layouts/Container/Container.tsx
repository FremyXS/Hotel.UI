import React, { ReactNode } from "react";

import './Container.scss';

function Container({children}:{children: ReactNode}){
    return(
        <div className="container">
            {children}
        </div>
    );
}

export default Container;