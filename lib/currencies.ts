export const Currencies = [
    {
      value: "USD",
      label: "$ Dollar",
      locale: "en-US",
    },
    {
      value: "EUR",
      label: "€ Euro",
      locale: "de-DE",
    },
    {
        value: "RON",
        label: "lei Romanian Leu",
        locale: "ro-RO",
      },
    {
      value: "GBP",
      label: "£ Pound Sterling",
      locale: "en-GB",
    },
    {
      value: "JPY",
      label: "¥ Japanese Yen",
      locale: "ja-JP",
    },
    {
      value: "AUD",
      label: "A$ Australian Dollar",
      locale: "en-AU",
    },
    {
      value: "CAD",
      label: "C$ Canadian Dollar",
      locale: "en-CA",
    },
    {
      value: "CHF",
      label: "CHF Swiss Franc",
      locale: "fr-CH",
    },
  ];

  export type Currency = (typeof Currencies)[0];
  