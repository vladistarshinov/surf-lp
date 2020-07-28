
const blog = () => {

  const btnToBlog = document.querySelectorAll('.btn-to-blog'),
        btnFromBlog = document.querySelector('.btn-from-blog'),
        btnFromDescription = document.querySelector('.btn-from-description'),
        header = document.querySelector('.header'),
        surf = document.querySelector('.surf'),
        travel = document.querySelector('.travel'),
        sleep = document.querySelector('.sleep'), 
        shop = document.querySelector('.shop'),
        footer = document.querySelector('.footer'),
        cardsBlog = document.querySelector('.cards-blog'),
        blog = document.querySelector('.blog'),
        beach = document.querySelector('.beach'),
        cardsBeach = document.querySelector('.cards-beach'),
        cardsImg = document.querySelector('.cards-img'),
        cardDescription = document.querySelector('.card-description'),
        beachTitle = document.querySelector('.beach-title'),
        ratingStar = document.querySelector('.rating'),
        priceFrom = document.querySelector('.price'),
        category = document.querySelector('.category');


        const getData = async (url) => {
    
          const response = await fetch(url);
      
          if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, 
                            статус ошибки ${response.status}!`)
          }
      
          return await response.json();
        };
      
        const createCardRestaurant = features => {

          const { 
                  image, 
                  name, 
                  price, 
                  products, 
                  city,
                  country,
                  description,
                  rating
                } = features;
        
          const card = document.createElement('a');
          card.classList = 'card card-blog';
          card.products = products;  
          card.beach = [name, rating, description, city, country, image];   
        
          card.insertAdjacentHTML('beforeend', `
              <img src="${image}" alt="image" class="card-image dark-bg"/>
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">${name}</h3>
                  <span class="card-tag tag">From ${price} $</span>
                </div>
                <div class="card-info">
                  <div class="category">${city} | ${country}</div>
                  <div class="rating">${rating}</div>
                </div>
              </div>
          `);
        
          cardsBlog.insertAdjacentElement('beforeend', card);
        };
      
        
        const openGoods = event => {
            const target = event.target;
        
            const click = target.closest('.card-blog');
        
            if (click) {
        
                  const [ name, rating, description, city, country, image ] = click.beach;
        
                  cardsBeach.textContent = '';
                  blog.classList.add('hide'); 
                  beach.classList.remove('hide');
                  btnFromBlog.classList.add('hide');
                  btnFromDescription.classList.remove('hide');
        
                  beachTitle.textContent = name;
                  ratingStar.textContent = rating;
                  //priceFrom.textContent = `From ${price} $`;
                  category.textContent = `${city} | ${country}`;
                  cardsImg.src = image;
                  cardDescription.textContent = description;

            }
        };
        
        btnToBlog.forEach(item => {
          item.addEventListener('click', e => {
            if (e.target) {
                e.preventDefault();
            }  

            blog.classList.remove('hide');
            btnFromBlog.classList.remove('hide');
            header.classList.add('hide');
            surf.classList.add('hide'); 
            travel.classList.add('hide');
            sleep.classList.add('hide');
            shop.classList.add('hide'); 
            footer.classList.add('hide');              
          });  
        });
    
        btnFromBlog.addEventListener('click', () => {
            blog.classList.add('hide'); 
            header.classList.remove('hide');
            surf.classList.remove('hide'); 
            travel.classList.remove('hide');
            sleep.classList.remove('hide');
            shop.classList.remove('hide');  
            footer.classList.remove('hide'); 
            btnFromBlog.classList.add('hide');
        }); 

        btnFromDescription.addEventListener('click', () => {
            blog.classList.remove('hide'); 
            beach.classList.add('hide');
            btnFromBlog.classList.remove('hide');
            btnFromDescription.classList.add('hide');
        }); 
    
        
        function init() {
          
            getData('../../assets/db/blog.json').then(data => {
              data.forEach(createCardRestaurant)
            });
        
            cardsBlog.addEventListener('click', openGoods);
        
        }
        
        init();
}

export default blog;

