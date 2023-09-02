import { Button } from ".";

const { render, screen, fireEvent } = require("@testing-library/react");

describe("<Button />", () => {
  it("should_render_the_button_with_the_text load more", () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);
    expect.assertions(1);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should should be disabled when disabled is true", () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={true} onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it("should should be enabled when disabled is false", () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeEnabled();
  });
});
