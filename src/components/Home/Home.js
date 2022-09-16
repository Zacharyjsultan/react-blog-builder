import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  
  const [subtitle, setSubTitle] = useState('');
  const [font, setFont] = useState('Roboto');
  const [align, setAlign] = useState('left');
  const [text, setText] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={} subtitle={subtitle} text={text} font={font} align={align}/>
      <Editor title={} setTitle={setTitle} subtitle={subtitle} setSubTitle={setSubTitle} font={font} setFont={setFont} align={align} setAlign={setAlign} text={text} setText={setText} />
      
    </main>
  );
}
