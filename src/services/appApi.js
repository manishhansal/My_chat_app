import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../http-common";

//define a service user a base url

const appApi = createApi({
//creating user
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
       baseUrl : BASEURL
    }),

    endpoints : (builder) => ({
        signupUser : builder.mutation({
            query : (user) => ({
                url: '/users/signUp',
                method: 'POST',
                body: user,
            }),
        }),
        //login
        loginUser: builder.mutation({
            query: (user) => ({
                url:"/users/login",
                method:"POST",
                body:user,
            }),
        }),

        //logout
        logoutUser:builder.mutation({
            query: (payload) => ({
                url:"/logout",
                method:"DELETE",
                body:payload,
            }),
        })
    }),
});

export const {useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation}= appApi;
export default appApi;