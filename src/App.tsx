import { LangProvider } from "./providers";
import AppRoute from "./routes/AppRoutes";

function App() {
  return (
    <LangProvider>
      <AppRoute />
    </LangProvider>
  );
}

export default App;
