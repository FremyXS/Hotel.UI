import React, { ReactNode } from "react";

import './Container.scss';
import { useLocation } from "react-router-dom";

function Container({ children }: { children: ReactNode }) {
    const location = useLocation();

    return (
        <div className="container">
            {location.pathname !== '/' &&
                <>
                    <div className="header">
                        <div className="header-content">
                            <h1>Hotel UI</h1>
                        </div>
                    </div>
                    <div className="main">{children}</div>
                </>
            }
            {location.pathname === '/' &&
                children
            }
        </div>
    );
}

export default Container;