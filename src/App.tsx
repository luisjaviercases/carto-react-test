import { useState } from 'react';
import '@/App.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import PageContainer from '@/components/PageContainer/PageContainer';
import ToggleButton from '@/components/ToggleButton/ToggleButton';
import Map from './components/Map/Map';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen}>
        <span>Sidebar content</span>
      </Sidebar>
      <PageContainer isOpen={isOpen}>
        <ToggleButton isOpen={isOpen} onClick={toggleSidebar} />
        <Map />
      </PageContainer>
    </div>
  );
}

export default App;
