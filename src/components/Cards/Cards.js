import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Cards.css";

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out this epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep incise the amazon jungle"
                            label="Adventure"
                            path="/Services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel through ths Islands"
                            label="Lux"
                            path="/Services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-4.jpg"
                            text="Along in the Ocean "
                            label="Adventure"
                            path="/Services"
                        />
                        <CardItem
                            src="images/img-1.jpg"
                            text="Get to kow Africa"
                            label="Lux"
                            path="/Services"
                        />
                        <CardItem
                            src="images/img-5.jpg"
                            text="City walk"
                            label="Regular"
                            path="/Services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
