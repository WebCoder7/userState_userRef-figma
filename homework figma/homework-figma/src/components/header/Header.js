import React, { useState, useRef, memo } from 'react'
import Imagr from "../../assets/images/177283-anime-v_dayz_anime-multik-ryomen_ego_nogi-yudzi_itadori-3840x2160.jpg"
import "./Header.css"
import Banner from '../banner/Banner';
import photo1 from "../../assets/images/image.png"

console.log("Main outside ");


function Header() {
    const [username, setUsername] = useState()
    const password = useRef()

    console.log("Main inside ");

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            username,
            password: password.current.value
        }
        console.log(user);
    }

    let text = "Mobile & Computing"
    return (
        <div>
            <h1>Header</h1>
            {/* <form onSubmit={handleSubmit} action="">
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
                <input ref={password} type="password" />
                <button>login</button>
            </form> */}


            <Banner title={"Mobile & Computing"}
                name={"Galaxy S24 Ultra"}
                bg={"blue"}
                btn="Leorn more"
                url={photo1}
            />
            <Banner title={"TV & Audio"}
                name={"Buy. Bezel. Beauty."}
                bg={"Gray"}
                btn="Buy now"
                url={photo1}
            />
            <Banner title={"Home Appliances"}
                name={"New Bespoke Al Application"}
                bg={"yellow"}
                btn="Buy now"
                url={photo1}
            />
            <Banner title={"Sustainability"}
                name={"New phone , less waste"}
                bg={"brown"}
                btn="Buy now"
                url={photo1}
            />
        </div>
    )
}

export default memo(Header)