import { ThreeDots } from "react-loader-spinner";
import React from "react";

const Loader: React.FC = () => {
    return (
        <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        />
    );
}

export default Loader;