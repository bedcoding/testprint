import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { Table } from './components/Table';

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="app">
      <div className="container">
        <button onClick={handlePrint}>Print this out!</button>

        <div className="talb" style={{ display: "none" }}>
          <Table ref={componentRef} />
        </div>
      </div>
    </div>
  )
};
export default App;
