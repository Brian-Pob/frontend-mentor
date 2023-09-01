// @ts-nocheck
import { createEffect, on, onMount } from 'solid-js';
import './index.scss';

export default function Calculator() {
  onMount(() => {
    const themeOptions = document.querySelectorAll('input[name="theme"]');
    // console.log('themeOptions', themeOptions);
    themeOptions.forEach((option) => {
      // console.log('option', option);
      option.addEventListener('change', (e) => {
        const theme = (e.currentTarget as HTMLInputElement).value;
        // console.log('theme', theme);
        document.querySelector('main')!.className = `theme${theme}`;
      });
    });

    // Copy pasted this from my scuffed codepen. Couldn't be bothered to add types lol
    const numberInput = document.querySelector('#numberInput');
    const inputButtons = document.querySelectorAll('.keypad button');

    let activeOperator = '';
    let firstOperand = null;

    function formatNumber() {
      try {
        numberInput.value = Intl.NumberFormat('en-US').format(
          numberInput.value.toString().replaceAll(',', '')
        );
        // console.log(numberInput.value);
      } catch (error) {
        console.error(error);
      }
      // numberInput.value = Intl.NumberFormat("en-US").format(numberInput.value)
    }

    function executeOperation() {
      let result = parseFloat(numberInput.value.replaceAll(',', ''));
      let error = false;
      switch (activeOperator) {
        case '+':
          result = firstOperand + result;
          break;
        case '-':
          result = firstOperand - result;
          break;
        case '*':
          result = firstOperand * result;
          break;
        case '/':
          result = firstOperand / result;
          break;
        default:
          console.log('operatione execute error');
          error = true;
      }
      if (!error) {
        numberInput.value = Intl.NumberFormat('en-US').format(
          result.toString().replaceAll(',', '')
        );
      }

      console.log('execute operation');
    }

    function inputNumber(value) {
      if (!isNaN(value)) {
        numberInput.value = numberInput.value.toString() + value.toString();
        return;
      }

      switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
          firstOperand = parseFloat(numberInput.value.replaceAll(',', ''));
          clearInput();
          activeOperator = value;
          break;
        case '=':
          if (activeOperator === '') {
            console.error('no operator selected');
            break;
          }
          executeOperation();
          activeOperator = '';
          break;
        default:
          break;
      }
    }

    function deleteNumber() {
      numberInput.value = numberInput.value.toString().slice(0, -1);
    }

    function clearInput() {
      numberInput.value = '';
    }

    function resetCalc() {
      clearInput();
      firstOperand = null;
      activeOperator = '';
    }

    inputButtons.forEach((inputButton) => {
      // console.log(numberButton.value);
      inputButton.addEventListener('click', () => {
        switch (inputButton.value) {
          case 'DEL':
            deleteNumber();
            break;
          case 'RESET':
            resetCalc();
            break;
          default:
            inputNumber(inputButton.value);
        }

        formatNumber();
      });
    });
  });

  return (
    <main id="calculator-challenge" class="theme1">
      <div class="container">
        <div class="calculator">
          <div class="header">
            <span>broken-calc</span>
            <fieldset>
              <legend>Theme</legend>
              <div>
                <label for="one">1</label>
                <input type="radio" value="1" id="one" name="theme" checked></input>
              </div>
              <div>
                <label for="two">2</label>
                <input type="radio" value="2" id="two" name="theme"></input>
              </div>
              <div>
                <label for="three">3</label>
                <input type="radio" value="3" id="three" name="theme"></input>
              </div>
            </fieldset>
          </div>
          <div class="input">
            <input id="numberInput" type="text" value="0" readonly></input>
          </div>

          <div class="keypad">
            <button value="7">7</button>
            <button value="8">8</button>
            <button value="9">9</button>
            <button value="DEL" class="tertiary">
              DEL
            </button>
            <button value="4">4</button>
            <button value="5">5</button>
            <button value="6">6</button>
            <button value="+">+</button>
            <button value="1">1</button>
            <button value="2">2</button>
            <button value="3">3</button>
            <button value="-">-</button>
            <button value=".">.</button>
            <button value="0">0</button>
            <button value="/">/</button>
            <button value="*">*</button>
            <button value="RESET" class="tertiary">
              RESET
            </button>
            <button value="=" class="secondary">
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
