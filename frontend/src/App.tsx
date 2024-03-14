import AppRouter from './routes/AppRouter';
import './assets/styles/App.css';
import { Layout } from 'antd';
import PageMenu from './components/PageMenu';

function App() {
  return (

    <Layout style={{ height: "100vh" }}>
      <PageMenu />
      <Layout>
        <AppRouter />
      </Layout>
    </Layout>

  );
}

export default App;