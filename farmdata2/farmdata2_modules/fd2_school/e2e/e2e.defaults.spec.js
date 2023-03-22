describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
            .should("have.text","Harvest Report")
    })

    it("Check the report start and end date", () => {
        cy.get("[data-cy=start-date]")
            .should("have.value", "2020-05-05")

        cy.get("[data-cy=end-date]")
            .should("have.value", "2020-05-15")
    })

    it("Check the contents of the crop dropdown menu", () => {
        cy.get("[data-cy=crop-dropdown-menu]").children().eq(0)
            .should("have.value", "ARUGULA")

        cy.get("[data-cy=crop-dropdown-menu]").children().eq(4)
            .should("have.value", "BEAN-FAVA")

        cy.get("[data-cy=crop-dropdown-menu]").children().eq(110)
            .should("have.value", "ZUCCHINI")

        cy.get("[data-cy=crop-dropdown-menu]").children()
            .should("have.length", "111")
            
    })
})