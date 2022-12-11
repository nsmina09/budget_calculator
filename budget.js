//to set the user in head section balance in input filed
currentUser=localStorage.getItem('currentusername');
console.log(currentUser);
currentUserDetails=JSON.parse(localStorage.getItem(currentUser));
console.log(currentUserDetails);
currentBalance=currentUserDetails.currentBalance;
currentUserFullName=currentUserDetails.fullname;
user.innerHTML=`Hai ${currentUserFullName}`

//set balance in the table when the page loads
  balance = currentBalance;
  console.log(balance);
  let today = new Date().toLocaleDateString();
  result.innerHTML = `
<tr>
  <td class="border border-success border-1">${today}</td>
  <td class="border border-success border-1">Balance</td>
  <td class="border border-success border-1"></td>
  <td class="border border-success border-1">${balance}</td>
  </tr>`;
  localStorage.setItem('balance', balance);



//for more options in modal
function myFunction() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "Show Less";
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Show More";
    moreText.style.display = "none";
  }
}

//transaction function
function addTransaction() {
  let form = document.getElementById("typeOfTransaction");
  let type= (form.elements["typeOfTransaction"].value);
  transactionDetails = {
    type: type,
    category: category.value,
    amount: amount.value,
    date: date.value,
    note: note.value,
  }

  localStorage.setItem(category.value, JSON.stringify(transactionDetails));
  currentData = JSON.parse(localStorage.getItem(category.value));

  function calculateBalance(amount) {
    let type = currentData.type;
    let balance = Number(localStorage.getItem('balance'));
    
    if (balance == null) {
      alert('add balance details')
    } else if (type == 'credit') {
     return balance =eval(balance+ Number(amount));
    } else if (type == 'debit') {
    return  balance =eval(balance- Number(amount));
    } 
  }
bal=calculateBalance(currentData.amount);
localStorage.setItem('balance',bal);
htmlData = `
  <tr id="each" >
  <td class="border border-success border-1">${currentData.date??'no item'}</td>
  <td class="border border-success border-1">${currentData.category??'no item'}</td>
  <td class="border border-success border-1">${currentData.amount??'no item'}</td>
  <td class="border border-success border-1">${bal}</td>
  </tr>
  `;
result.innerHTML += htmlData;

  
}


function logout() {
  localStorage.clear();
  window.location = 'index.html'
}
