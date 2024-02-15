const formEl=document.querySelector('form');
// console.log(formEl);
const localStorageKey='user';

const setandGetData=(e)=>{
    e.preventDefault();
    const formData=new FormData(formEl);
    const userData=Object.fromEntries(formData);
    const existingUserArr=JSON.parse(localStorage.getItem(localStorageKey));
    if(existingUserArr){
    existingUserArr.push(userData)
    localStorage.setItem(localStorageKey,JSON.stringify(existingUserArr))
    // console.log(existingUserArr);
    } else{
      const newArr=[];
      newArr.push(userData);
      localStorage.setItem(localStorageKey,JSON.stringify(newArr))
    }
    
}


formEl.addEventListener('submit',setandGetData)

