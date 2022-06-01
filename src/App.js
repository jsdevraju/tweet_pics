import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import FileUpload from './components/FileUpload';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {

  const img = useSelector((state) => state?.img?.img);

  return (
    <>
     <Toaster />
     <Navbar />
     <FileUpload />
      {!img ? <Footer disabled={true} /> : <Footer disabled={false} />}
    </>
  );
}

export default App;
