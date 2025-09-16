import { ROUTES } from "../utils/routes";

class CustomerPage {

    constructor(page) {
        this.page = page;

        this.create_customer_button = 'button:has-text("Create Customer")'; //<button> Create Customer </button>

        //datos obligatorios
        this.first_name_input = '#first_name';
        this.last_name_input = '#last_name'; 
        this.email_input = '#email'; 
        this.gender_select = '#gender'; // <select id=gender> <option>...</option> </select>

        //datos opcionales
        this.contact_number_input = '#phone';
        this.date_of_birth_input = '#dob'; // <input id="dob"/>
        this.customer_group_select = '#customerGroup'; // <select id="customerGroup"> <option>...</option> </select>

        this.save_customer_button = 'button:has-text("Save customer")'; //<button> Save Customer </button>
    }

    async goto() {
        await this.page.goto(ROUTES.CUSTOMERS); //desde playwright.config.js y routes.js
    }

    async createCustomer({ firstName, lastName, email, gender, phone, dob, customerGroup }) {
        await this.page.click(this.create_customer_button);
        await this.page.fill(this.first_name_input, firstName);
        await this.page.fill(this.last_name_input, lastName);
        await this.page.fill(this.email_input, email);
        await this.page.selectOption(this.gender_select, gender);

        // Opcionales
        if (phone) await this.page.fill(this.contact_number_input, phone);
        if (dob) await this.page.fill(this.date_of_birth_input, dob);
        if (customerGroup) await this.page.selectOption(this.customer_group_select, customerGroup);

        await this.page.click(this.save_customer_button);
    }

    async customer_in_list() {
        //TODO: implementar
    }

}

module.exports = {CustomerPage};