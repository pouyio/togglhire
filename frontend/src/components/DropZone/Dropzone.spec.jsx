import { fireEvent, render } from "@testing-library/react";
import { DropZone } from "../DropZone";

describe("DropZone component", () => {
  it("should call onDropFiles prop when dropping a file inside, i.e. drop event is fired", () => {
    const onDrop = jest.fn();
    const { container } = render(<DropZone onDropFiles={onDrop} />);

    fireEvent.drop(container.querySelector(".drop-zone"), {
      dataTransfer: {
        files: [new File(["(⌐□_□)"], "emails.txt", { type: "text/plain" })],
      },
    });

    expect(onDrop).toBeCalledTimes(1);
  });
});
