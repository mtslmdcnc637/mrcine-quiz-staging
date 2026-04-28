import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import QuizApp from './QuizApp';
import LandingPage from './LandingPage';
import { captureReferral } from './lib/referral';
import './index.css';

// Capture referral on idle to not block render
if ('requestIdleCallback' in window) {
  requestIdleCallback(captureReferral);
} else {
  setTimeout(captureReferral, 1);
}

// Remove static HTML shell after Preact mounts
const shell = document.getElementById('app-shell');
if (shell) shell.remove();

// Simple hash-based router
function App() {
  const [route, setRoute] = useState<'landing' | 'quiz'>(() => {
    // If URL has #quiz or #/quiz, start on quiz
    const hash = window.location.hash.replace('#', '').replace('/', '');
    return hash === 'quiz' ? 'quiz' : 'landing';
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      setRoute(hash === 'quiz' ? 'quiz' : 'landing');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const startQuiz = () => {
    window.location.hash = '#quiz';
    setRoute('quiz');
  };

  if (route === 'quiz') {
    return <QuizApp />;
  }

  return <LandingPage onStartQuiz={startQuiz} />;
}

render(<App />, document.getElementById('root')!);
