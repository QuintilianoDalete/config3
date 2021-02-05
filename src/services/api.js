const getFunds = async () => {
  const funds = await fetch('https://www.btgpactual.com/api/funds-public/public/WM');
  const data = await funds.json();
  return data;
};

export default getFunds;
