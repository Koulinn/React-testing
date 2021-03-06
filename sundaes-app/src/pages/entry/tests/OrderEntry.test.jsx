import { render, screen, waitFor } from "../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import userEvent from "@testing-library/user-event";

test("handles error for scoops and toppings routes", async () => {
    server.resetHandlers(
        rest.get("http://localhost:3030/scoops", (req, res, ctx) => res(ctx.status(500))),
        rest.get("http://localhost:3030/toppings", (req, res, ctx) => res(ctx.status(500)))
    );

    render(<OrderEntry />);

    await waitFor(async () => {
        const alerts = await screen.findAllByRole("alert");
        expect(alerts).toHaveLength(2);
    });
});

test("disable order btn if no scoops are selected", async () => {
    render(<OrderEntry />);
    const vanillaInput = await screen.findByRole("spinbutton", {
        name: "Vanilla",
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "0");

    const orderSundaeBtn = screen.getByRole("button", { name: "Order Sundae!" });
    expect(orderSundaeBtn).toBeDisabled();

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "1");
    expect(orderSundaeBtn).toBeEnabled();

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "0");
    expect(orderSundaeBtn).toBeDisabled();
});
