import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BookingService } from '../../core/services/booking';
import { RoomService } from '../../core/services/room';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './booking-dialog.component.html'
})
export class BookingDialogComponent {
  rooms: any[] = [];
  hasConflict = false;

  model: any = {
    id: 0,
    roomId: '',
    start: '',
    end: '',
    userName: ''
  };

  constructor(
    private bookingService: BookingService,
    private roomService: RoomService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.roomService.getRooms().subscribe((r: any[]) => this.rooms = r);

    if (data) {
      this.model = { ...data };
    }
  }

  checkConflict() {
    if (!this.model.roomId || !this.model.start || !this.model.end) return;

    this.bookingService.checkConflict(this.model)
      .subscribe((conflict: boolean) => this.hasConflict = conflict);
  }

  save() {
    if (this.hasConflict) {
      this.show('Conflict detected ❌');
      return;
    }

    const req = this.model.id
      ? this.bookingService.update(this.model)
      : this.bookingService.create(this.model);

    req.subscribe(() => {
      this.show('Saved successfully ✅');
      this.dialogRef.close(true);
    });
  }

  show(msg: string) {
    this.snackBar.open(msg, 'Close', { duration: 3000 });
  }
}