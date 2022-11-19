import React from 'react'


const MyPage = (props) => {

    const {loggedInUser} = props


  return (
    <div className="App">

      {loggedInUser

        ?

        <div>
          <h1>{loggedInUser.username}Mina Sidor</h1>
          <MyPage user={loggedInUser} />
          <button onClick={() => setLoggedInUser(null)}>Logga ut</button>
        </div>

        :

        <Login setLoggedInUser={setLoggedInUser} />

      }


    </div>

  )
}

export default MyPage;