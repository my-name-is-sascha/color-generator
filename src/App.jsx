import { useState } from 'react';

import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

import ColorList from './ColorList';
import Form from './Form';

const App = () => {
  const [colors, setColors] = useState(new Values('#568203').all(10));

  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
      toast.success('new color added');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
