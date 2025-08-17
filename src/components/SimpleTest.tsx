// Minimal test component to isolate the issue
const SimpleTest = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#2563eb', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉 Test Working!</h1>
        <p style={{ fontSize: '1.5rem' }}>If you see this, React is rendering!</p>
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: 'white', 
          color: '#2563eb',
          borderRadius: '8px'
        }}>
          <p style={{ fontWeight: 'bold' }}>✅ React is working</p>
          <p style={{ fontWeight: 'bold' }}>✅ Component rendering</p>
          <p style={{ fontWeight: 'bold' }}>✅ No external dependencies</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleTest;
