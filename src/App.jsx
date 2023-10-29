
import { Fragment, useState } from 'react'

const title = "Bonjour les gens";
const style_titre = {color: 'red', backgroundColor: 'beige'}
const showTitle = true
const todos = [
  'test projet',
  'test projets 2',
  'test projets 3'
]


function App() {


  const handleClick = (e) =>{
    //console.log(e)
    alert("J'ai cliqué sur le titre")
  }
  
  return <Fragment>
  
    {
      showTitle ? 
        <h1 onClick={handleClick} id="title" className='title' style={style_titre} > {title}</h1> : 
        <p>test</p>
    }
    <Title color="purple" hidden id="monidcustom" className="maclassnamecustom" data-demo="demo">Rebonjour les gens</Title>
    <input type="text" />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Doloremque fugit quod est corrupti eligendi, quidem voluptatum, fuga odio repudiandae eos quisquam commodi tempora ipsam veritatis voluptates, id suscipit quos omnis!

      test lol
    </p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>

  </Fragment>
}


function Title({color, children, hidden, ...props }){ 
  /*if(hidden)
  {
    return null
  }*/

  console.log(hidden)

  const propri = {
    id: 'monidcustom',
    className: 'maclassenamecustome'
  }


  return <h1 style={{color: color}} /*{...propri}*/ {...props}>{children}</h1>
}

export default App
