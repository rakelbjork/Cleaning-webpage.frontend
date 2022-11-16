import React from 'react'

const MyPage = (props) => {

    const {loggedInUser} = props


  return (
    <div>Hejsan {loggedInUser.username}s Mypage
        

    </div>
  )
}

export default MyPage