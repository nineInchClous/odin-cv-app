/**
 * Validate an input element. If it's invalid, display an error message
 * @param {HTMLElement} pInput The input element to validate
 * @returns True if the input is valid, otherwise false
 */
export function validateInput(pInput) {
  const errorSpan = pInput.nextElementSibling;
  errorSpan.classList.remove('show-form-error');
  errorSpan.textContent = '';

  pInput.classList.remove('invalid-input');
  let inputName = pInput.name;
  if (pInput.hasAttribute('data-name')) {
    inputName = pInput.getAttribute('data-name');
  }

  if (pInput.validity.patternMismatch || pInput.validity.typeMismatch) {
    errorSpan.textContent += `You need to enter a valid ${inputName}. `;
  }
  if (pInput.validity.tooLong) {
    errorSpan.textContent += `${inputName} is too long. It should be under ${pInput.maxLength} characters. You entered ${pInput.value.length}. `;
  }
  if (pInput.validity.tooShort) {
    errorSpan.textContent += `${inputName} is too short. It should be at least ${pInput.minLength} characters. You entered ${pInput.value.length}. `;
  }
  if (pInput.validity.rangeOverflow) {
    errorSpan.textContent += `${inputName} value is too high. It should be under ${pInput.max}. `;
  }
  if (pInput.validity.rangeUnderflow) {
    errorSpan.textContent += `${inputName} value is too low. It should be at least ${pInput.min}. `;
  }
  if (pInput.validity.valueMissing) {
    errorSpan.textContent += `${inputName} is required. `;
  }

  if (errorSpan.textContent.length > 0) {
    errorSpan.classList.add('show-form-error');
    pInput.classList.add('invalid-input');
    return false;
  }

  return true;
}

/**
 * Validate a form
 * @param {Event} e The submit form event
 * @returns True if the form is valid, otherwise false
 */
export function validateForm(e) {
  e.preventDefault();

  const inputs = e.target.querySelectorAll('input, select, textarea');
  let validForm = true;

  Object.values(inputs).forEach((input) => {
    if (!validateInput(input)) {
      validForm = false;
    }
  });

  return validForm;
}
