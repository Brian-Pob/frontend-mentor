import { For, Show, createEffect, createRenderEffect, createSignal, onMount } from 'solid-js';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import './index.css';
import buttonSvg from './icon-arrow.svg';

export default function AgeCalculator() {
  dayjs.extend(isLeapYear);
  const [year, setYear] = createSignal(1970);
  const [month, setMonth] = createSignal(1);
  const [day, setDay] = createSignal(1);

  const [maxDays, setMaxDays] = createSignal(31);

  const [errors, setErrors] = createSignal({
    year: '',
    month: '',
    day: '',
    future: '',
  });

  const [elapsedYears, setElapsedYears] = createSignal('0');
  const [elapsedMonths, setElapsedMonths] = createSignal('0');
  const [elapsedDays, setElapsedDays] = createSignal('0');

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
    if (
      dayjs(`${yearInput}-${monthInput}-${dayInput}`).isLeapYear() &&
      monthInput === 2 &&
      dayInput > 29
    ) {
      setErrors((prev) => ({ ...prev, day: 'February has 29 days this year' }));
    } else if (
      !dayjs(`${yearInput}-${monthInput}-${dayInput}`).isLeapYear() &&
      monthInput === 2 &&
      dayInput > 28
    ) {
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

    const updateResult = () => {
      if (errors().year) setElapsedYears('--');

      if (errors().month) setElapsedMonths('--');

      if (errors().day) setElapsedDays('--');

      if (errors().year || errors().month || errors().day) {
        document.querySelector('.inputs')?.classList.add('errors');
        return;
      }

      const birthday = dayjs(`${year()}-${month()}-${day()}`);

      const now = dayjs();
      const oldValues = [elapsedYears(), elapsedMonths(), elapsedDays()];

      if (now.diff(birthday, 'year').toString() !== oldValues[0]) {
        setElapsedYears(now.diff(birthday, 'year').toString());
      }

      if ((now.diff(birthday, 'month') % 12).toString() !== oldValues[1]) {
        setElapsedMonths((now.diff(birthday, 'month') % 12).toString());
      }

      if ((now.diff(birthday, 'day') % 30).toString() !== oldValues[2]) {
        setElapsedDays((now.diff(birthday, 'day') % 30).toString());
      }
    };

    if (document?.startViewTransition) {
      const resultSpans = document.querySelectorAll('.result span');
      document
        .startViewTransition(() => {
          const oldValues = [elapsedYears(), elapsedMonths(), elapsedDays()];

          updateResult();

          if (oldValues[0] === elapsedYears()) resultSpans[0].style.viewTransitionName = 'none';

          if (oldValues[1] === elapsedMonths()) resultSpans[1].style.viewTransitionName = 'none';

          if (oldValues[2] === elapsedDays()) resultSpans[2].style.viewTransitionName = 'none';
        })
        .finished.then(() => {
          resultSpans.forEach((val) => {
            val.style.viewTransitionName = null;
          });
        });
    } else {
      updateResult();
    }

    setYear(yearInput);
    setMonth(monthInput);
    setDay(dayInput);
  };

  onMount(() => {
    calculateAge();
  });

  return (
    <main class="age-calculator">
      <div class="calculator">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateAge();
          }}
        >
          <div class="inputs">
            <div>
              <label for="year">Year</label>
              <input
                type="number"
                placeholder="Year"
                name="year"
                value={year()}
                min={1900}
                max={dayjs().year()}
              />
            </div>

            <div>
              <label for="month">Month</label>
              <input
                type="number"
                placeholder="Month"
                name="month"
                value={month()}
                min={1}
                max={12}
              />
            </div>

            <div>
              <label for="day">Day</label>
              <input
                type="number"
                placeholder="Day"
                name="day"
                value={day()}
                min={1}
                max={maxDays()}
              />
            </div>
          </div>

          <div class="submit-button">
            <hr />
            <button type="submit" aria-label="Calculate age" title="Calculate age">
              <img src={buttonSvg} alt="" />
            </button>
          </div>
        </form>

        <Show
          when={errors().year || errors().month || errors().day || errors().future}
          fallback={<div class="errors"></div>}
        >
          <div class="errors">
            <For each={Object.values(errors())}>{(error) => <p>{error}</p>}</For>
          </div>
        </Show>

        <div class="result">
          <h2>
            <span id="resultYears">{elapsedYears()}</span> years
          </h2>
          <h2>
            <span id="resultMonths">{elapsedMonths()}</span> months
          </h2>
          <h2>
            <span id="resultDays">{elapsedDays()}</span> days
          </h2>
        </div>
      </div>
    </main>
  );
}
