const global = {
  currentPage: window.location.pathname,
  params: new URLSearchParams(window.location.search)
};

const toggleSpinner = () => {
  const spinnerElement = document.querySelector('.spinner');
  spinnerElement.classList.toggle('show');
};

const highlightActivePageLink = (currentPage) => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
};

const fetchTMDBAPI = async (endpoint, params = '') => {
  const apiToken = import.meta.env.VITE_MOVIE_API_TOKEN;
  const apiBaseURL = 'https://api.themoviedb.org/3/';
  try {
    toggleSpinner();
    const response = await fetch(`${apiBaseURL}${endpoint}?language=en-US${params}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`
      }
    });
    if (!response.ok) {
      console.log('Failed to fetch TMDB API:', response.status);
    }
    return await response.json();
  } catch (error) {
    console.log('Error performing TMDB API fetch:', error);
    return null;
  } finally {
    toggleSpinner();
  }
};

const displayNowPlayingMovies = async () => {
  const {results} = await fetchTMDBAPI('movie/now_playing');
  const sliderParent = document.querySelector('.swiper-wrapper');

  results.forEach((movie) => {
    const movieImageSrc = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'images/no-image.jpg';
    const sliderElement = document.createElement('div');
    sliderElement.classList.add('swiper-slide');
    sliderElement.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
        <img src="${movieImageSrc}" alt="${movie.title}" />
      </a>
      <h4 class="swiper-rating">
        <i class="fas fa-star text-secondary"></i> ${movie.vote_average.toFixed(1)} / 10
      </h4>
    `;
    sliderParent.appendChild(sliderElement);
  });

  initSwiper();
};

const initSwiper = () => {
  const swiper = new Swiper('.swiper', { //NOSONAR
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });
};

const showAlert = (message, className) => {
  const alertElement = document.createElement('div');
  alertElement.classList.add('alert', className);
  alertElement.appendChild(document.createTextNode(message));
  document.getElementById('alert').appendChild(alertElement);
  setTimeout(() => alertElement.remove(), 3000);
};

const displayBackgroundImage = (targetId, backdrop_path) => {
  const backdropElement = document.createElement('div');
  backdropElement.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backdrop_path})`;
  backdropElement.style.backgroundSize = 'cover';
  backdropElement.style.backgroundPosition = 'center';
  backdropElement.style.backgroundRepeat = 'no-repeat';
  backdropElement.style.height = '100vh';
  backdropElement.style.width = '100vw';
  backdropElement.style.position = 'absolute';
  backdropElement.style.top = '0';
  backdropElement.style.left = '0';
  backdropElement.style.zIndex = '-1';
  backdropElement.style.opacity = '0.1';
  const targetElement = document.getElementById(targetId);
  targetElement.appendChild(backdropElement);
};

const displayPopularMovies = async () => {
  const movies = await fetchTMDBAPI('movie/popular');
  movies.results.forEach(movie => {
    const movieImageSrc = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'images/no-image.jpg';
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
        <img
          alt="${movie.title}"
          class="card-img-top"
          src="${movieImageSrc}"
        />
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${movie.release_date}</small>
        </p>
      </div>
    `;
    document.getElementById('popular-movies').appendChild(cardElement);
  });
};

const displayPopularShows = async () => {
  const shows = await fetchTMDBAPI('tv/popular');
  shows.results.forEach(show => {
    const showImageSrc = show.poster_path
      ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
      : 'images/no-image.jpg';
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
      <a href="tv-details.html?id=${show.id}">
        <img
          alt="${show.name}"
          class="card-img-top"
          src="${showImageSrc}"
        />
      </a>
      <div class="card-body">
        <h5 class="card-title">${show.name}</h5>
        <p class="card-text">
          <small class="text-muted">Aired: ${show.first_air_date}</small>
        </p>
      </div>
    `;
    document.getElementById('popular-shows').appendChild(cardElement);
  });
};

const displayMovieDetails = async (id) => {
  const movie = await fetchTMDBAPI(`movie/${id}`);
  if (movie === null) {
    return;
  }
  const targetId = 'movie-details';
  const movieTopElement = document.createElement('div');
  movieTopElement.classList.add('details-top');
  const movieBottomElement = document.createElement('div');
  movieBottomElement.classList.add('details-bottom');
  const movieImageSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'images/no-image.jpg';
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  displayBackgroundImage(targetId, movie.backdrop_path);
  movieTopElement.innerHTML = `
    <div>
      <img
        src="${movieImageSrc}"
        class="card-img-top"
        alt="${movie.title}"
      />
    </div>
    <div>
      <h2>${movie.title}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${movie.vote_average.toFixed(1)} / 10
      </p>
      <p class="text-muted">Release Date: ${movie.release_date}</p>
      <p>${movie.overview}</p>
      <h5>Genres</h5>
      <ul class="list-group">
        ${movie.genres.map(genre => `<li>${genre.name}</li>`).join('')}
      </ul>
      <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
    </div>
  `;
  movieBottomElement.innerHTML = `
    <h2>Movie Info</h2>
    <ul>
      <li><span class="text-secondary">Budget:</span> ${currencyFormatter.format(movie.budget)}</li>
      <li><span class="text-secondary">Revenue:</span> ${currencyFormatter.format(movie.revenue)}</li>
      <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
      <li><span class="text-secondary">Status:</span> ${movie.status}</li>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">
      ${movie.production_companies.map(company => `${company.name}`).join(', ')}
    </div>
  `;

  document.getElementById(targetId).appendChild(movieTopElement);
  document.getElementById(targetId).appendChild(movieBottomElement);
};

const displayShowDetails = async (id) => {
  const show = await fetchTMDBAPI(`tv/${id}`);
  if (show === null) {
    return;
  }
  const targetId = 'show-details';
  const showTopElement = document.createElement('div');
  showTopElement.classList.add('details-top');
  const showBottomElement = document.createElement('div');
  showBottomElement.classList.add('details-bottom');
  const showImageSrc = show.poster_path
    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
    : 'images/no-image.jpg';

  displayBackgroundImage(targetId, show.backdrop_path);
  showTopElement.innerHTML = `
    <div>
      <img
        src="${showImageSrc}"
        class="card-img-top"
        alt="${show.name}"
      />
    </div>
    <div>
      <h2>${show.name}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${show.vote_average.toFixed(1)} / 10
      </p>
      <p class="text-muted">Aired: ${show.first_air_date}</p>
      <p>${show.overview}</p>
      <h5>Genres</h5>
      <ul class="list-group">
        ${show.genres.map(genre => `<li>${genre.name}</li>`).join('')}
      </ul>
      <a href="${show.homepage}" target="_blank" class="btn">Visit Show Homepage</a>
    </div>
  `;
  showBottomElement.innerHTML = `
    <h2>Show Info</h2>
    <ul>
      <li><span class="text-secondary">Number Of Episodes:</span> ${show.number_of_episodes}</li>
      <li>
        <span class="text-secondary">Last Episode To Air:</span> ${show.last_episode_to_air.name}</li>
      <li><span class="text-secondary">Status:</span> ${show.status}</li>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">${show.production_companies.map(company => `${company.name}`).join(', ')}</div>
  `;

  document.getElementById(targetId).appendChild(showTopElement);
  document.getElementById(targetId).appendChild(showBottomElement);
};

const displaySearchResults = async (type, search, page) => {
  if (search === '' || search === null) {
    showAlert('Please enter search term', 'alert-error');
    return;
  }
  const pageToGet = parseInt(page, 10) || 1;
  const queryResult = await fetchTMDBAPI(`search/${type}`, `&query=${search}&page=${pageToGet}`);

  if (queryResult.results.length === 0) {
    showAlert('No results found', 'alert-success');
    return;
  }

  const resultsHeader = document.getElementById('search-results-heading');
  resultsHeader.innerHTML = `<h2>${queryResult.results.length} of ${queryResult.total_results} results for ${search}</h2>`;

  const searchResultContainer = document.getElementById('search-results');
  queryResult.results.forEach((result) => {
    const resultData = {
      title: '',
      date: '',
      image: result.poster_path
        ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
        : 'images/no-image.jpg',
      details: ''
    };
    switch (type) {
      case 'movie':
        resultData.title = result.title;
        resultData.date = `Release: ${result.release_date}`;
        resultData.details = `movie-details.html?id=${result.id}`;
        break;
      case 'tv':
        resultData.title = result.name;
        resultData.date = `First Air: ${result.first_air_date}`;
        resultData.details = `tv-details.html?id=${result.id}`;
        break;
    }

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
      <a href="${resultData.details}">
        <img src="${resultData.image}" class="card-img-top" alt="${resultData.title}"/>
      </a>
      <div class="card-body">
        <h5 class="card-title">${resultData.title}</h5>
        <p class="card-text">
          <small class="text-muted">${resultData.date}</small>
        </p>
      </div>
    `;
    searchResultContainer.appendChild(cardElement);
  });

  const pageNumElement = document.createElement('div');
  pageNumElement.classList.add('pagination');
  pageNumElement.innerHTML = `
    <button class="btn btn-primary" id="prev">Prev</button>
    <button class="btn btn-primary" id="next">Next</button>
    <div class="page-counter">Page ${queryResult.page} of ${queryResult.total_pages}</div>
  `;
  document.getElementById('pagination').appendChild(pageNumElement);
  if (queryResult.page === 1) {
    document.getElementById('prev').disabled = true;
  } else {
    document.getElementById('prev').addEventListener('click', function () {
      window.location.href = `/search.html?type=${type}&search-term=${encodeURIComponent(search)}&page=${(pageToGet - 1)}`;
    });
  }
  if (queryResult.page === queryResult.total_pages) {
    document.getElementById('next').disabled = true;
  } else {
    document.getElementById('next').addEventListener('click', function () {
      window.location.href = `/search.html?type=${type}&search-term=${encodeURIComponent(search)}&page=${(pageToGet + 1)}`;
    });
  }
};

const init = () => {
  console.log(global.currentPage);
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      highlightActivePageLink('/');
      displayNowPlayingMovies();
      displayPopularMovies();
      break;
    case '/search.html':
      displaySearchResults(global.params.get('type'), global.params.get('search-term'), global.params.get('page'));
      break;
    case '/movie-details.html':
      displayMovieDetails(global.params.get('id'));
      break;
    case '/shows.html':
      highlightActivePageLink(global.currentPage);
      displayPopularShows();
      break;
    case '/tv-details.html':
      displayShowDetails(global.params.get('id'));
      break;
  }
};

document.addEventListener('DOMContentLoaded', init);