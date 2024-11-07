import React from 'react';
import './App.css';
import Header from './components/Header';
import MainForm from './components/MainForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <MainForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;