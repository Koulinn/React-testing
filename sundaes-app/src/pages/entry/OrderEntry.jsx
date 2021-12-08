import Button from "react-bootstrap/Button";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderEntry({ setOrderPhase }) {
    const [orderDetails] = useOrderDetails();

    const isOrderBtnDisabled = orderDetails.totals.scoops === "$0.00";
    return (
        <div>
            <h1>Design Your Sundae!</h1>
            <Options optionType='scoops' />
            <Options optionType='toppings' />
            <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
            <Button onClick={() => setOrderPhase("review")} disabled={isOrderBtnDisabled}>
                Order Sundae!
            </Button>
        </div>
    );
}
