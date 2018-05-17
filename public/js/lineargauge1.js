
        $(document).ready(function () {
            var fillStyle1 = {
              type: 'linearGradient',
              x0: 0,
              y0: 0,
              x1: 1,
              y1: 1,
              r1:1,
              colorStops: [{ offset: 0, color: '#ff0000'},
                           { offset: 0.083, color: '#ea0015'},
                           { offset: 0.167, color: '#d4002b'},
                           { offset: 0.249, color: '#d4002b'},
                           { offset: 0.332, color: '#bf0040'},
                           { offset: 0.415, color: '#aa0055'},
                           { offset: 0.498, color: '#95006a'},
                           { offset: 0.581, color: '#800080'},
                           { offset: 0.664, color: '#6a0095'},
                           { offset: 0.747, color: '#5500aa'},
                           { offset: 0.833, color: '#4000bf'},
                           { offset: 0.913, color: '#2b00d4'},
                           { offset: 0.996, color: '#1500ea'},
                           { offset: 1, color: '#0000ff'},
                           ]
            };
            var fillStyle2 = {
              type: 'linearGradient',
              x0: 0,
              y0: 0,
              x1: 1,
              y1: 1,
              r1:1,
              colorStops: [{ offset: 0, color: '#fff'},
                           { offset: 0.083, color: '#ecffec'},
                           { offset: 0.167, color: '#d9ffd9'},
                           { offset: 0.249, color: '#c6ffc6'},
                           { offset: 0.332, color: '#b3ffb3'},
                           { offset: 0.415, color: '#a0ffa0'},
                           { offset: 0.498, color: '#8dff8d'},
                           { offset: 0.581, color: '#7aff7a'},
                           { offset: 0.664, color: '#67ff67'},
                           { offset: 0.747, color: '#54ff54'},
                           { offset: 0.833, color: '#41ff41'},
                           { offset: 0.913, color: '#2eff2e'},
                           { offset: 0.996, color: '#1bff1b'},
                           { offset: 1, color: '#08ff08'},
                           ]
            };
            var fillStyle3 = {
              type: 'linearGradient',
              x0: 0,
              y0: 0,
              x1: 1,
              y1: 1,
              r1:1,
              colorStops: [{ offset: 0, color: '#00ff00'},
                           { offset: 0.083, color: '#08ff08'},
                           { offset: 0.167, color: '#1bff1b'},
                           { offset: 0.249, color: '#2eff2e'},
                           { offset: 0.332, color: '#41ff41'},
                           { offset: 0.415, color: '#54ff54'},
                           { offset: 0.498, color: '#67ff67'},
                           { offset: 0.581, color: '#7aff7a'},
                           { offset: 0.664, color: '#8dff8d'},
                           { offset: 0.747, color: '#a0ffa0'},
                           { offset: 0.833, color: '#b3ffb3'},
                           { offset: 0.913, color: '#c6ffc6'},
                           { offset: 0.996, color: '#d9ffd9'},
                           { offset: 1, color: '#ecffec'},
                           ]
            };


            var needleGradient = {
                type: 'linearGradient',
                x0: 0,
                y0: 0.5,
                x1: 1,
                y1: 0.5,
                r1:1,
                colorStops: [{ offset: 0, color: '#4F6169' },
                             { offset: 1, color: '#252E32'}]
            };


            $('#jqLinearGauge1').jqLinearGauge({
                orientation: 'vertical',
                background: '#fff',
                border: {
                    padding: 16,
                    lineWidth: 0,
                    fillStyle: '#76786A'
                },
                tooltips: {
                    disabled: false,
                    highlighting: true
                },
                // animation: {
                //     duration: 1
                // },
                annotations: [
                                {
                                    text: 'Capacity',
                                    fillStyle: '#000',
                                    font: '15px Verdana',
                                    horizontalOffset: 0.5,
                                    verticalOffset: 0.97
                                },
                                 {
                                    text: '%',
                                    fillStyle: '#000',
                                    font: '15px Verdana',
                                    horizontalOffset: 0.5,
                                    verticalOffset: 0.02
                                }
                            ],
                scales: [
                         {
                             minimum: 0,
                             maximum: 105,
                             interval: 10,
                             labels: {
                                 offset: 0.16
                             },
                             majorTickMarks: {
                                 length: 10,
                                 offset: 0.31,
                                 lineWidth: 2,
                                 interval: 10,
                             },
                             minorTickMarks: {
                                 length: 6,
                                 visible: true,
                                 interval: 2,
                                 offset: 0.32,
                                 lineWidth: 2
                             },
                             customTickMarks: [0,10,20,30,40,50,60,70,80,90,100],
                             ranges: [
                                         {
                                            startValue:0,
                                            endValue:16,
                                            innerOffset:0.46,
                                            outerStartOffset:0.64,
                                            outerEndOffset:0.69,
                                            fillStyle: '#000'
                                         },
                                         {
                                            startValue:16,
                                            endValue:100,
                                            innerOffset:0.46,
                                            outerStartOffset:0.69,
                                            outerEndOffset:0.9,
                                            fillStyle: fillStyle3
                                         },
                                         {
                                            startValue:100,
                                            endValue:105,
                                            innerOffset:0.46,
                                            outerStartOffset:0.9,
                                            outerEndOffset:0.92,
                                            fillStyle: '#ff8042'
                                         }
                                     ],
                             needles: [
                                        {
                                            name:'capacity',
                                            type: 'pointer',
                                            value: values.capacity,
                                            fillStyle: needleGradient,
                                            innerOffset: 0.50,
                                            outerOffset: 1.00
                                        }
                                      ]
                            }
                        ]
                });

             $('#jqLinearGauge3').jqLinearGauge({
                orientation: 'vertical',
                background: '#fff',
                border: {
                    padding: 16,
                    lineWidth: 0,
                    strokeStyle: '#76786A'
                },
                tooltips: {
                    disabled: false,
                    highlighting: true
                },
                // animation: {
                //     duration: 1
                // },
                annotations: [
                                {
                                    text: ' Indoor Fan',
                                    fillStyle: '#000',
                                    font: '15px Verdana',
                                    horizontalOffset: 0.5,
                                    verticalOffset: 0.97
                                },
                                 {
                                    text: '%',
                                    fillStyle: '#000',
                                    font: '15px Verdana',
                                    horizontalOffset: 0.5,
                                    verticalOffset: 0.02
                                }
                            ],
                scales: [
                         {
                             minimum: 0,
                             maximum: 100,
                             interval: 10,
                             labels: {
                                 offset: 0.16
                             },
                             majorTickMarks: {
                                 length: 10,
                                 offset: 0.31,
                                 lineWidth: 2,
                                 interval: 10,
                             },
                             minorTickMarks: {
                                 length: 6,
                                 visible: true,
                                 interval: 2,
                                 offset: 0.32,
                                 lineWidth: 2
                             },
                             ranges: [
                                         {
                                            startValue:0,
                                            endValue:100,
                                            innerOffset:0.46,
                                            outerStartOffset:0.64,
                                            outerEndOffset:0.9,
                                            fillStyle: fillStyle3
                                         }
                                     ],
                             needles: [
                                        {
                                            name:'indoorf',
                                            type: 'pointer',
                                            value: values.indoorf,
                                            fillStyle: needleGradient,
                                            innerOffset: 0.50,
                                            outerOffset: 1.00
                                        }
                                      ]
                         }
                        ]
            });

              $('#jqLinearGauge4').jqLinearGauge({
                orientation: 'vertical',
                background: '#fff',
                border: {
                    padding: 16,
                    lineWidth: 0,
                    strokeStyle: '#76786A'
                },
                tooltips: {
                    disabled: false,
                    highlighting: true
                },
                // animation: {
                //     duration: 1
                // },
                annotations: [
                                {
                                    text: 'Outdoor Fan',
                                    fillStyle: '#000',
                                    font: '15px Verdana',
                                    horizontalOffset: 0.5,
                                    verticalOffset: 0.97
                                },
                                 {
                                    text: '%',
                                    fillStyle: '#000',
                                    font: '15px Verdana',
                                    horizontalOffset: 0.5,
                                    verticalOffset: 0.02
                                }
                            ],
                scales: [
                         {
                             minimum: 0,
                             maximum: 100,
                             interval: 10,
                             labels: {
                                 offset: 0.16
                             },
                             majorTickMarks: {
                                 length: 10,
                                 offset: 0.31,
                                 lineWidth: 2,
                                 interval: 10,
                             },
                             minorTickMarks: {
                                 length: 6,
                                 visible: true,
                                 interval: 2,
                                 offset: 0.32,
                                 lineWidth: 2
                             },
                             ranges: [
                                         {
                                            startValue:0,
                                            endValue:100,
                                            innerOffset:0.46,
                                            outerStartOffset:0.64,
                                            outerEndOffset:0.9,
                                            fillStyle: fillStyle3
                                         }
                                     ],
                             needles: [
                                        {
                                            name: 'outdoorf',
                                            type: 'pointer',
                                            value: values.outdoorf,
                                            fillStyle: needleGradient,
                                            innerOffset: 0.50,
                                            outerOffset: 1.00
                                        }
                                      ]
                         }
                        ]
            });

            $('#jqLinearGauge2').jqLinearGauge({
                orientation: 'vertical',
                background: '#fff',
                border: {
                    padding: 16,
                    lineWidth: 0,
                    strokeStyle: '#76786A'
                },
                tooltips: {
                    disabled: false,
                    highlighting: true
                },
                // animation: {
                //     duration: 1
                // },
                annotations: [
                                {
                                    text: ' DeIce',
                                    fillStyle: '#000',
                                    font: '15px Verdana',
                                    horizontalOffset: 0.5,
                                    verticalOffset: 0.97
                                },
                                 {
                                    text: '\u00B0C',
                                    fillStyle: '#000',
                                    font: '15px Verdana',
                                    horizontalOffset: 0.5,
                                    verticalOffset: 0.02
                                }
                            ],
                scales: [
                         {
                             minimum: -10,
                             maximum: +17,
                             interval: 1,
                             labels: {
                                 offset: 0.16
                             },
                             majorTickMarks: {
                                 length: 10,
                                 offset: 0.31,
                                 lineWidth: 2,
                                 interval: 1,
                             },
                             minorTickMarks: {
                                 length: 6,
                                 visible: true,
                                 interval: 0.5,
                                 offset: 0.32,
                                 lineWidth: 2
                             },
                             customTickMarks: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,,13,14,15],
                             ranges: [
                                         {
                                            startValue:-10,
                                            endValue:0,
                                            innerOffset:0.46,
                                            outerStartOffset:0.64,
                                            outerEndOffset:0.735,
                                            fillStyle: '#5693c9'
                                         },
                                         {
                                            startValue:0,
                                            endValue:15,
                                            innerOffset:0.46,
                                            outerStartOffset:0.735,
                                            outerEndOffset:0.9,
                                            fillStyle: '#ff8042'
                                         },
                                         {
                                            startValue:15,
                                            endValue:17,
                                            innerOffset:0.46,
                                            outerStartOffset:0.9,
                                            outerEndOffset:0.915,
                                            fillStyle: '#000'
                                         }
                                     ],
                             needles: [
                                        {
                                            name: 'deice',
                                            type: 'pointer',
                                            value: values.deice,
                                            fillStyle: needleGradient,
                                            innerOffset: 0.50,
                                            outerOffset: 1.00
                                        }
                                      ]
                         }
                        ]
            });

        });