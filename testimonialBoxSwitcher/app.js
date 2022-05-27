const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'jess kar',
    position: 'Marketing',
    photo: ' https://randomuser.me/api/portraits/women/36.jpg',
    text: 'Lorem, ipsum dolor sit a m dignissimos assumenda harum pariatur exercitationem perferendis quis aut enim provident esse, sit quibusdam eveniet expedita, cupiditate perspiciatis necessitatibus eaque! Sapiente, reprehenderit iste consectetur facilis recusandae, iure ipsa veritatis tempora, voluptatem exceptu nostrum.',
  },
  {
    name: 'peter doe',
    position: 'developer',
    photo: ' https://randomuser.me/api/portraits/men/46.jpg',
    text: 'Lorem,  Repudiandae itaque possimus alias dolores iste vitae sit voluptas perferendis consequatur ratione? Ducimus nam tempora laborum error labore voluptas dignissimos assumenda harum pariatur exercitationem perferendis quis aut enim provident esse, sit quibusdam eveniet expedita, cupiditate perspiciatis necessitatibus eaque! Sapiente, reprehenderit iste consectetur facilis recusandae, iure ipsa veritatis tempora, voluptatem excepturi nostrum.',
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
