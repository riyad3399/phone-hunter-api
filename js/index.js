const loadPhones = async (searchValue, dataLimit) => {
    const URL = ` https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    const res = await fetch(URL);
    const data = await res.json();
    showPhones(data.data, dataLimit);
}

const showPhones = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    // show only 10 phones
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('hidden');
    }
    else {
        showAll.classList.add('hidden');
    }

    
    // show no phone found
    const noPhoneFound = document.getElementById('no-found-message');
    if (phones.length === 0) {
        noPhoneFound.classList.remove('hidden');
    }
    else {
        noPhoneFound.classList.add('hidden');
    }
    // show all phone
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('card');
        phoneDiv.innerHTML = `
        <div class="card card-side bg-base-100 shadow-2xl w-full h-64">
           <figure><img src="${phone.image}" alt="Movie"/></figure>
          <div class="card-body">
           <h2 class="card-title font-bold">${phone.phone_name}</h2>
           <p>${phone.slug}</p>
           <div class="card-actions justify-end">
           <button class="btn btn-outline btn-primary">Watch</button>
           </div>
          </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
    // stop loader
    togglesPiner(false);
}

// callback function 
const processSearch = (dataLimit) => {
    togglesPiner(true);
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = '';
    loadPhones(searchValue, dataLimit);
}

document.getElementById('search-btn').addEventListener('click', function () {
    // start loader
    processSearch(10);
});

const togglesPiner = isLoading => {
    const loaderSpiner = document.getElementById('loader');
    if (isLoading) {
        loaderSpiner.classList.remove('hidden');
    }
    else {
        loaderSpiner.classList.add('hidden');
    }
}

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})

// loadPhones();