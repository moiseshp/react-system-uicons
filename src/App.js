import Create from './dist/Create';
import Write from './dist/Write';
import Pen from './dist/Pen';
import SystemUIconsProvider from './dist';
import './styles.css';

function App() {
  return (
    <div>
      <h1>Without Provider</h1>
      <Create size={60} />
      <Write color="#345" />
      <Pen />
      <hr />
      <h1>With Provider</h1>
      <SystemUIconsProvider theme={{ size: 40, pallete: { secondary: '#0ff' } }}>
        <Create color="secondary" />
        <Write color="primary" />
      </SystemUIconsProvider>

      <h1>With ClassName</h1>
      <section className="WrapperStyles">
        <Create size="small" />
        <Write color="primary" />
      </section>
    </div>
  );
}

export default App;
