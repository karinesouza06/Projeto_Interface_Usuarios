function Dashboard({ children }) {
  return (
    <div>
      <h2> Lista de Tarefas</h2>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Dashboard;