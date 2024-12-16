export default buildAboutpage;

function buildAboutpage() {
  const content = document.querySelector('#content');
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('aboutPage');

  const restaurantName = document.createElement('h2');
  restaurantName.textContent = "Mota Halwai da Veg Dhaba";

  const addressDiv = document.createElement('div');
  const addressInfo = document.createElement('h4');
  addressInfo.textContent = "Main Location:"
  const locality = document.createElement('p');
  locality.textContent = "Falana Gali, Dhimkana Nagar";
  const address = document.createElement('p');
  address.textContent = "Hara-bhara Jungle, Bihar";
  const pincode = document.createElement('p');
  pincode.textContent = "PIN Code: 887766";

  addressDiv.append(addressInfo, locality, pincode, address);

  const contactDiv = document.createElement('div');
  const contactInfo = document.createElement('h4');
  contactInfo.textContent = "Contact Information:";
  const contactPhone = document.createElement('p');
  contactPhone.textContent = "(+91) 1234567890";
  const contactEmail = document.createElement('p');
  contactEmail.textContent = "reservations@motahalwai.com";

  contactDiv.append(contactInfo, contactPhone, contactEmail);

  const timingsDiv = document.createElement('div');
  const timingsInfo = document.createElement('h4');
  timingsInfo.textContent = "Restaurant Hours:";
  const timingsWorkdays = document.createElement('p');
  timingsWorkdays.textContent = "Monday-Friday: 8AM - 8PM";
  const timingsWeekends = document.createElement('p');
  timingsWeekends.textContent = "Saturday-Sunday: 10AM - 10PM";

  timingsDiv.append(timingsInfo, timingsWorkdays, timingsWeekends);

  mainDiv.append(restaurantName, addressDiv, contactDiv, timingsDiv)
  content.replaceChildren(mainDiv);
}