import App from "../App";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("order phases for happy path", async () => {
    //render app
    render(<App />);
    //add scoop and toppings
    const vanillaInput = await screen.findByRole("spinbutton", {
        name: "Vanilla",
    });

    const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(scoopsSubtotal).toHaveTextContent("2.00");

    const toppingsTotal = screen.getByText("Toppings total: $", { exact: false });
    const cherriesCheckbox = await screen.findByRole("checkbox", {
        name: "Cherries",
    });

    userEvent.click(cherriesCheckbox);
    expect(toppingsTotal).toHaveTextContent("1.50");

    //find and click order button

    const orderBtn = screen.getByRole("button", { name: "Order Sundae!" });
    userEvent.click(orderBtn);

    //check summary info based on order
    const summaryScoops = await screen.findByRole("heading", { name: /^Scoops:/ });
    expect(summaryScoops).toHaveTextContent("2.00");
    const summaryToppings = await screen.findByRole("heading", { name: /^Toppings:/ });
    expect(summaryToppings).toHaveTextContent("1.50");

    expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
    expect(screen.getByText("Cherries")).toBeInTheDocument();

    //accept terms and conditions and confirm click btn
    const termsAndConditionsCheckbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
    userEvent.click(termsAndConditionsCheckbox);
    expect(termsAndConditionsCheckbox).toBeChecked();

    const orderConfirmationBtn = screen.getByRole("button", { name: "Confirm order" });
    userEvent.click(orderConfirmationBtn);
    //confirm order number on confirmation page

    const confirmationNumber = await screen.findByText("Your order number is 56548888");
    expect(confirmationNumber).toBeInTheDocument();

    //click new order on confirmation page
    const newOrderBtn = screen.getByRole("button", { name: /new order/i });
    userEvent.click(newOrderBtn);

    //check that scoops and toppings subtotals have been reset
    const scoopsTotalInitialState = await screen.findByText("Scoops total: $0.00");
    expect(scoopsTotalInitialState).toBeInTheDocument();
    const toppingsTotalInitialState = screen.getByText("Toppings total: $0.00");
    expect(toppingsTotalInitialState).toBeInTheDocument();

    // Prevent test getting angry :()
    await screen.findByRole("spinbutton", { name: "Vanilla" });
    await screen.findByRole("checkbox", { name: "Cherries" });
});
