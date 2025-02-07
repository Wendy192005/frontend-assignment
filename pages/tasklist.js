import Head from 'next/head';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList';

export default function TaskListPage() {
  return (
    <>
      <Head>
        <title>Task List | React App</title>
      </Head>
      <Navbar />
      <TaskList />
    </>
  );
}
