/**
 * Handlers
 */

 /**
 * The handler for adding rows to the data.
 */
GOKb.handlers.addRows = function () {
  var number = window.prompt("Enter the number of rows to add", "1");
  if (!isNaN(number)) {
    
    // Post to our process.
    GOKb.postProcess(
      "data-addrows", 
      {"number": number},
      null,
      { modelsChanged: true }
    );
  }
};

GOKb.handlers.trimData = function () {
  
    // Execute command to trim cell data.
  GOKb.postProcess(
    "data-trimws",
    null,
    null,
    {cellsChanged: true} // Ensure we flag that the cells have changed.
  );
};
