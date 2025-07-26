function addItem() {
  const tbody = document.getElementById('items');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><input type="text" class="desc"/></td>
    <td><input type="number" class="qty" value="1"/></td>
    <td><input type="number" class="price" value="0.00"/></td>
    <td><button onclick="removeItem(this)">X</button></td>
  `;
  tbody.appendChild(row);
  updateTotal();
}

function removeItem(btn) {
  btn.closest('tr').remove();
  updateTotal();
}

function updateTotal() {
  const qtys = document.querySelectorAll('.qty');
  const prices = document.querySelectorAll('.price');
  let total = 0;
  qtys.forEach((qty, i) => {
    total += qty.value * prices[i].value;
  });
  document.getElementById('total').textContent = total.toFixed(2);
}

document.addEventListener('input', updateTotal);

function generatePDF() {
  const invoice = document.querySelector('.container');
  html2pdf().from(invoice).save('invoice.pdf');
}
