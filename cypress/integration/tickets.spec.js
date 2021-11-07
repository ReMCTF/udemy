//const { it } = require("mocha");

describe("Tickets", () => {
    beforeEach(() => cy.visit("http://bit.ly/2XSuwCW"));

    it("fill all the text input fields", () => {
        // cy.get identifica elementos de selector CSS
        const firstName = "Rebeca";
        const lastName = "Monteiro";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("rebeca123@gmail.com");
        cy.get("#requests").type("qualquer comida");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });

    it.only("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    it("has 'TICKETBOX' header's heading", () => {

    });
});