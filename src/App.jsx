import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './pages/LoadingScreen';
import QuestionsScreen from './pages/QuestionsScreen';
import DetailScreen from './pages/DetailScreen';
import ShareScreen from './pages/ShareScreen';
import NoConnectivityScreen from './pages/NoConnectivityScreen';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoadingScreen />} />
      <Route path='/questions' element={<QuestionsScreen />} /> {/* replace path later for: '/questions?filter=FILTER' */}
      <Route path='/questions/:QUESTION_ID/' element={<DetailScreen />} />
      <Route path='/share' element={<ShareScreen />} />
      <Route path='/connectivity' element={<NoConnectivityScreen />} />
    </Routes>
  );
}
