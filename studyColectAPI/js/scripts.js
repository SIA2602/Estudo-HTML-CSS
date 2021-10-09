var requestURL = 'https://vutsqsicch.execute-api.sa-east-1.amazonaws.com/aplha/getobject';
var proxy = 'https://cors-anywhere.herokuapp.com/'
var param = {
    'object_name': 'Apartamento_02.glb'
}  

const fetchUsers = () => {    
    axios.post(proxy+requestURL, param,  { crossdomain: true }).then(response => console.log(response.data)) 
};

fetchUsers();