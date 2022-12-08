import React, {useState, useEffect} from 'react';
 import Editor from './Editor';

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setsrcDoc] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setsrcDoc (` 
      <html>
       <body>${html}</body>
       <style>${css}</style>
       <script>${js}</script>
      </html>
     `)
    }, 250)

    return() => clearTimeout(timeout)
  }, [html, css, js])
 
  return (
    <>
    <div className="pane top-pane">
        <Editor language="xml"
         displayName="HTML" 
         value={html}
         onChange={setHtml} />
        <Editor language="css"
         displayName="CSS" 
         value={css}
         onChange={setCss} />
        <Editor language="javascript"
         displayName="Js" 
         value={js}
         onChange={setJs} />
        </div>
        
        <div className="pane">
        <iframe 

          srcDoc={srcDoc}
          title="ouptput"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )  
}

export default App;
