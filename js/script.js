// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20R-Unit-6-02/sw.js", {
    scope: "/ICS20R-Unit-6-02/",
  })
}

/**
 * This function displays an alert.
 * Words
 */
function cookies() {
  if (localStorage.hits) {
    localStorage.hits++
  } else {
    localStorage.hits = 1
  }
  document.getElementById("total")("≫∘❁♥" + localStorage.hits + "♥❁∘≪")
}
