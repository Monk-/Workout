import './App.css';
import Creator from './creator/Creator'
import WorkoutView from './workout/WorkoutView'

function App() {
  return (
    <div className="parent">
      <Creator />
      <WorkoutView />
    </div>
  );
}

export default App;
