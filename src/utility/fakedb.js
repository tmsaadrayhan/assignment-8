import toast from "react-hot-toast";

// use local storage to manage cart data
var removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}
const addToDb = job => {
    let applications = getsApplications();
    if(applications.find(jb=>jb.id === job.id)) {
        toast("You have already applied for this job.");
    }
    else {
        applications.push(job);
    }
    localStorage.setItem('jobs-selected', JSON.stringify(applications));
}

const removeFromDb = job => {
    let applications = getsApplications();
    applications.filter(jb => jb.id !== job.id)
    removeByAttr(applications, 'id', job.id);
    localStorage.setItem('jobs-selected', JSON.stringify(applications));

}

const getsApplications = () => {
    let applications = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('jobs-selected');
    if (storedCart) {
        applications = JSON.parse(storedCart);
    }
    return applications;
}
const deleteApplications = () => {
    localStorage.removeItem('jobs-selected');
}


export {
    addToDb,
    removeFromDb,
    getsApplications,
    deleteApplications,
}