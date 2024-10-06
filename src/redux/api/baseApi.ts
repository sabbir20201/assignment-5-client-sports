// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'sportsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),

  endpoints: (builder) => ({
    getSports: builder.query({
      query: () => ({
        method: 'GET',
        url: '/facility'
      })
    }),
    getSportsById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/facility/${id}`
      })
    }),
    checkAvailability: builder.query({
      query: (date) => ({
        method: "GET",
        url: `/check-availability`,
        params: { date },
      })
    }),
    createFacility: builder.mutation({
      query: (newFacility) => ({
        method: "POST",
        url: "/facility",
        body: newFacility
      })
    }),
    bookingFacility: builder.mutation({
      query: (newFacility) => ({
        method: "POST",
        url: "/bookings",
        body: newFacility
      })
    }),
    deleteFacility: builder.mutation({
      query:(id: string)=>({
        method: "DELETE",
        url: `/facility/${id}`,
      })
     }),
  }),
})


export const { useGetSportsQuery,useDeleteFacilityMutation ,useCheckAvailabilityQuery, useBookingFacilityMutation, useGetSportsByIdQuery, useCreateFacilityMutation } = baseApi