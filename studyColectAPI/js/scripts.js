var requestURL = 'https://vutsqsicch.execute-api.sa-east-1.amazonaws.com/aplha/getobject';
var param = {
    'object_name': 'Apartamento_02'
}     

function returnLink(fileFormat){
    object_name = param.object_name + fileFormat
    param.object_name = object_name
    axios.post(requestURL, param).then(response => document.write(response.data))
}