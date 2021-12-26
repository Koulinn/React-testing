import { render, screen } from "../../../test-utils/testing-library-utils";
import OrderConfirmation from "../OrderConfirmation";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test.only("should display error alert on server error response", async () => {
    server.resetHandlers(
        rest.post("http://localhost:3030/order", (req, res, ctx) =>
            res(ctx.status(500))
        )
    );
    render(<OrderConfirmation setOrderPhase={jest.fn()} />);
    const errorMessage = await screen.findByRole("alert");
    expect(errorMessage).toHaveTextContent(
        "An unexpected error occurred. Please try again later."
    );
});
