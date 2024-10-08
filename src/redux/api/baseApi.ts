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
    getBookingFacility: builder.query({
      query: () => ({
        method: "GET",
        url: "/bookings"
      })
    }),
    checkAvailability: builder.query({
      query: ({date, facilityId }) => ({
        method: "GET",
        url: `/check-availability`,
        params: { date, facility: facilityId  },
      })
    }),
    getSingleUserBookings: builder.query({
      query: () => ({
        method: "GET",
        url: '/bookings/user',
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
    updateFacility: builder.mutation({
      query:({id, updatedData})=>({
        method: "PUT",
        url: `/facility/${id}`,
        body: updatedData
      })
     }),
    deleteFacility: builder.mutation({
      query:(id: string)=>({
        method: "DELETE",
        url: `/facility/${id}`,
      })
     }),
    deleteBooking: builder.mutation({
      query:(id: string)=>({
        method: "DELETE",
        url: `/bookings/${id}`,
      })
     }),
  }),
})

export const { useGetSportsQuery,useDeleteBookingMutation,useGetSingleUserBookingsQuery,useDeleteFacilityMutation ,useUpdateFacilityMutation,useGetBookingFacilityQuery,useCheckAvailabilityQuery, useBookingFacilityMutation, useGetSportsByIdQuery, useCreateFacilityMutation } = baseApi