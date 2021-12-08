import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import ScoopOption from "../ScoopOption";

test("should have class is-invalid on invalid input ", () => {
    render(<ScoopOption updateItemCount={jest.fn()} />);
    const scoopInput = screen.getByRole("spinbutton");

    //negative number
    userEvent.clear(scoopInput);
    userEvent.type(scoopInput, "-1");
    expect(scoopInput).toHaveClass("is-invalid");

    //valid number
    userEvent.clear(scoopInput);
    userEvent.type(scoopInput, "3");
    expect(scoopInput).not.toHaveClass("is-invalid");

    // > 10 invalid
    userEvent.clear(scoopInput);
    userEvent.type(scoopInput, "11");
    expect(scoopInput).toHaveClass("is-invalid");

    //decimals
    userEvent.clear(scoopInput);
    userEvent.type(scoopInput, "2.5");
    expect(scoopInput).toHaveClass("is-invalid");
});
