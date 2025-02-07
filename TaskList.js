import { useState } from 'react';
import styles from '../styles/TaskList.module.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={styles.taskListContainer}>
      <h2 className={styles.taskListTitle}>Task List</h2>
      <div className={styles.taskInputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className={styles.taskInput}
        />
        <button onClick={addTask} className={styles.addTaskButton}>
          Add Task
        </button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <span
              className={`${styles.taskText} ${
                task.completed ? styles.completedTask : ''
              }`}
            >
              {task.text}
            </span>
            <div className={styles.taskActions}>
              <button
                onClick={() => toggleTaskCompletion(task.id)}
                className={styles.taskButton}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className={styles.taskButton}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
