"use strict";
const baseUrl = 'http://127.0.0.1:8000';
const apiEndpoint = {
    home: `${baseUrl}/`,
    distributors: `${baseUrl}/api/v1/distributors/top`,
    commissions: `${baseUrl}/api/v1/commissions`,
    contact: `${baseUrl}/api/v1/contact`
};

export default apiEndpoint;
