import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btnPrimary", "btnOutline"];

const SIZES = ["btnMedium", "btnLarge"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <div>
            <Link to="/SighUp" className="btnMobile">
                <button
                    className={`btn ${checkButtonStyle} ${checkBtnSize} `}
                    type={type}
                >
                    {children}
                </button>
            </Link>
        </div>
    );
};

export default Button;
