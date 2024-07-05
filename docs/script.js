document.addEventListener("DOMContentLoaded", function() {
  // Initially show the blocks with IDs 'fee', 'procurement', and 'hero'
  document.getElementById("fee").style.display = "block";
  document.getElementById("procurement").style.display = "block";
  document.getElementById("hero").style.display = "block";

  // Function to hide 'fee', 'procurement', and 'hero' blocks and show the specified report
  function showReport(reportId) {
    document.getElementById("fee").style.display = "none";
    document.getElementById("procurement").style.display = "none";
    document.getElementById("hero").style.display = "none";
    document.querySelectorAll('[id^="report"]').forEach(function(report) {
      report.style.display = "none"; // Hide all reports
    });
    document.getElementById(reportId).style.display = "block"; // Show the specified report
  }

  // Function to hide all report blocks
  function hideReports() {
    document.querySelectorAll('[id^="report"]').forEach(function(report) {
      report.style.display = "none";
    });
  }

  // Function to show specific blocks and hide reports
  function showBlocksAndHideReports(blockIds) {
    hideReports(); // Hide all reports
    blockIds.forEach(function(blockId) {
      document.getElementById(blockId).style.display = "block"; // Show specific blocks
    });
  }

  // Add click event listener for #procurement link
  document.querySelector('a[href="#procurement"]').addEventListener("click", function() {
    showBlocksAndHideReports(["procurement", "fee", 'hero']);
  });

  // Add click event listener for #fee link
  document.querySelector('a[href="#fee"]').addEventListener("click", function() {
    showBlocksAndHideReports(["procurement", "fee", 'hero']);
  });

  // Add click event listener for .navbar-brand link
  document.querySelector('.navbar-brand').addEventListener("click", function() {
    showBlocksAndHideReports(["procurement", "fee", 'hero']);
  });

  // Add click event listeners to report links
  document.querySelector('a[href="#report2024"]').addEventListener("click", function() {
    showReport("report2024");
  });
  document.querySelector('a[href="#report2023"]').addEventListener("click", function() {
    showReport("report2023");
  });
  document.querySelector('a[href="#report2022"]').addEventListener("click", function() {
    showReport("report2022");
  });

});
