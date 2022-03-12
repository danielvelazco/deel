require("dotenv").config();


const LoginPage = require('../pageobjects/login.page');
const Sidebar = require('../pageobjects/sidebar.page');
const ContractType = require('../pageobjects/contractType.page');
const FixedContract = require('../pageobjects/fixedContract.page');
const { SidebarOptions, ContractsType, ResidenceCountry, ResidenceState, Seniority, ScopesIndex } = require("../enums");

describe('My Login application', () => {

    before(async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.EMAIL_ADDRESS, process.env.PASSWORD);
    });

    it('should login with valid credentials', async () => {
        await Sidebar.selectSidebarOption(SidebarOptions.CREATE_CONTRACT);
        await ContractType.selectContractType(ContractsType.FIXED_RATE);
        await FixedContract.fillGeneralInfo({
            name: "Daniel",
            contractorTaxResidenceCountry: ResidenceCountry.USA,
            contractorTaxResidenceState: ResidenceState.COL,
            seniorityLevel: Seniority.DIR,
            scope: ScopesIndex.ACCOUNT_EXECUTIVE
        });
        await browser.pause(5000);
    });
});


