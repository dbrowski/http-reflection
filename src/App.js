
function App() {
  const getURLInfo = () => {
    const location = window.location;
    const queryParam = location.search;
    const code = queryParam.replace("?", "")
    const codeValue = queryParam.search("code=.*")
    const url = location.toString();
    return (
      <>
        <h3>your authorization code</h3>
        <h5>{code}</h5>
        <br />
        <p>href</p>
        <p>{window.location.href}</p>
        <p>search</p>
        <p>{window.location.search}</p>
        <p>toString()</p>
        <p>{window.location.toString()}</p>
        <p>location</p>
        <p>{JSON.stringify(window.location, null, "\n\t")}</p>
      </>
    );
  };

  return (
    <div className="App">
      {getURLInfo()}
    </div>
  );
}

export default App;
