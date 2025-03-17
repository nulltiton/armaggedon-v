import {AsteroidCardContent} from "./AsteroidCardContent";
import {useContext} from "react";
import {AsteroidsContext} from "../../AsteroidsСontext/AsteroidsContext";

export const AsteroidCardContentContainer = (props)=> {
    const {distanceMode} = useContext(AsteroidsContext);
    return <AsteroidCardContent {...props} distanceMode={distanceMode} />
}