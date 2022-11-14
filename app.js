let thead = document.querySelector('thead')
let tbody = document.querySelector('tbody')

axios.get("https://northwind.vercel.app/api/customers/")
  .then((data) => {

    for (let i = 0; i < data.data.length; i++) {
              console.log(data.data[i]);
              tbody.innerHTML += `<tr>
                                      <td>${data.data[i].contactTitle}</td>
                                      <td>${data.data[i].address.street}</td>
                                      <td>${data.data[i].companyName}</td>
                                      <td>${data.data[i].address.country}</td>
                                      <td>${data.data[i].id}</td>
                                  </tr>`;
            }
  });