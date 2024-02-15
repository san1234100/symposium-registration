
const tableEl=document.querySelector('table tbody')
const localStorageKey='user';
const userDataArr=JSON.parse(localStorage.getItem(localStorageKey))

function displayUserData(){
   const documentFragment= document.createDocumentFragment();
    userDataArr.forEach((val,index) => {
        
        const trEl=document.createElement('tr');
        const snoEl=document.createElement('td');
        snoEl.textContent= index+1;
        snoEl.classList.add('p-2', 'border-2')
        
        const nameEl=document.createElement('td');
        nameEl.textContent= val.firstname+' '+val.lastname;
        nameEl.classList.add('p-2', 'border-2')
        
        const genderEl=document.createElement('td');
        genderEl.textContent= val.gender;
        genderEl.classList.add('p-2', 'border-2')
        
        const deptEl=document.createElement('td');
        deptEl.textContent= val.dept;
        deptEl.classList.add('p-2', 'border-2')
        
        const contactEl=document.createElement('td');
        contactEl.classList.add('p-2', 'border-2')
        const divEl=document.createElement('div');
        const phNumberEl=document.createElement('a');
        phNumberEl.textContent=val.phNumber;
        phNumberEl.href=`tel:${val.phNumber}`;
        divEl.appendChild(phNumberEl)
        const mailEl=document.createElement('a');
        mailEl.textContent=val.email;
        mailEl.href=`mailto:${val.email}`;
        contactEl.append(divEl,mailEl);
        
        
        const collegeEl=document.createElement('td');
        collegeEl.textContent= val.collegename;
        collegeEl.classList.add('p-2', 'border-2')
        
        const idEl=document.createElement('td');
        idEl.classList.add('text-center','p-2', 'border-2')
        const btnEl=document.createElement('button');
        btnEl.textContent='ID';
        btnEl.classList.add('bg-darkBlue', 'text-white', 'px-4', 'py-2','rounded')
        idEl.appendChild(btnEl)
        trEl.append(snoEl,nameEl,genderEl,deptEl,contactEl,collegeEl,idEl)
        documentFragment.append(trEl);
    });
    tableEl.append(documentFragment);
}

console.log(userDataArr);

displayUserData()

