import {Header} from "../components/Header/Header";
import {AsteroidsContext} from "../components/AsteroidsСontext/AsteroidsContext";
import {useContext} from "react";
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard";
import {Footer} from "../components/Footer/Footer";

export const Destruction = () => {
    const {destroyment} = useContext(AsteroidsContext);

    return (
        <div>
            <Header/>
            <div>
                {destroyment.map((item) => (
                    <AsteroidCard key={item.id} {...item} />
                ))}
            </div>
            <Footer/>
        </div>
    );
};
