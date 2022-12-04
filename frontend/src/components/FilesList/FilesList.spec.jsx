import { render } from "@testing-library/react";
import { FilesList } from "../FilesList";

describe("FilesList component", () => {
  it("should not render anything", () => {
    const { container } = render(<FilesList files={[]} />);

    expect(container.childElementCount).toEqual(0);
  });

  it("should render one file", () => {
    const name = "name.txt";
    const { queryByText } = render(
      <FilesList files={[{ name: name }]} counts={[1]} />
    );

    expect(queryByText(name)).toBeTruthy();
    expect(queryByText("1 email")).toBeTruthy();
  });
});
