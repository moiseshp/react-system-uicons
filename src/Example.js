import React from 'react';
import CreateIcon from './lib/Create';
import WriteIcon from './lib/Write';
// import Pen from './dist/Pen';
// import SystemUIconsProvider from './dist';
import './styles.css';

function App() {
  return (
    <div style={{ color: '#390' }}>
      <h1>Without Provider</h1>
      <CreateIcon size={40} />
      <CreateIcon size={48.2} />
      <CreateIcon size="x-large   $$$" color="secondary-  hi" />
      <CreateIcon size="medium" id="World" />
      <CreateIcon size="large" id="other" />

      <WriteIcon />
      {/* <hr />
      <h1>With Provider</h1>
      <SystemUIconsProvider theme={{ size: 40, pallete: { secondary: '#0ff' } }}>
        <Create color="secondary" />
        <Write color="primary" />
      </SystemUIconsProvider>

      <h1>With ClassName</h1>
      <section className="WrapperStyles">
        <Create size="large" />
        <Create size="small" color="primary" />
      </section> */}
    </div>
  );
}

export default App;
