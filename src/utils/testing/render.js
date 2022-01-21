import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test Page", route);
  return render(ui, { wrapper: MemoryRouter });
};

export default renderWithRouter;
