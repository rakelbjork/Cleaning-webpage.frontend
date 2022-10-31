import React, { useEffect } from 'react'

function App () {

  useEffect(() => {
    StorageEvent.dispatch(loadUser())
  }, [])
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="container container-fluid">
        <Route path="/" component={Home} exact />
        <Route path="keyborad" component={Home} />

        <Route path="/login" component={Login} />

      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;