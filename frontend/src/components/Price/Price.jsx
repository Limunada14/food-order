function Price({ price, locale, currency }) {
  function formatPrice() {
    const intlPrice = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(price);

    return intlPrice;
  }
  return <span>{formatPrice()}</span>;
}
export default Price;
