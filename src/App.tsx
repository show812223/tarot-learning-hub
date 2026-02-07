import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import CardDetailPage from './pages/CardDetailPage';
import DailyDrawPage from './pages/DailyDrawPage';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/card/:id" element={<CardDetailPage />} />
          <Route path="/daily" element={<DailyDrawPage />} />
        </Routes>
      </main>
      <footer
        style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          borderTop: '1px solid var(--color-border)',
          color: 'var(--color-text-muted)',
          fontSize: '0.85rem',
        }}
      >
        塔羅學習小站 — 探索 78 張塔羅牌的智慧
      </footer>
    </>
  );
}
