interface FormRegistrasion {
    email: string;
    password?: string;
    cpassword?: string;
}

interface FormAuthorisation {
    email: string;
    password?: string;
}

interface FormReset {
    email: string;
}

type Forms = FormRegistrasion | FormAuthorisation | FormReset