import React, {ReactElement} from "react";
import GameList from "components/GameList";
import withErrorBoundary from "hoc/withErrorBoundary";

const Home = () : ReactElement => {
    return <GameList/>
}
export default withErrorBoundary(Home);