import React from "react";
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import TestOne from './components/TestOne';
import TestThree from './components/TestThree';
import TestTwo from './components/TestTwo';
function App() {
  return (
    <div>
    <React.Fragment>
      <ErrorBoundary>
        <TestOne/>
      </ErrorBoundary>

      <ErrorBoundary>
        <TestTwo/>
      </ErrorBoundary>

      <ErrorBoundary>
        <TestThree/>
      </ErrorBoundary>
    </React.Fragment>
    </div>
    /*<div className="App">
      <TestOne/>
      <TestTwo/>
      <TestThree/>
    </div>*/
  );
}

export default App;