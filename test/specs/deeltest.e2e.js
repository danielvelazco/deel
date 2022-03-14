require("dotenv").config();
const LoginPage = require("../pageobjects/login.page");
const SidebarPage = require("../pageobjects/sidebar.page");
const ContractTypePage = require("../pageobjects/contractType.page");
const FixedContractPage = require("../pageobjects/fixedContract.page");
const PaymentDetailsPage = require("../pageobjects/paymentDetails.page");
const DefineDatesPage = require("../pageobjects/defineDates.page");
const BenefitsAndExtrasPage = require("../pageobjects/benefitsAndExtras.page");
const CompliancePage = require("../pageobjects/compliance.page");
const ReviewSignPage = require("../pageobjects/reviewSign.page");
const { User, SidebarOptions, ContractsType, ResidenceCountry, ResidenceState, Seniority, ScopesIndex, Currency, PaymentFrecuency } = require("../enums");

describe("Create a contract", () => {
    before(async () => {
        await LoginPage.open();
    });

    it("Fixed Rate contract", async () => {
        await LoginPage.login(process.env.EMAIL_ADDRESS, process.env.PASSWORD);
        await SidebarPage.selectSidebarOption(SidebarOptions.CREATE_CONTRACT);
        await ContractTypePage.selectContractType(ContractsType.FIXED_RATE);
        
        // General info form
        await FixedContractPage.fillGeneralInfoForm({
            name: User.NAME,
            contractorTaxResidenceCountry: ResidenceCountry.USA,
            contractorTaxResidenceState: ResidenceState.COL,
            seniorityLevel: Seniority.DIR,
            scope: ScopesIndex.ACCOUNT_EXECUTIVE
        });
        
        // Payment details form
        await PaymentDetailsPage.fillPaymentDetailsForm({
            currency: Currency.GB,
            PaymentRate: 1000,
            frecuency: PaymentFrecuency.Week
        });

        // Define dates form - default values
        await DefineDatesPage.buttonNext.click();

        // Benefits and Extras form
        await BenefitsAndExtrasPage.fillBenefitsAndExtrasForm({
            specialClause: "especial"
        });

        // Compliance form - default values
        await CompliancePage.createAContract();

        // The review & sign button must be displayed/enabled when the contract is successfully created
        await expect(ReviewSignPage.buttonReviewSign).toBeDisplayed();
        await expect(ReviewSignPage.buttonReviewSign).toBeClickable();
        
    });
});


