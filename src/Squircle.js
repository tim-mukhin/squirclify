import React, { useEffect, useRef } from "react";

import { squirclify } from "./squirclify";

export const Squircle = ({ children, className, ...rest }) => {
    const el = useRef(null);

    useEffect(() => {
        squirclify(el.current);
    }, []);

    return (
        <div className={className} {...rest} ref={el}>
            {children}
        </div>
    );
};
