import axios from 'axios';

export const commonAPI = async (method, url, data, headers) => {

    const reConfig = {
        method,
        url,
        data,
        headers: headers ? headers : { "Content-Type": "application/json" }
    };

    try {
        const result = await axios(reConfig);
        return result

    } catch (error) {

        return error
    }


}

















// export const commonAPI = async (httpRequest, url, reqBody, reqHeader) => {
//     try {
//         const reConfig = {
//             method: httpRequest,
//             url,
//             data: reqBody,
//             headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
//         };

//         const result = await axios(reConfig);
//         return result;
//         // await axios(reConfig).then((result)=>{return result}).catch((error)=>{return error})
//     } catch (err) {
//         console.error('Error in commonAPI:', err);
//         return err;  // Re-throw the error so that it can be caught by the calling code
//     }
// };