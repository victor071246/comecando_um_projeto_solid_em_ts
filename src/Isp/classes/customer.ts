import { EnterpriseCustomerProtocol, IndividualCustomerProtocol } from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
    firstName: string;
    lastName: string;
    cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.cnpj = '';
    }
    cnpj: string;
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
    cnpj: string;
    name: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }
}
