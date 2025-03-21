// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Maer 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Calculates area of a triangle
 */
function enterClicked() {
  // input
  const heightOfTriangle = parseFloat(document.getElementById('height').value)
  const baseOfTriangle = parseFloat(document.getElementById("base").value)

  // process
  const areaOfTriangle = heightOfTriangle * baseOfTriangle / 2

  // output
  document.getElementById('answer').innerHTML = 'Area is ' + areaOfTriangle + ' cm².'
}
