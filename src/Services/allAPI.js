import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

// REGISTER
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,reqBody,"")
    
}
// LOGIN
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,reqBody,"")
    
}
// UPDATE-PROFILE
export const updateProfileAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/update/user`,reqBody,reqHeader)
    
}
// ADD AD
export const addAdAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/ads/user`,reqBody,reqHeader)
    
}
// get all ads
export const getAllAdsAPI = async (searchValue)=>{
    return await commonAPI("GET",`${BASE_URL}/all_Ads?search=${searchValue}`,"","")
    
}
// get USER ADS only
export const getUserAdsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/all_Ads/user`,"",reqHeader)
}
// DELETE AD
export const deleteAdAPI =async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/delete_ad/${id}`,{},reqHeader)
}
// get Ad poster details
export const getOwnerDetails = async(id,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/owner/details/${id}`,"",reqHeader)
}