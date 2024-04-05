export const formatLocation = (city: string, country: string) =>
  `${city}, ${country}`;

export const formatSalaryRange = (
  salaryMin: string,
  salaryMax: string,
  currency: string
) => `${salaryMin} - ${salaryMax} ${currency}`;
