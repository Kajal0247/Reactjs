import axios from 'axios';
axios.get("www.example.com/api/get/1").then(
    (response) => {
        var result = response.data;
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
);
