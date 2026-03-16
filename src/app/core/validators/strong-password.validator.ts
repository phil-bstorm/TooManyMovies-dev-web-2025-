import { ValidatorFn } from '@angular/forms';

interface StrongPasswordErrors {
  lowercase?: boolean;
  uppercase?: boolean;
  number?: boolean;
  specialChar?: boolean;
  minlength?: boolean;
}

export function strongPasswordValidator(): ValidatorFn {
  return (control) => {
    const value: string = control.value;

    const result: StrongPasswordErrors = {};

    // est-ce qu'il y a une minuscule
    const lowerCaseRegex = /.*[a-z]/;
    if (!lowerCaseRegex.test(value)) {
      result.lowercase = true;
    }

    // est-ce qu'il y a un uppercase
    const upperCaseRegex = /.*[A-Z]/;
    if (!upperCaseRegex.test(value)) {
      result.uppercase = true;
    }

    // est-ce qu'il y a un nombre
    const numberRegex = /.*[0-9]/;
    if (!numberRegex.test(value)) {
      result.number = true;
    }

    // est-ce qu'il y a un char special
    const specialCharRegex = /.*[\W_]/;
    if (!specialCharRegex.test(value)) {
      result.specialChar = true;
    }

    // est-ce qu'il y a min length 8
    if (value.length < 8) {
      result.minlength = true;
    }

    if (Object.keys(result).length) {
      return result;
    }

    return null;
  };
}
