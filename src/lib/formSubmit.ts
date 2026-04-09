const FORM_RECIPIENT_EMAIL = 'info@raasengineers.com';
const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORM_RECIPIENT_EMAIL}`;

type ContactFormValues = Record<string, string>;

const toTitleCase = (value: string) =>
  value
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

export async function submitLeadForm(formType: string, values: ContactFormValues) {
  const payload = Object.entries(values).reduce<Record<string, string>>((accumulator, [key, value]) => {
    accumulator[toTitleCase(key)] = value;
    return accumulator;
  }, {});

  const formData = new URLSearchParams({
    ...payload,
    _subject: `${formType} - RAAS Engineers Website`,
    _template: 'table',
    _captcha: 'false',
  });

  const response = await fetch(FORM_SUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: formData.toString(),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMessage =
      result && typeof result.message === 'string'
        ? result.message
        : 'The form could not be submitted right now.';

    throw new Error(errorMessage);
  }

  return result;
}

export { FORM_RECIPIENT_EMAIL };
