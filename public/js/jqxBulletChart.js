
        $(document).ready(function () {

          // var setting1 = {
          //       width: 400,
          //       height: 40,
          //       barSize: "40%",
          //       title: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Capacity %",
          //       description: "",
          //       ranges: [
          //           // { startValue: 0, endValue: 200, color: "#000000", opacity: 0.5 },
          //           // { startValue: 200, endValue: 250, color: "#000000", opacity: 0.3 },
          //           { startValue: 0, endValue: 100, color: "green", opacity: 0.7 }
          //       ],
          //       pointer: { value: 75, label: "%", size: "25%", color: "grey" },
          //       target: { value: 75, label: "%", size: 4, color: "grey" },
          //       ticks: { position: "none", interval: 50, size: 10 },
          //       // labelsFormat: "c",
          //       // showTooltip: true
          //   };
          // $("#jqBulletGraph1").jqxBulletChart(setting1);


          $("#jqBulletGraph2").jqxBulletChart({
                width: 400,
                height: 40,
                barSize: "40%",
                title: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;De Ice \u00B0C",
                description: "",
                ranges: [
                    // { startValue: 0, endValue: 200, color: "#000000", opacity: 0.5 },
                    // { startValue: 200, endValue: 250, color: "#000000", opacity: 0.3 },
                    { startValue: 0, endValue: 17, color: "blue", opacity: 0.7 }
                ],
                pointer: { value: 0, label: "C", size: "25%", color: "white" },
                // target: { value: 0, label: "%", size: 4, color: "white" },
                ticks: { position: "none", interval: 50, size: 10 },
                // labelsFormat: "c",
                // showTooltip: true
            });
          $("#jqBulletGraph3").jqxBulletChart({
                width: 400,
                height: 40,
                barSize: "40%",
                title: "&nbsp;&nbsp;Indoor Fan %",
                description: "",
                ranges: [
                    // { startValue: 0, endValue: 200, color: "#000000", opacity: 0.5 },
                    // { startValue: 200, endValue: 250, color: "#000000", opacity: 0.3 },
                    { startValue: 0, endValue: 100, color: "green", opacity: 0.7 }
                ],
                pointer: { value: 0, label: "%", size: "25%", color: "white" },
                // target: { value: 0, label: "%", size: 4, color: "white" },
                ticks: { position: "none", interval: 50, size: 10 },
                // labelsFormat: "c",
                // showTooltip: true
            });
          $("#jqBulletGraph4").jqxBulletChart({
                width: 400,
                height: 40,
                barSize: "40%",
                title: "Outdoor Fan %",
                description: "",
                ranges: [
                    // { startValue: 0, endValue: 200, color: "#000000", opacity: 0.5 },
                    // { startValue: 200, endValue: 250, color: "#000000", opacity: 0.3 },
                    { startValue: 0, endValue: 100, color: "green", opacity: 0.7 }
                ],
                pointer: { value: 0, label: "%", size: "25%", color: "white" },
                // target: { value: 0, label: "%", size: 4, color: "white" },
                ticks: { position: "none", interval: 50, size: 10 },
                // labelsFormat: "c",
                // showTooltip: true
            });
        });