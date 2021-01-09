import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Bowling</h1>
      <section className='scoreboard'>
        <article>
          <h3>Player 1</h3>
        </article>
        <table>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
        </table>

      </section>
    </header>
  );
};

export default Header;