const fetchDataApi = () => {
    return fetch('https://www.course-api.com/react-tabs-project')
        .then((resp) => resp.json());
};

export default fetchDataApi;