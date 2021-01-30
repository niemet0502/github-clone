import React from 'react'
import "./Body.css"
function Body() {
  return (
    <div className="Body">
        <div className="Body__profilInfos">
          <div>
            <img src="https://avatars.githubusercontent.com/u/62050249?s=460&u=0e0a1c398dac0b29e7283b2626b7f5b71fbddd0f&v=4" alt="" style={{marginTop: "-30px" ,float: "right",borderRadius: "50%", width: "300px"}} />
            <h2 className="Body__profilInfos_name">Marius Vincent NIEMET</h2>
            <h4  className="Body__profilInfos_pseudo">niemet0502</h4>
            <h4  className="Body__profilInfos_pseudo">The Nothing</h4>
            <button  className="Body__profilInfos_btnEdit">Edit Profile</button>
          </div>
        </div>
        <div className="Body__repos">
        Marius
        </div>
    </div>
  )
}

export default Body
