import { TodoList } from '../todo-list/todo-list';
import { TodoForm } from '../todo-form/todo-form';
import { TodosCategories } from '../todos-categories/todos-categories';
import { useSelector } from 'react-redux';
import { todoSelector } from '../../features/todoSlice/todoSlice';
import styles from './App.module.css'
import { TodosManagement } from '../todos-management/todos-management';


function App() {
  return (
    <div className={styles.App}>
      <TodoForm />
      <TodosCategories />
      <TodoList />
      <TodosManagement />
    </div>
  );
}

export default App;
