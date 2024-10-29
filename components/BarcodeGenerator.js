import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const BarcodeGenerator = ({ value }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (value && svgRef.current) {
            JsBarcode(svgRef.current, value, {
                format: "ITF",
                width: 2,
                height: 50,
                displayValue: true,
            });
        }
    }, [value]); // Solo se ejecuta cuando `value` cambia

    return <svg ref={svgRef}></svg>;
};

export default BarcodeGenerator;
