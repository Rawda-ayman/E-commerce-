// import APIs 

import { enviroment } from "../../../enviroments/enviroment.dev";

export const APIs = {
    // Authentication APIs 
    register_api:`${enviroment.baseurl}auth/signup`,
    login_api:`${enviroment.baseurl}auth/signin`,
    forgetpass:`${enviroment.baseurl}auth/forgotPasswords`,
    verifypass:`${enviroment.baseurl}auth/verifyResetCode`,
    resetpass:`${enviroment.baseurl}auth/resetPassword`,
    updatepass:`${enviroment.baseurl}users/changeMyPassword`,
    // all products API
    all_products:`${enviroment.baseurl}products`,
    // specific product API --> (product_id)
    specific_product:`${enviroment.baseurl}products/products._id`,
    // all categories API
    all_categories:`${enviroment.baseurl}categories`,
    // specific category API --> (category_id)
    specific_category:`${enviroment.baseurl}categories/category._id`,
    // Add cart
    Add_cart:`${enviroment.baseurl}cart` ,
    // payment 
    cash:`${enviroment.baseurl}orders/`,
    Online:`${enviroment.baseurl}orders/checkout-session/`,
    // 
    userorders:`${enviroment.baseurl}orders/user/`,
    // brands 
    brands:`${enviroment.baseurl}brands`, 
    // wishlist
    wishlist:`${enviroment.baseurl}wishlist` ,
}