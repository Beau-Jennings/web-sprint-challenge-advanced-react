import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)

    userEvent.type(firstNameInput, "Craig");
    userEvent.type(lastNameInput, "Random");
    userEvent.type(addressInput, "123 Random St.");
    userEvent.type(cityInput, "random City");
    userEvent.type(stateInput, "Iowa");
    userEvent.type(zipInput, "12345");

    const button = screen.getByRole("button", {name: /Checkout/i});
    userEvent.click(button);
});
