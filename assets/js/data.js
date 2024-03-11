
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

// console.log(userDataArr);

displayUserData()

const idCardEl=document.getElementById('id-card');
const cardDisplayEl=document.getElementById('cardDisplay')
tableEl.addEventListener('click',(event)=>{
    
    if(event.target.textContent==='ID'){
        idCardEl.innerHTML='';
        cardDisplayEl.classList.toggle('hidden')
        const parentEl=event.target.parentNode.parentNode;
        // console.log(event.target.parentNode.parentNode);
    const divEl=document.createElement('div');
    divEl.className="bg-darkBlue rounded-xl h-56 flex items-center justify-center"
    const imgEl=document.createElement('img');
    imgEl.src=`https://ui-avatars.com/api/?name=${parentEl.children[1].textContent}&background=random&color=fff`
    imgEl.classList.add('rounded-full','w-28','h-28','p-0.5');
    divEl.append(imgEl);
    console.log(divEl);
    const div1El=document.createElement('div');
    div1El.className="h-60 flex flex-col p-10 space-y-3";
    const detailsArr=[parentEl.children[1].textContent,parentEl.children[3].textContent,parentEl.children[4].children[0].textContent,parentEl.children[4].children[1].textContent]
    // console.log(detailsArr);
    const detailsHeadingsArr=['Name : ','Dept : ','Contact : ','Email : ']
    detailsArr.forEach((val,index)=>{
        const spanEl=document.createElement('span');
        spanEl.className="text-darkBlue font-semibold"
        spanEl.textContent=detailsHeadingsArr[index]
        const span1El=document.createElement('span');
        span1El.className="text-midBlue"
        span1El.textContent=val;
        spanEl.appendChild(span1El);
        div1El.append(spanEl);
        // console.log(spanEl);
    })
    idCardEl.append(divEl,div1El);
    console.log(idCardEl);
};
})



{/* <div class="max-w-xs rounded-xl bg-white mx-auto">
<div class="bg-darkBlue rounded-xl h-56 flex items-center justify-center">
  <img src="https://ui-avatars.com/api/?name=Monish&background=random&color=fff"
  alt="Vignesh" class="rounded-full w-28 p-0.5">
</div>
<div class="h-60 flex flex-col p-10 space-y-3">
  <span class="text-darkBlue font-semibold"> Name : <span class="text-midBlue">Monish G</span></span>
  <span class="text-darkBlue font-semibold"> Dept : <span class="text-midBlue">CSE</span></span>
  <span class="text-darkBlue font-semibold"> Contact : <span class="text-midBlue">656456546</span></span>
  <span class="text-darkBlue font-semibold"> Email : <span class="text-midBlue">you@gmail.com</span></span>
</div>
</div> */}