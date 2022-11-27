import React from "react";
import "./Home.module.css"
import credit from "../../images/creditcard.png"
import ratinmaze from "../../images/Ratinmaze.jpg"
import sort from "../../images/sorting.jpg"
import sudoku from "../../images/sudoku.jpg"
import tic from "../../images/Tic.png"
const Home = () => {
  return (
    <div>
      <div class="main">
        <h1>Fun with Algo</h1>
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={sudoku} alt="Sudoku solver" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Sudoku solver</h2>
                <p class="card_text">
                  A sudoku solver application which lets user make their own sudoku and<br/> also solves the sudoku using backtracking methodology
                </p>
                <button class="btn card_btn"><a href="https://sudoku-solver-ak.netlify.app/">Play sudoku</a></button>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={ratinmaze} alt = "Rat in a maze visualizer"/>
              </div>
              <div class="card_content">
                <h2 class="card_title">Rat in a maze visualizer</h2>
                <p class="card_text">
                  Rat in a maze in a classic example of backtracking algorithm.<br/> This visualizes differnt ways a rat can reach the end of the matrix using backtracking.
                </p>
                <button class="btn card_btn"><a href="https://rat-in-a-maze-ak.netlify.app/">Open visualizer</a></button>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={tic} alt="Unbeatable Tic-Tac-Toe" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Unbeatable Tic-Tac-Toe</h2>
                <p class="card_text">
                A user-friendly web page demonstrating Tic Tac Toe Game using the minimax <br/> algorithm to
build an unbeatable tic tac toe.
                </p>
                <button class="btn card_btn"><a href="https://tic-tac-toe-ak.netlify.app/">Let's play</a></button>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={sort} alt="Sorting Visualizer" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Sorting Visualizer</h2>
                <p class="card_text">
                A Sorting visualizer to visualize and understand the sorting algorithms and understand the time complexity of them.
                </p>
                <button class="btn card_btn"><a href="https://sorting-visualizer-ak.netlify.app/">Let's visualize</a></button>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={credit} alt="Credit Card Valdiator" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Credit Card Valdiator</h2>
                <p class="card_text">
                  A credit card validator to identify valid credit card using luhn algorithm. <br/> 
                  The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers.
                </p>
                <button class="btn card_btn"><a href="https://credit-card-validator-ak.netlify.app/">Check credit card</a></button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <h3 class="made_by">Made by Akshat Khanna</h3>
    </div>
  );
};

export default Home;
