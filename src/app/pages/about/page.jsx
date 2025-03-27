import PrivateRoute from "../../components/PrivateRoute";

export default function Home() {
  return (
    <PrivateRoute>
    <div>
      <h1>about page</h1>
    </div>
    </PrivateRoute>
  );
}
