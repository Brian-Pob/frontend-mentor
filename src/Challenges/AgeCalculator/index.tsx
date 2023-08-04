import { createEffect, createSignal } from 'solid-js';
import dayjs from 'dayjs';

export default function AgeCalculator() {
  const [year, setYear] = createSignal(1970);
  const [month, setMonth] = createSignal(1);
  const [day, setDay] = createSignal(1);
  const [hours, setHours] = createSignal(0);
  const [minutes, setMinutes] = createSignal(0);
  const [seconds, setSeconds] = createSignal(0);

  const [elapsed, setElapsed] = createSignal({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateAge = () => {
    setYear(() => Number((document.querySelector('input[name="year"]') as HTMLInputElement).value));
    setMonth(() =>
      Number((document.querySelector('input[name="month"]') as HTMLInputElement).value)
    );
    setDay(() => Number((document.querySelector('input[name="day"]') as HTMLInputElement).value));
    setHours(() =>
      Number((document.querySelector('input[name="hour"]') as HTMLInputElement).value)
    );
    setMinutes(() =>
      Number((document.querySelector('input[name="minute"]') as HTMLInputElement).value)
    );
    setSeconds(() =>
      Number((document.querySelector('input[name="second"]') as HTMLInputElement).value)
    );

    const birthday = dayjs(`${year()}-${month()}-${day()}`);
    const now = dayjs();
    const diff = now.diff(birthday, 'second');

    setElapsed({
      years: now.diff(birthday, 'year'),
      months: now.diff(birthday, 'month') % 12,
      days: now.diff(birthday, 'day') % 30,
      hours: now.diff(birthday, 'hour') % 24,
      minutes: now.diff(birthday, 'minute') % 60,
      seconds: now.diff(birthday, 'second') % 60,
    });
  };

  // update every second
  createEffect(() => {
    const interval = setInterval(() => {
      calculateAge();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <main>
      <div>
        <h1>Age Calculator</h1>
        <p>Enter your birthday to calculate your age.</p>
        <form>
          <label for="year"></label>
          <input type="number" placeholder="Year" name="year" value={year()} />
          <label for="month"></label>
          <input type="number" placeholder="Month" name="month" value={month()} />
          <label for="day"></label>
          <input type="number" placeholder="Day" name="day" value={day()} />
          <label for="hour"></label>
          <input type="number" placeholder="Hour" name="hour" value={hours()} />
          <label for="minute"></label>
          <input type="number" placeholder="Minute" name="minute" value={minutes()} />
          <label for="second"></label>
          <input type="number" placeholder="Second" name="second" value={seconds()} />
        </form>
        <div>
          <p>
            <span>{elapsed().years}</span> years
          </p>
          <p>
            <span>{elapsed().months}</span> months
          </p>
          <p>
            <span>{elapsed().days}</span> days
          </p>
          <p>
            <span>{elapsed().hours}</span> hours
          </p>
          <p>
            <span>{elapsed().minutes}</span> minutes
          </p>
          <p>
            <span>{elapsed().seconds}</span> seconds
          </p>
        </div>
      </div>
    </main>
  );
}
