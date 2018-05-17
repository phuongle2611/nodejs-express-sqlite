
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



            var scaleBackgroundGradient = {
                type: 'linearGradient',
                x0: 1,
                y0: 0,
                x1: 0,
                y1: 0,
                colorStops: [{ offset: 0, color: '#A4D020' },
                             { offset: 0.993, color: '#BFFE01' }]
            };

           

            var GreenLinear = {
                type: 'linearGradient',
                x0: 0,
                y0: 0,
                x1: 1,
                y1: 1,
               colorStops: [{ offset: 0, color: '#00ff00'}, //dark
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
                           { offset: 1, color: '#ecffec'},//light
                           ]
            };


            var OrangeLinear = {
                type: 'linearGradient',
                x0: 0,
                y0: 0,
                x1: 1,
                y1: 1,
               colorStops: [{ offset: 0, color: '#ff6201'}, //dark
                           { offset: 0.083, color: '#ff9632'},
                           { offset: 0.167, color: '#ffa856'},
                           { offset: 0.249, color: '#ffb772'},
                           { offset: 0.332, color: '#ffc891'},
                           { offset: 0.415, color: '#ffd2b0'},
                           { offset: 0.498, color: '#ffe1c6'},
                           { offset: 0.581, color: '#ffecdc'},
                           ]
            };

            var BlueLinear = {
                type: 'linearGradient',
                x0: 0,
                y0: 0,
                x1: 1,
                y1: 1,
               colorStops: [{ offset: 0, color: '#00fcfd'}, //light
                           { offset: 0.083, color: '#00f7f8'},
                           { offset: 0.167, color: '#00e5f3'},
                           { offset: 0.249, color: '#00d6ed'},
                           { offset: 0.332, color: '#00c3e4'},
                           { offset: 0.415, color: '#00afdb'},
                           { offset: 0.498, color: '#009fd2'},
                           { offset: 0.581, color: '#008ac4'},//dark
                           ]
            };

            var range1Gradient = {
                type: 'linearGradient',
                x0: 0,
                y0: 0,
                x1: 1,
                y1: 0,
                colorStops: [{ offset: 0, color: '#61B603' },
                             { offset: 1, color: '#448100' }]
            };

            var range2Gradient = {
                type: 'linearGradient',
                x0: 1,
                y0: 0,
                x1: 0,
                y1: 0,
                colorStops: [{ offset: 0, color: '#87B202' },
                             { offset: 1, color: '#A6DC01' }]
            };

            var comparativeMeasureGradient = {
                type: 'linearGradient',
                x0: 0,
                y0: 0,
                x1: 0,
                y1: 1,
                colorStops: [{ offset: 0, color: '#E4E4E4' },
                             { offset: 0.552, color: '#FFFFFF' }]
            };

            var featuredMeasureGradient = {
                type: 'linearGradient',
                x0: 0,
                y0: 0,
                x1: 1,
                y1: 0,
                colorStops: [{ offset: 0, color: '#FFFFFF' },
                             { offset: 0.495, color: '#FFFFFF' }]
            };


            $('#jqBulletGraph1').jqBulletGraph({
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
                                    horizontalOffset: 0.6,
                                    verticalOffset: 0.02
                                }
                            ],
                quantitativeScale: {
                    name: 'Main Scale',
                    minimum: 0,
                    maximum: 100,
                    background: GreenLinear,
                    // qualitativeRanges:
                    //     [
                    //         {
                    //             value: 47,
                    //             fillStyle: range1Gradient
                    //         },
                    //         {
                    //             value: 70,
                    //             fillStyle: range2Gradient
                    //         }
                    //     ]
                },
                // comparativeMeasures:
                //     [
                //         {
                //             title: 'Comparative Measure',
                //             value: 80,
                //             fillStyle: comparativeMeasureGradient
                //         }
                //     ],
                featuredMeasures:
                    [
                        {
                            title: 'Featured Measure',
                            value: 0,
                            innerOffset: 0.4,
                            outerOffset: 0.6,
                            fillStyle: featuredMeasureGradient
                        }
                    ]
                });

             $('#jqBulletGraph3').jqBulletGraph({
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
                                    horizontalOffset: 0.6,
                                    verticalOffset: 0.02
                                }
                            ],
                quantitativeScale: {
                    name: 'Main Scale',
                    minimum: 0,
                    maximum: 100,
                    background: GreenLinear,
                    // qualitativeRanges:
                    //     [
                    //         {
                    //             value: 47,
                    //             fillStyle: range1Gradient
                    //         },
                    //         {
                    //             value: 70,
                    //             fillStyle: range2Gradient
                    //         }
                    //     ]
                },
                // comparativeMeasures:
                //     [
                //         {
                //             title: 'Comparative Measure',
                //             value: 80,
                //             fillStyle: comparativeMeasureGradient
                //         }
                //     ],
                featuredMeasures:
                    [
                        {
                            title: 'Featured Measure',
                            value: 0,
                            innerOffset: 0.4,
                            outerOffset: 0.6,
                            fillStyle: featuredMeasureGradient
                        }
                    ]
            });

              $('#jqBulletGraph4').jqBulletGraph({
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
                                    horizontalOffset: 0.6,
                                    verticalOffset: 0.02
                                }
                            ],
                quantitativeScale: {
                    name: 'Main Scale',
                    minimum: 0,
                    maximum: 100,
                    background: GreenLinear,
                    // qualitativeRanges:
                    //     [
                    //         {
                    //             value: 47,
                    //             fillStyle: range1Gradient
                    //         },
                    //         {
                    //             value: 70,
                    //             fillStyle: range2Gradient
                    //         }
                    //     ]
                },
                // comparativeMeasures:
                //     [
                //         {
                //             title: 'Comparative Measure',
                //             value: 80,
                //             fillStyle: comparativeMeasureGradient
                //         }
                //     ],
                featuredMeasures:
                    [
                        {
                            title: 'Featured Measure',
                            value: 0,
                            innerOffset: 0.4,
                            outerOffset: 0.6,
                            fillStyle: featuredMeasureGradient
                        }
                    ]
            });

            $('#jqBulletGraph2').jqBulletGraph({
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
                //     // duration: 0
                // },
                annotations: [
                                {
                                    text: ' Outdoor Coil',
                                    fillStyle: '#000',
                                    font: '15px Verdana',
                                    horizontalOffset: 0.5,
                                    verticalOffset: 0.97
                                },
                                 {
                                    text: '\u00B0C',
                                    fillStyle: '#000',
                                    font: '15px Verdana',
                                    horizontalOffset: 0.55,
                                    verticalOffset: 0.02
                                }
                            ],

                quantitativeScale: {
                    name: 'Main Scale',
                    minimum: -10,
                    maximum: 17,

                    background: GreenLinear,
                    qualitativeRanges:
                        [
                            {
                                value: 0,
                                fillStyle: BlueLinear
                            },
                            {
                                value: 15,
                                fillStyle: OrangeLinear
                            },
                            {
                                value: 17,
                                fillStyle: '#000'
                            }
                        ]
                },
                // comparativeMeasures:
                //     [
                //         {
                //             title: 'Comparative Measure',
                //             value: 80,
                //             fillStyle: comparativeMeasureGradient
                //         }
                //     ],
                featuredMeasures:
                    [
                        {
                            title: 'Featured Measure',
                            value: 0,
                            innerOffset: 0.4,
                            outerOffset: 0.6,
                            fillStyle: featuredMeasureGradient
                        }
                    ],
            });

        });