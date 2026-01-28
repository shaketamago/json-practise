document.addEventListener('DOMContentLoaded', function () {
  fetch('data/product.json')
    .then(response => response.json())
    .then(products => {
        const productTable = document.getElementById('productTable');

        products.forEach(product => {
            const tr = document.createElement('tr');

            const tdId = document.createElement('td');
            tdId.textContent = product.id;

            const tdName = document.createElement('td');
            tdName.textContent = product.name;

            const tdPrice = document.createElement('td');
            tdPrice.textContent = product.price;

            const tdDescription = document.createElement('td');
            tdDescription.textContent = product.description;
            
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdDescription);
            
            productTable.appendChild(tr);
      });
    })
    .catch(error => console.error('エラー:', error));
});