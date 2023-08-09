import { For, Show, createEffect, createRenderEffect, createSignal, onMount } from 'solid-js';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import './index.css';

export default function AgeCalculator() {
  dayjs.extend(isLeapYear);
  const [year, setYear] = createSignal(1970);
  const [month, setMonth] = createSignal(1);
  const [day, setDay] = createSignal(1);

  const [errors, setErrors] = createSignal({
    year: '',
    month: '',
    day: '',
    future: '',
  });

  const [elapsed, setElapsed] = createSignal({
    years: '0',
    months: '0',
    days: '0',
  });

  const calculateAge = () => {
    const yearInput = Number(
      (document.querySelector('input[name="year"]') as HTMLInputElement).value
    );
    const monthInput = Number(
      (document.querySelector('input[name="month"]') as HTMLInputElement).value
    );
    const dayInput = Number(
      (document.querySelector('input[name="day"]') as HTMLInputElement).value
    );

    if (yearInput < 1900 || yearInput > dayjs().year()) {
      setErrors((prev) => ({ ...prev, year: 'Year must be between 1900 and current year' }));
    } else if (yearInput > 1900 && yearInput < dayjs().year()) {
      setErrors((prev) => ({ ...prev, year: '' }));
    }

    if (monthInput < 1 || monthInput > 12) {
      setErrors((prev) => ({ ...prev, month: 'Month must be between 1 and 12' }));
    } else if (monthInput > 0 && monthInput < 13) {
      setErrors((prev) => ({ ...prev, month: '' }));
    }

    // Handle leap years and months with 30 days
    if (dayjs(yearInput).isLeapYear() && monthInput === 2 && dayInput > 29) {
      setErrors((prev) => ({ ...prev, day: 'February has 29 days this year' }));
    } else if (!dayjs(yearInput).isLeapYear() && monthInput === 2 && dayInput > 28) {
      setErrors((prev) => ({ ...prev, day: 'February has 28 days this year' }));
    } else if ([4, 6, 9, 11].includes(monthInput) && dayInput > 30) {
      setErrors((prev) => ({ ...prev, day: 'This month has 30 days' }));
    } else if (dayInput < 1 || dayInput > 31) {
      setErrors((prev) => ({ ...prev, day: 'Day must be between 1 and 31' }));
    } else if (dayInput > 0 && dayInput < 32) {
      setErrors((prev) => ({ ...prev, day: '' }));
    }

    if (!errors().year && !errors().month && !errors().day) {
      if (dayjs(`${yearInput}-${monthInput}-${dayInput}`).isAfter(dayjs())) {
        setErrors((prev) => ({ ...prev, future: 'Birthday cannot be in the future' }));
      } else {
        setErrors((prev) => ({ ...prev, future: '' }));
      }
    }

    if (errors().year || errors().month || errors().day || errors().future) {
      setElapsed({
        years: '--',
        months: '--',
        days: '--',
      });
    } else {
      const birthday = dayjs(`${year()}-${month()}-${day()}`);

      const now = dayjs();

      setElapsed({
        years: now.diff(birthday, 'year').toString(),
        months: (now.diff(birthday, 'month') % 12).toString(),
        days: (now.diff(birthday, 'day') % 30).toString(),
      });
    }
    setYear(yearInput);
    setMonth(monthInput);
    setDay(dayInput);
  };

  onMount(() => {
    calculateAge();
  });

  return (
    <main>
      <div>
        <h1>Age Calculator</h1>
        <p>Enter your birthday to calculate your age.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateAge();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              calculateAge();
            }
          }}
        >
          <div>
            <label for="year">Year</label>
            <input type="number" placeholder="Year" name="year" value={year()} />
          </div>

          <div>
            <label for="month">Month</label>
            <input type="number" placeholder="Month" name="month" value={month()} />
          </div>

          <div>
            <label for="day">Day</label>
            <input type="number" placeholder="Day" name="day" value={day()} />
          </div>

          <button type="submit" onClick={() => calculateAge()}>
            Calculate
          </button>
        </form>

        <Show when={errors().year || errors().month || errors().day || errors().future}>
          <div class="errors">
            <For each={Object.values(errors())}>{(error) => <p>{error}</p>}</For>
          </div>
        </Show>

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
        </div>
      </div>
    </main>
  );
}
