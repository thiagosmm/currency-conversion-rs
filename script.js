const USD = 5.84;
const EUR = 6.07;
const GBP = 7.27;

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

amount.addEventListener("input", (event) => {
  const hasCharRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharRegex, "");
})

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");  
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }

  // footer.span.textContent = "oioioi"

}


function convertCurrency(amount, price, symbol) {

  total = amount * price;
  description.textContent = `${symbol}1 = R$${price.toLocaleString("pt-BR")}`;
  result.textContent = symbol + " " + total.toLocaleString("pt-BR", {minimumFractionDigits: 2});
  footer.classList.add("show-result");
}