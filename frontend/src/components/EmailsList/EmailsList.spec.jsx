import { render } from "@testing-library/react";
import { EmailsList } from "../EmailsList";

describe("EmailsList component", () => {
  const EMAIL = "test@mail.com";
  const EMAIL2 = "test2@mail.com";

  it("should not render anything", () => {
    const { container } = render(<EmailsList emails={[]} />);

    expect(container.childElementCount).toEqual(0);
  });

  it("should render one email", () => {
    const { queryByText } = render(<EmailsList emails={[EMAIL]} />);

    expect(queryByText(EMAIL)).toBeTruthy();
  });

  it("should render one email with error", () => {
    const { container } = render(
      <EmailsList emails={[EMAIL]} errors={[EMAIL]} />
    );

    expect(container.getElementsByClassName("failed").length).toBe(1);
  });

  it("should render several emails without errors", () => {
    const { container } = render(<EmailsList emails={[EMAIL, EMAIL2]} />);

    expect(container.getElementsByClassName("email").length).toBe(2);
    expect(container.getElementsByClassName("failed").length).toBe(0);
  });
});
