import React from "react";
import ReactDOM from 'react-dom/client'

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to use google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

<App/>

)