const root = document.querySelector('.root');

alert("Hai!selamat datang di link isi form saya");

const title = document.createElement('h1');
title.textContent = "Tugas-2 Praktikum Pemrograman Web";

root.appendChild(title);

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const container = document.createElement('div');
container.classList.add('container');

const form = document.createElement('form');

const labelUsername = document.createElement('label');
labelUsername.textContent = "Username";
const inputUsername = document.createElement('input');
inputUsername.type = "text";
inputUsername.placeholder = "Masukkan nama Anda";

const labelNIM = document.createElement('label');
labelNIM.textContent = "NIM";
const inputNIM = document.createElement('input');
inputNIM.type = "text";
inputNIM.placeholder = "Masukkan NIM Anda";

const labelKOM = document.createElement('label');
labelKOM.textContent = "KOM";
const inputKOM = document.createElement('input');
inputKOM.type = "text";
inputKOM.placeholder = "Masukkan KOM Anda";

const labelPhoto = document.createElement('label');
labelPhoto.textContent = "Upload Photo";
const inputPhoto = document.createElement('input');
inputPhoto.type = "file";

const buttonSubmit = document.createElement('button');
buttonSubmit.textContent = "Submit";
buttonSubmit.type = "submit";

form.appendChild(labelUsername);
form.appendChild(inputUsername);
form.appendChild(document.createElement('br'));

form.appendChild(labelNIM);
form.appendChild(inputNIM);
form.appendChild(document.createElement('br'));

form.appendChild(labelKOM);
form.appendChild(inputKOM);
form.appendChild(document.createElement('br'));

form.appendChild(labelPhoto);
form.appendChild(inputPhoto);
form.appendChild(document.createElement('br'));

form.appendChild(buttonSubmit);

const resultDiv = document.createElement('div');
resultDiv.classList.add('result');

container.appendChild(form);

root.appendChild(title);
wrapper.appendChild(container);
root.appendChild(wrapper);
wrapper.appendChild(resultDiv);

form.onsubmit = function(event) {
  event.preventDefault(); 

  const username = inputUsername.value;
  const nim = inputNIM.value;
  const kom = inputKOM.value;
  const photoFile = inputPhoto.files[0];

  resultDiv.innerHTML = '';

  if (photoFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = "Uploaded Photo";

      const userInfo = `
        <p>Username: ${username}</p>
        <p>NIM: ${nim}</p>
        <p>KOM: ${kom}</p>
      `;

      resultDiv.appendChild(img); 
      resultDiv.innerHTML += userInfo; 

      alert("Form berhasil disubmit");
    };
    reader.readAsDataURL(photoFile);
  } else {
    const noPhotoMessage = `
      <p>Username: ${username}</p>
      <p>NIM: ${nim}</p>
      <p>KOM: ${kom}</p>
      <p>Tidak ada foto yang diupload.</p>
    `;
    resultDiv.innerHTML = noPhotoMessage; 
  }

  resultDiv.classList.add('show');
  container.classList.add('small');

  form.reset();
};
