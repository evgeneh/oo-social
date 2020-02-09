import React from "react";

import fetchingPic from "../../media/3Bta.gif"

const Preloader = () => {
return <div>
    <img src={fetchingPic} alt={'loading in process...'}/>
</div>
}
export default Preloader;