import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ISession } from '../event-model';

@Component({
  selector: 'ems-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css'],
})
export class CreateSessionComponent implements OnInit {
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;

  newSessionForm: FormGroup;
  @Output('newSession') newSession: EventEmitter<ISession> = new EventEmitter<
    ISession
  >();
  @Output('cancelAddSession') cancelAddSession: EventEmitter<
    any
  > = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newSessionForm = this.fb.group({
      name: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: [
        '',
        [
          Validators.required,
          Validators.maxLength(400),
          this.restrictedWords(['foo', 'bar']),
        ],
      ],
    });
  }

  createSession(formValues): void {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: [],
    };
    console.log(session);
    this.newSession.emit(session);
  }

  onCancelAddSession() {
    this.cancelAddSession.emit('cancel');
  }

  public restrictedWords(words) {
    return (control: FormControl): { [key: string]: any } => {
      if (!words) return null;
      var invalidWords = words
        .map((w) => (control.value.includes(w) ? w : null))
        .filter((w) => w != null);
      return invalidWords && invalidWords.length > 0
        ? { restrictedWords: invalidWords.join(', ') }
        : null;
    };
  }
}
