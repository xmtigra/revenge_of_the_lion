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

async function fetchData(sheetName) {
  const response = await fetch(`https://script.google.com/macros/s/AKfycbxyea7dnlUheD5_mHe6ziDuUBaDNg691tu93t_NjVNaeS7pRmfsUKTbsyKYRzkYpom1/exec?sheet=${sheetName}`);
  const data = await response.json();

  if (sheetName === 'Main') {
    document.getElementById('donate-link').setAttribute('href', data.donateLink);
    document.getElementById('facebook-link').setAttribute('href', data.facebookLink);
    document.getElementById('in-link').setAttribute('href', data.inLink);
    document.getElementById('youtube-link').setAttribute('href', data.youtubeLink);
    document.getElementById('instagram-link').setAttribute('href', data.instagramLink);
    console.log(data)
    document.getElementById('drones-total').innerText = data.drones;
    document.getElementById('vehicles-total').innerText = data.vehicles;
    document.getElementById('equipment-total').innerText = data.equipment;
    document.getElementById('support-value-total').innerText = Number(data.supportValue).toLocaleString('uk-UA');
  } else {
    data.forEach((item, index) => {
      if (index < 5) {
        document.getElementById(`drones-${sheetName}`).innerText = data[0].count;
        document.getElementById(`vehicles-${sheetName}`).innerText = data[1].count;
        document.getElementById(`equipment-${sheetName}`).innerText = data[2].count;
        document.getElementById(`support-value-${sheetName}`).innerText = Number(data[3].count).toLocaleString('uk-UA');
        document.getElementById(`subsidy-${sheetName}`).innerText = Number(data[4].count).toLocaleString('uk-UA');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchData('Main').then(() => {
    fetchData('2024');
    fetchData('2023');
    fetchData('2022');
  });
});
