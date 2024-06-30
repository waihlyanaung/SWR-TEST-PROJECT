import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import { useItems } from './api';

const App = () => {
  
  const { mutate } = useItems();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">CRUD with SWR and Tailwind CSS</h1>
      <ItemForm mutate={mutate} />
      <ItemList />
    </div>
  );
};

export default App;
