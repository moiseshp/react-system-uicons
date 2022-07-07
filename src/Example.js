import React from 'react';
import Create from './lib/Create';
// import Write from './dist/Write';
// import Pen from './dist/Pen';
// import SystemUIconsProvider from './dist';
import './styles.css';

function App() {
  return (
    <div style={{ color: '#390' }}>
      <h1>Without Provider</h1>
      <Create size="small" />
      <Create size="medium" />
      <Create size="large" />

      <Create size="10px" />
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
