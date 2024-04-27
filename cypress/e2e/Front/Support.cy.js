import SupportM from "../pages/SupportModal.js";

describe('Support', () => {
    it('Support', () => {
        cy.viewport(1280, 1020)
        cy.visit('/')

        const Support = new SupportM();

        Support.validateSupportsBtn();
        Support.validateDonationCredentials();
        Support.validateDonationPurposeTitle();
        Support.validateDonationActions();
        Support.validateCloseDonationModal();
    });
})