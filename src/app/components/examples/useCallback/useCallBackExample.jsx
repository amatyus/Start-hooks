import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCollback = useRef(0);
    const withCollback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validateWithOutCollback = (data) => {
        console.log(data);
    };

    useEffect(() => {
        validateWithOutCollback(data);
    }, [data]);

    useEffect(() => {
        withOutCollback.current++;
    }, [validateWithOutCollback]);
    const validateWithCollback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        validateWithCollback(data);
    }, [data]);

    useEffect(() => {
        withCollback.current++;
    }, [validateWithCollback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render WithOutCollback: {withOutCollback.current}</p>
            <p>Render WithCollback: {withCollback.current}</p>

            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
