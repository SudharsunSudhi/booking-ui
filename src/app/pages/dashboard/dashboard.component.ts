import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../core/services/booking';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BookingDialogComponent } from '../../components/booking-dialog/booking-dialog';

@Component({
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatSnackBarModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  bookings: any[] = [];

  constructor(
    private bookingService: BookingService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.bookingService.getAll().subscribe((res: any[]) => this.bookings = res);
  }

  openDialog(booking?: any) {
    const ref = this.dialog.open(BookingDialogComponent, {
      width: '400px',
      data: booking
    });

    ref.afterClosed().subscribe(result => {
      if (result) this.loadBookings();
    });
  }

  deleteBooking(id: number) {
    if (!confirm('Delete booking?')) return;

    this.bookingService.delete(id).subscribe(() => {
      this.show('Booking deleted 🗑');
      this.loadBookings();
    });
  }

  show(msg: string) {
    this.snackBar.open(msg, 'Close', { duration: 3000 });
  }
}