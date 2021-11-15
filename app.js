//task 1

function loadDoc(modalId) {
    const modalwrapper = document.querySelector(modalId);
    const modalcontact = modelWrap.querySelector(modal content);
    const closeButton =modalcontact.querySelector(close);

    modalcontent.addEventListener("click", (e) => {
        e.stopPropagation();
    modalWrapper.style.display = "block";
  }

function getUsers() {
    fetch("http://api.kesho.me/v1/user-test/index")
      .then((response) => response.json())
      .then((data) => {
       var tableBody = document.getElementById("rankings-table");

    tableBody.innerHTML = "";
    console.log(data);

    const fieldsconfig = [
        {name: 'id', rules: [{required: false}]},
        {
          name: 'first_name',
          rules: [
            {required: true, message: 'First name is required.'},
            {maxLength: 10, message: 'სიბოლოების რაოდენობა უნდა იყოს 10 ზე ნაკლები ან ტოლი'},
          ]
        },
        {
          name: 'last_name',
          rules: [
            {required: true, message: 'Last name is required.'},
          ]
        },
        {
          name: 'zip',
          rules: [
            {required: true, message: 'Zip Code name is required.'},
          ]
        },
        {
          name: 'mobile',
          rules: [
            {required:true, message: `Mobile number is required`},
            {mobileNumber: true, message: 'lorem mobile'},
          ]
        },
        {
          name: 'pn',
          rules: [
            {required:true, message: `Personal number is required`},
            {pn: true, message: 'lorem pn'},
          ]
        },
        {
          name: 'email',
          rules: [
            {required: true, message: 'Zip Code name is required.'},
          ]
        },
        {
          name: 'status',
          rules: [
            {required: true, message: 'Zip Code name is required.'},
          ]
        },
        {
          name: 'gender',
          rules: [
            {required: true, message: 'Zip Code name is required.'},
          ]
        }
      ];
    console.log(row);
        var newRow = document.createElement("tr");
        tableBody.appendChild(newRow);

        if (row instanceof Array) {
            row.forEach(function (cell)
        } else {
            newCell = document.createElement("td");
        }

        

    const tableRows = document.querySelectorAll(`tr`)
    const tableArray = Array.from(tableRows)
        tableArray.shift()
        tableArray.forEach((array,index) => {
          const editBtn = document.createElement(`button`)
          const dltBtn = document.createElement(`button`)
          const id = array.className.replace(/\D/g,'');
          editBtn.innerText = `Edit`
          dltBtn.innerText = `Delete`
        }
    async function editUser(userID){
    formManager.resetFields()
        modal(userModalId)
        const user = await getUser(userID)
        formManager.setFields(user)
        }
        async function getUsers(){
        try {
            const response = await fetch('http://api.kesho.me/v1/user-test/index');
            const users = await response.json();
            renderUsers(users);
        } catch (e){
        console.log('Error};
        }
    