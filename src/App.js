import Create from './dist/Create';
import Write from './dist/Write';
import Pen from './dist/Pen';

import SystemUIconsProvider from './dist';

function App() {
  return (
    <div>
      <h1>Without Provider</h1>
      <Create size={60} />
      <Write />
      <Pen />
      <hr />
      <h1>With Provider</h1>
      <SystemUIconsProvider theme={{ size: 40, pallete: { secondary: '#0ff' } }}>
        <Create color="secondary" />
        <Write color="primary" />
      </SystemUIconsProvider>
    </div>
  );
}

export default App;
