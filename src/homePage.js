export default buildHomepage;


function buildHomepage() {
  const content = document.querySelector('#content');
  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('name');
  restaurantName.textContent = "Mota Halwai's Veg Embrace";

  const philosophy = document.createElement('div');
  philosophy.classList.add('philosophy');
  
  const philosophyHeading = document.createElement('h2');
  philosophyHeading.textContent = "Our Philosophy of Green Dining";

  const philosophyMain = document.createElement('p');
  philosophyMain.textContent = "At Mota Halwai, we believe that food tastes better when enjoyed in harmony with nature. Our space is designed to bring you closer to the calm and beauty of the outdoors, with lush plants, flowing ventilation, and an ambiance of tranquility.";

  philosophy.append(philosophyHeading, philosophyMain);

  const testimonials = document.createElement('div');
  testimonials.classList.add('testimonials');
  const testimonialsHeading = document.createElement('h2');
  testimonialsHeading.textContent = 'Testimonials';

  const testimonial1 = document.createElement('em');
  testimonial1.textContent = "'It feels like dining in a magical greenhouse.'";
  const testimonialBreak = document.createElement('br');
  const testimonial2 = document.createElement('em');
  testimonial2.textContent = "'The perfect spot to unwind with delicious food.'";

  testimonials.append(testimonialsHeading, testimonial1, testimonialBreak, testimonial2);

  content.replaceChildren(restaurantName, philosophy, testimonials);
}


