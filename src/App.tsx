import { Button } from "./components/ui/button";
import AdminLayout from "./mainLayout/AdminLayout";
import MainLayout from "./mainLayout/MainLayout";


const App = () => {
  return (
    <div className="mx-auto">
      <MainLayout></MainLayout>
      <AdminLayout></AdminLayout>
      <Button>Click me</Button>
    </div>
  );
};

export default App;