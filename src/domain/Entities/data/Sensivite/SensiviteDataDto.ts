interface SensiviteDataDtoBR {
    fullName?: string;
    cpf?: string;
    adress?: {
      street?: string;
      city?: string;
      state?: string;
      cep?: string;
    };
    CreditCardNumber?: string;
    BankAccountNumber?: string;
};

interface SensiviteDataDtoUS {
    fullName?: string;
    socialSecurityNumber?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: string;
    };
    creditCardNumber?: string;
    bankAccountNumber?: string;
};

interface SensiviteDataDtoWeb {
    email: string;
    password: string;
};

export { SensiviteDataDtoBR, SensiviteDataDtoUS, SensiviteDataDtoWeb}