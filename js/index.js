const loadPhones = async () => {
    const URL = ` https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(URL);
    const data = await res.json();
    showPhones(data.data);
}

const showPhones = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
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
            <button class="btn btn-primary">Watch</button>
           </div>
          </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
}

loadPhones();