const loadPhones = async () => {
    const URL = ` https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(URL);
    const data = await res.json();
    showPhones(data.data);
}

const showPhones = (phones) => {
    console.log(phones);
    phones.forEach(phone => {
        console.log(phone.phone_name);
    })
}

loadPhones();