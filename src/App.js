import Create from './dist/Create';
import Write from './dist/Write';

import SystemUIconsProvider from './dist';

function App() {
  return (
    <div>
      <Create />
      <Write />
      <SystemUIconsProvider
        customTheme={{
          size: 40,
        }}
      >
        <Create />
        <Write />
      </SystemUIconsProvider>
    </div>
  );
}

export default App;
