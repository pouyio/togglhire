import { render } from "@testing-library/react";
import { TYPES } from "../../contexts/Alert";
import { Alert } from "../Alert";

describe("Alert component", () => {
  it("should render a success message", () => {
    const { queryByText } = render(<Alert type={TYPES.success} />);

    expect(
      queryByText("Success, all the emails were sent correctly!")
    ).toBeTruthy();
  });

  it("should render an error message", () => {
    const { queryByText } = render(<Alert type={TYPES.error} />);

    expect(queryByText("There was a problem")).toBeTruthy();
  });
});
