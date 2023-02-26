const loadPhones = async (searchValue) => {
    const URL = ` https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    const res = await fetch(URL);
    const data = await res.json();
    showPhones(data.data);
}

const showPhones = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    // show only 10 phones
    phones = phones.slice(0, 10);
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
        console.log(phone.slug);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('card');
        phoneDiv.innerHTML = `
        <div class="card card-side bg-base-100 shadow-2xl w-full h-64">
           <figure><img src="${phone.image}" alt="Movie"/></figure>
          <div class="card-body">
           <h2 class="card-title font-bold">${phone.phone_name}</h2>
           <p>${phone.slug}</p>
           <div class="card-actions justify-end">
            <button class="btn btn-primary hover:bg-green-800">Watch</button>
           </div>
          </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    loadPhones(searchValue);

});

// loadPhones();