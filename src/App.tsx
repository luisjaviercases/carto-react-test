import { useState } from 'react';
import '@/App.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import PageContainer from '@/components/PageContainer/PageContainer';
import ToggleButton from '@/components/ToggleButton/ToggleButton';

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
        <p>Contenido principal</p>
      </PageContainer>
    </div>
  );
}

export default App;
