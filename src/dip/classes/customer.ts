import { CustomerOrder, EnterpriseCustomerProtocol, IndividualCustomerProtocol } from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
    firstName: string;
    lastName: string;
    cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.cnpj = '';
    }
    getName(): string {
        return this.firstName + ' ' + this.lastName;
    }
    getIDN(): string {
        return this.cpf;
    }
    cnpj: string;
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
    cnpj: string;
    name: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }
    getName(): string {
        return this.name;
    }
    getIDN(): string {
        return this.cnpj;
    }
}
