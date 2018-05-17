 var values = { slp: '275', dlp:'275', eev1:'00.0', eev2:'00.0',evapt:'00.0',ssh:'00.0',slt:'00.0',condt:'00.0',dsh:'00.0',dlt:'00.0',capacity:'00.0',indoorf:'00.0',outdoorf:'00.0',deice:'00.0'};
 $(document).ready(function () {
 
 var anchorGradient = {
                type: 'radialGradient',
                x0: 0.35,
                y0: 0.35,
                r0: 0.0,
                x1: 0.35,
                y1: 0.35,
                r1: 1,
                colorStops: [{ offset: 0, color: '#4F6169' },
                             { offset: 1, color: '#252E32'}]
            };

            $('#jqRadialGauge').jqRadialGauge({
                background: '#fff',//fff
                border: {
                    lineWidth: 6,
                    strokeStyle: '#fff',//76786A
                    padding: 0
                },
                shadows: {
                    enabled: true
                },
                anchor: {
                    visible: true,
                    fillStyle: '#fff',
                    radius: 0.1
                },
                tooltips: {
                    disabled: false,
                    highlighting: true
                },
                // animation: {
                //     duration: 1
                // },
                annotations: [
                                // {
                                //     text: 'psig',
                                //     fillStyle: '#000',
                                //     font: '12px Verdana',
                                //     horizontalOffset: 0.13,
                                //     verticalOffset: 0.55
                                // },
                                // {
                                //     text: 'kPa',
                                //     fillStyle: '#000080',
                                //     font: '12px Verdana',
                                //     horizontalOffset: 0.2,
                                //     verticalOffset: 0.55
                                // },
                                // {
                                //     text: '\u00B0C', //\u00B0C
                                //     fillStyle: '#f00',
                                //     font: '12px Verdana',
                                //     horizontalOffset: 0.05,
                                //     verticalOffset: 0.55
                                // },
                                // {
                                //     text: 'EEV 2:',
                                //     fillStyle: '#000',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.75,
                                //     verticalOffset: 0.02
                                // },
                                // {
                                //     name: 'eev2',
                                //     text: values.eev2,
                                //     fillStyle: '#000',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.87,
                                //     verticalOffset: 0.02
                                // },
                                // {
                                //     text: '%',
                                //     fillStyle: '#000',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.94,
                                //     verticalOffset: 0.02
                                // },
                                // {
                                //     text: 'Cond. T',
                                //     fillStyle: '#f00',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.67,
                                //     verticalOffset: 0.6
                                // },
                                // {
                                //     name:'condt',
                                //     text: values.condt,
                                //     fillStyle: '#f00',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.79,
                                //     verticalOffset: 0.6
                                // },

                                // {
                                //     text: '\u00B0C', //\u00B0C
                                //     fillStyle: '#f00',
                                //     font: '12px Verdana',
                                //     horizontalOffset: 0.84,
                                //     verticalOffset: 0.6
                                // },

                                // {
                                //     text: 'DSH',
                                //     fillStyle: '#f00',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.697,
                                //     verticalOffset: 0.65
                                // },
                                // {
                                //     name:'dsh',
                                //     text: values.dsh,
                                //     fillStyle: '#f00',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.79,
                                //     verticalOffset: 0.65
                                // },
                                // {
                                //     text: '\u00B0C', //\u00B0C
                                //     fillStyle: '#f00',
                                //     font: '12px Verdana',
                                //     horizontalOffset: 0.84,
                                //     verticalOffset: 0.65
                                // },
                                // {
                                //     text: 'DLT',
                                //     fillStyle: '#f00',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.697,
                                //     verticalOffset: 0.7
                                // },
                                // {
                                //     name:'dlt',
                                //     text: values.dlt,
                                //     fillStyle: '#f00',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.79,
                                //     verticalOffset: 0.7
                                // },
                                // {
                                //     text: '\u00B0C', //\u00B0C
                                //     fillStyle: '#f00',
                                //     font: '12px Verdana',
                                //     horizontalOffset: 0.84,
                                //     verticalOffset: 0.7
                                // },
                                // {
                                //     text: 'EEV 1:',
                                //     fillStyle: '#000',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.1,
                                //     verticalOffset: 0.02
                                // },
                                // {
                                //     name: 'eev1',
                                //     text: values.eev1,
                                //     fillStyle: '#000',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.22,
                                //     verticalOffset: 0.02
                                // },
                                // {
                                //     text: '%',
                                //     fillStyle: '#000',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.29,
                                //     verticalOffset: 0.02
                                // },
                                // {
                                //     text: 'Evap T',
                                //     fillStyle: '#00f',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.201,
                                //     verticalOffset: 0.6
                                // },
                                // {
                                //     name:'evapt',
                                //     text: values.evapt, //\u00B0C
                                //     fillStyle: '#00f',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.31,
                                //     verticalOffset: 0.6
                                // },
                                // {
                                //     text: '\u00B0C', //\u00B0C
                                //     fillStyle: '#00f',
                                //     font: '12px Verdana',
                                //     horizontalOffset: 0.36,
                                //     verticalOffset: 0.6
                                // },
                                // {
                                //     text: 'SSH',
                                //     fillStyle: '#00f',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.223,
                                //     verticalOffset: 0.65
                                // },
                                // {
                                //     name:'ssh',
                                //     text: values.ssh, //\u00B0C
                                //     fillStyle: '#00f',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.31,
                                //     verticalOffset: 0.65
                                // },
                                // {
                                //     text: '\u00B0C', //\u00B0C
                                //     fillStyle: '#00f',
                                //     font: '12px Verdana',
                                //     horizontalOffset: 0.36,
                                //     verticalOffset: 0.65
                                // },
                                // {
                                //     text: 'SLT',
                                //     fillStyle: '#00f',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.225,
                                //     verticalOffset: 0.7
                                // },
                                // {
                                //     name:'slt',
                                //     text: values.slt, //\u00B0C
                                //     fillStyle: '#00f',
                                //     font: '15px Verdana',
                                //     horizontalOffset: 0.31,
                                //     verticalOffset: 0.7
                                // },
                                // {
                                //     text: '\u00B0C', //\u00B0C
                                //     fillStyle: '#00f',
                                //     font: '12px Verdana',
                                //     horizontalOffset: 0.36,
                                //     verticalOffset: 0.7
                                // },
                            ],
                scales: [

                         {
                             minimum: 40,
                             maximum: 670,
                             interval: 50,
                             startAngle: 180,
                             endAngle: 360,
                             // font: '15px Verdana',
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.82
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.72,
                                 strokeStyle: '#000'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 10,
                                 offset: 0.72,
                                 strokeStyle: '#000'
                             },
                             ranges: [
                                        // {
                                        //     outerOffset: 1,
                                        //     innerStartOffset: 0.5,
                                        //     innerEndOffset: 0.5,
                                        //     startValue: 30,
                                        //     endValue: 230,
                                        //     fillStyle: '#ffec9e',
                                        //     zIndex:1,
                                        // },
                                        // {
                                        //     outerOffset: 1,
                                        //     innerStartOffset: 0.5,
                                        //     innerEndOffset: 0.5,
                                        //     startValue: 230,
                                        //     endValue: 430,
                                        //     fillStyle: '#ffca72',
                                        //     zIndex:1,
                                        // },
                                        // {
                                        //     outerOffset: 1,
                                        //     innerStartOffset: 0.5,
                                        //     innerEndOffset: 0.5,
                                        //     startValue: 430,
                                        //     endValue: 550,
                                        //     fillStyle: '#ffb130',
                                        //     zIndex:1,
                                        // },
                                        // {
                                        //     outerOffset: 1,
                                        //     innerStartOffset: 0.5,
                                        //     innerEndOffset: 0.5,
                                        //     startValue: 550,
                                        //     endValue: 601,
                                        //     fillStyle: '#ffa816',
                                        //     zIndex:1,
                                        // },
                                        // {
                                        //     outerOffset: 1,
                                        //     innerStartOffset: 0.5,
                                        //     innerEndOffset: 0.5,
                                        //     startValue: 601,
                                        //     endValue: 678,
                                        //     fillStyle: '#ff7000',
                                        //     zIndex:1,
                                        // },
                                        {
                                            outerOffset: 0.72,
                                            innerStartOffset: 0.69,
                                            innerEndOffset: 0.69,
                                            startValue: 540,
                                            endValue: 670,
                                            fillStyle: '#ff0404',
                                            zIndex:2,
                                        },
                                        {
                                            outerOffset: 0.72,
                                            innerStartOffset: 0.69,
                                            innerEndOffset: 0.69,
                                            startValue: 40,
                                            endValue: 100,
                                            fillStyle: '#5693c9',
                                            zIndex:2,
                                        },
                                        {
                                            outerOffset: 0.72,
                                            innerStartOffset: 0.73,
                                            innerEndOffset: 0.73,
                                            startValue: 40,
                                            endValue: 670,
                                            fillStyle: '#000',
                                            zIndex:2,
                                        }
                                     ]
                         },
                         {
                             minimum: 275,
                             maximum: 4620,
                             interval: 500,
                             startAngle: 180,
                             endAngle: 360,
                             labels: {
                                // font: '11px Verdana',
                                offset: 0.59,
                                fillStyle: '#000080'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.645,
                                 strokeStyle: '#000080'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 100,
                                 offset: 0.665,
                                 strokeStyle: '#000080'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.69,
                                            innerStartOffset: 0.7,
                                            innerEndOffset: 0.7,
                                            startValue: 275,
                                            endValue: 4620,
                                            fillStyle: '#000080'
                                        }
                                     ],
                             needles: [
                                        {
                                            value: values.slp,
                                            type: 'pointer',
                                            outerOffset: 0.95,
                                            mediumOffset: 0.7,
                                            width: 5,
                                            fillStyle: '#00f',
                                            zIndex: 2,
                                        },
                                        {
                                            value: values.dlp,
                                            type: 'pointer',
                                            outerOffset: 0.95,
                                            mediumOffset: 0.7,
                                            width: 10,
                                            fillStyle: '#f00', //red
                                            zIndex: 1,
                                        }
                                      ]
                         },

                        {
                             minimum: -20,
                             maximum: -15,
                             interval: 5,
                             startAngle: 181,
                             endAngle: 184.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: -20,
                                            endValue: -15,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },
                           {
                             minimum: -15,
                             maximum: -10,
                             interval: 5,
                             startAngle: 184.5,
                             endAngle: 188,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: -15,
                                            endValue: -10,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },


                         {
                             minimum: -10,
                             maximum: -5,
                             interval: 5,
                             startAngle: 188,
                             endAngle: 192.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: -10,
                                            endValue: -5,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },
                         {
                             minimum: -5,
                             maximum: 0,
                             interval: 5,
                             startAngle: 192.5,
                             endAngle: 197.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: -5,
                                            endValue: 0,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },
                        {
                             minimum: 0,
                             maximum: 5,
                             interval: 5,
                             startAngle: 197.5,
                             endAngle: 203.15,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 0,
                                            endValue: 5,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },


                          {
                             minimum: 5,
                             maximum: 10,
                             interval: 5,
                             startAngle: 203.15,
                             endAngle: 209.3,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 5,
                                            endValue: 10,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },

                          {
                             minimum: 10,
                             maximum: 15,
                             interval: 5,
                             startAngle: 209.3,
                             endAngle: 216.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 10,
                                            endValue: 15,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },

                         {
                             minimum: 15,
                             maximum: 20,
                             interval: 5,
                             startAngle: 216.5,
                             endAngle: 224.3,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 15,
                                            endValue: 20,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },

                          {
                             minimum: 20,
                             maximum: 25,
                             interval: 5,
                             startAngle: 224.3,
                             endAngle: 233,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 20,
                                            endValue: 25,
                                            fillStyle: '#f00',
                                        }
                                     ]
                         },

                         {
                             minimum: 25,
                             maximum: 30,
                             interval: 5,
                             startAngle: 233,
                             endAngle: 242.6,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 25,
                                            endValue: 30,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },

                          {
                             minimum: 30,
                             maximum: 35,
                             interval: 5,
                             startAngle: 242.6,
                             endAngle: 253.2,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 30,
                                            endValue: 35,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },
                         {
                             minimum: 35,
                             maximum: 40,
                             interval: 5,
                             startAngle: 253.2,
                             endAngle: 264.8,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 35,
                                            endValue: 40,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },

                         {
                             minimum: 40,
                             maximum: 45,
                             interval: 5,
                             startAngle: 264.8,
                             endAngle: 277.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 40,
                                            endValue: 45,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },

                         {
                             minimum: 45,
                             maximum: 50,
                             interval: 5,
                             startAngle: 277.5,
                             endAngle: 291.6,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 45,
                                            endValue: 50,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },

                         {
                             minimum: 50,
                             maximum: 55,
                             interval: 5,
                             startAngle: 291.6,
                             endAngle: 306.8,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 50,
                                            endValue: 55,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },

                         {
                             minimum: 55,
                             maximum: 60,
                             interval: 5,
                             startAngle: 306.8,
                             endAngle: 323.1,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 55,
                                            endValue: 60,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },

                          {
                             minimum: 60,
                             maximum: 65,
                             interval: 5,
                             startAngle: 323.1,
                             endAngle: 340.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 60,
                                            endValue: 65,
                                            fillStyle: '#f00'
                                        }
                                     ]
                         },
                          {
                             minimum: 65,
                             maximum: 70,
                             interval: 5,
                             startAngle: 340.5,
                             endAngle: 358.6,
                             labels: {
                                // font: '15px Verdana',
                                offset: 0.97,
                                fillStyle: '#f00'
                             },
                             majorTickMarks: {
                                length: 14,
                                lineWidth: 2,
                                offset: 0.88,
                                strokeStyle: '#f00'
                             },
                             minorTickMarks: {
                                visible: true,
                                length: 8,
                                lineWidth: 2,
                                interval: 1,
                                offset: 0.88,
                                strokeStyle: '#f00'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 65,
                                            endValue: 70,
                                            fillStyle: '#f00'
                                        }
                                    ]
                         }





                ]
            });


    setInterval(function(){
        var scales = $('#jqRadialGauge').jqRadialGauge('option', 'scales');
        scales[1].needles[0].value =values.slp;
        scales[1].needles[1].value =values.dlp;
        var annotations = $('#jqRadialGauge').jqRadialGauge('option','annotations');
        $.each(annotations,function(id,annotation){
            switch (annotation.name){
                case 'evapt':
                    annotation.text = values.evapt;
                    break;
                case 'ssh':
                    annotation.text = values.ssh;
                    break;
                case 'slt':
                    annotation.text = values.slt;
                    break;
                case 'condt':
                    annotation.text = values.condt;
                    break;
                case 'dsh':
                    annotation.text = values.dsh;
                    break;
                case 'dlt':
                    annotation.text = values.dlt;
                    break;
                case 'eev1':
                    annotation.text = values.eev1;
                    break;
                case 'eev2':
                    annotation.text = values.eev2;
                    break;
            }
        });
        var capacity = $('#jqLinearGauge1').jqLinearGauge('option','scales');
        var deice = $('#jqLinearGauge2').jqLinearGauge('option','scales');
        var indoorf = $('#jqLinearGauge3').jqLinearGauge('option','scales');
        var outdoorf = $('#jqLinearGauge4').jqLinearGauge('option','scales');
        capacity[0].needles[0].value =values.capacity;
        deice[0].needles[0].value =values.deice;
        indoorf[0].needles[0].value =values.indoorf;
        outdoorf[0].needles[0].value =values.outdoorf;
        $('#jqRadialGauge').jqRadialGauge('update');
        $('#jqLinearGauge1').jqLinearGauge('update');
        $('#jqLinearGauge2').jqLinearGauge('update');
        $('#jqLinearGauge3').jqLinearGauge('update');
        $('#jqLinearGauge4').jqLinearGauge('update');
    },3000);
    doUpdate();
  });