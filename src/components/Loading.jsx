import React from 'react';

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="spinner" style={{
        width: '50px',
        height: '50px',
        border: '5px solid lightgray',
        borderTop: '5px solid orange',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
