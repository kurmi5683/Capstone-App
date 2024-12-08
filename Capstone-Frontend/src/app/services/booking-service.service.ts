import { Injectable } from '@angular/core';
import { CreateBooking, UpdateBooking } from '../interfaces/bookingInterface';

@Injectable({
  providedIn: 'root',
})
export class BookingServiceService {
  constructor() {}

  private apiUrl = 'http://localhost:4000/booking';

  async createBooking(
    bookingDetails: CreateBooking,
    token: string
  ): Promise<any> {
    const response = await fetch(`${this.apiUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify(bookingDetails),
    });

    return await response.json();
  }

  async getAllBookings(token: string): Promise<any> {
    const response = await fetch(`${this.apiUrl}/`, {
      method: 'GET',
      headers: {
        token: token,
      },
    });

    return await response.json();
  }

  async getBookingById(bookingId: string, token: string): Promise<any> {
    const response = await fetch(`${this.apiUrl}/${bookingId}`, {
      method: 'GET',
      headers: {
        token: token,
      },
    });

    return await response.json();
  }

  async getUserBookings(user_Id: string, token: string): Promise<any> {
    const response = await fetch(`${this.apiUrl}/user/${user_Id}`, {
      method: 'GET',
      headers: {
        token: token,
      },
    });

    return await response.json();
  }

  async updateBooking(
    bookingDetails: UpdateBooking,
    token: string
  ): Promise<any> {
    const response = await fetch(`${this.apiUrl}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify(bookingDetails),
    });

    return await response.json();
  }

  async deleteBookingById(bookingId: string, token: string): Promise<any> {
    const response = await fetch(`${this.apiUrl}/${bookingId}`, {
      method: 'DELETE',
      headers: {
        token: token,
      },
    });

    return await response.json();
  }

  async approveBooking(
    bookingId: string,
    status: string,
    token: string
  ): Promise<any> {
    const response = await fetch(`${this.apiUrl}/approve/${bookingId}`, {
      method: 'PUT',
      headers: {
        token: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });

    return await response.json();
  }

  async cancelBooking(
    bookingId: string,
    reason: string,
    token: string
  ): Promise<any> {
    const response = await fetch(`${this.apiUrl}/cancel/${bookingId}`, {
      method: 'PUT',
      headers: {
        token: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'Cancelled', reason }),
    });

    return await response.json();
  }
}
