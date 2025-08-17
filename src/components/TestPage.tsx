// Simple test component to verify React rendering is working
const TestPage = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">🎉 Test Page Working!</h1>
        <p className="text-xl">If you can see this, React is rendering correctly!</p>
        <div className="mt-8 p-4 bg-white text-blue-500 rounded-lg">
          <p className="font-semibold">✅ React is working</p>
          <p className="font-semibold">✅ Tailwind CSS is working</p>
          <p className="font-semibold">✅ Component rendering is working</p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
