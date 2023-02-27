
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home"

function App() {

  let [saygac, setSaygac] = useState(0)

const saygacF = () => {
  console.log("clicked")
  setSaygac(++saygac)
}


  return (
    <div className="App">
<Header saygac = {saygac}/>
<Home saygacF = {saygacF}/>
   
    </div>
  );
}

export default App;
