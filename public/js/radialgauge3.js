 var values = { slp: '700', dlp:'700', eev1:'00.0', eev2:'00.0',evapt:'00.0',ssh:'00.0',slt:'00.0',condt:'00.0',dsh:'00.0',dlt:'00.0',capacity:'00.0',indoorf:'00.0',outdoorf:'00.0',deice:'00.0',deicemax:'0',deicemin:'0'};
 var customvalue2=[' ',' ',' ',' ',' ',' ',' ',' ',' ',' '];
 $(document).ready(function () {
 var tempcolor = '#ffa704';
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
                background: 'transparent',//fff  f5f5f5
                border: {
                    lineWidth: 6,
                    strokeStyle: '#000',//76786A  f5f5f5
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
                                {
                                    text: 'psig',
                                    fillStyle: '#17f4e3',
                                    font: '12px Verdana',
                                    horizontalOffset: 0.26,
                                    verticalOffset: 0.912
                                },
                                {
                                    text: 'kPa',
                                    fillStyle: '#17f4e3',
                                    font: '12px Verdana',
                                    horizontalOffset: 0.31,
                                    verticalOffset: 0.835
                                },
                                {
                                    text: '\u00B0C', //\u00B0C
                                    fillStyle: tempcolor,
                                    font: '12px Verdana',
                                    horizontalOffset: 0.2,
                                    verticalOffset: 0.97
                                },
                            ],
                scales: [
                            {
                             minimum: 275,
                             maximum: 4620,
                             startAngle: 135,
                             endAngle: 405,
                             ranges: [
                                        {
                                            outerOffset: 0.69,
                                            innerStartOffset: 0.7,
                                            innerEndOffset: 0.7,
                                            startValue: 275,
                                            endValue: 4620,
                                            fillStyle: '#19f3e3'
                                        }
                                     ],
                             needles: [
                                        {
                                            value: values.slp,
                                            type: 'pointer',
                                            outerOffset: 0.95,
                                            mediumOffset: 0.7,
                                            width: 5,
                                            fillStyle: '#17f4e3',
                                            zIndex: 1,
                                        },
                                        {
                                            value: values.dlp,
                                            type: 'pointer',
                                            outerOffset: 0.95,
                                            mediumOffset: 0.7,
                                            width: 10,
                                            fillStyle: tempcolor, //red
                                            zIndex: 0,
                                        }
                                      ]
                         },
                         {
                             minimum: 40,
                             maximum: 670,
                             // interval: 50,
                             customTickMarks: [50 ,100, 150, 200, 250,300,350,400,450,500,550,600,650],
                             startAngle: 135,
                             endAngle: 405,
                             // font: '15px Verdana',
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.82,
                                 fillStyle: '#19f3e3'
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 3,
                                 offset: 0.72,
                                 strokeStyle: '#19f3e3'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 10,
                                 offset: 0.72,
                                 strokeStyle: '#19f3e3'
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.72,
                                            innerStartOffset: 0.70,
                                            innerEndOffset: 0.70,
                                            startValue: 540,
                                            endValue: 670,
                                            fillStyle: tempcolor,
                                            zIndex:2,
                                        },
                                        {
                                            outerOffset: 0.72,
                                            innerStartOffset: 0.70,
                                            innerEndOffset: 0.70,
                                            startValue: 40,
                                            endValue: 100,
                                            fillStyle: '#00baff', //deice blue
                                            zIndex:2,
                                        },
                                        {
                                            outerOffset: 0.72,
                                            innerStartOffset: 0.73,
                                            innerEndOffset: 0.73,
                                            startValue: 40,
                                            endValue: 670,
                                            fillStyle: '#19f3e3',
                                            zIndex:2,
                                        }
                                     ]
                         },
                         {
                             minimum: 40,
                             maximum: 670,
                             interval: 50,
                             startAngle: 135,
                             endAngle: 405,

                             majorTickMarks: {
                                 length: 8,
                                 lineWidth: 2,
                                 offset: 0.72,
                                 strokeStyle: '#19f3e3'
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 10,
                                 offset: 0.72,
                                 strokeStyle: '#19f3e3'
                             },

                         },
                         {
                            minimum: 275,
                             maximum: 500,
                             interval:225,
                             startAngle: 135,
                             endAngle: 149,
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 3,
                                 offset: 0.636,
                                 strokeStyle: '#19f3e3'
                             },
                         },
                         {
                             minimum: 500,
                             maximum: 4500,
                             interval:500,
                              labels: {
                                offset: 0.59,
                                fillStyle: '#19f3e3'
                             },
                             // customTickMarks: [500 ,1000, 1500, 2000, 2500,3000,3500,4000,4500],
                             startAngle: 149,
                             endAngle: 397.5,
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 3,
                                 offset: 0.636,
                                 strokeStyle: '#19f3e3'
                             },
                              minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 100,
                                 offset: 0.665,
                                 strokeStyle: '#19f3e3'
                             }
                         },
                         {
                            minimum: 4500,
                             maximum: 4620,
                             interval: 120,
                             startAngle: 397.5,
                             endAngle: 405,
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 3,
                                 offset: 0.636,
                                 strokeStyle: '#19f3e3'
                             },
                         },
                        {
                             minimum: -20,
                             maximum: -15,
                             interval: 5,
                             startAngle: 136.4,
                             endAngle: 141.65,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: -20,
                                            endValue: -15,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },
                           {
                             minimum: -15,
                             maximum: -10,
                             interval: 5,
                             startAngle: 141.65,
                             endAngle: 147.2,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: -15,
                                            endValue: -10,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },


                         {
                             minimum: -10,
                             maximum: -5,
                             interval: 5,
                             startAngle: 147.2,
                             endAngle: 153.8,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: -10,
                                            endValue: -5,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },
                         {
                             minimum: -5,
                             maximum: 0,
                             interval: 5,
                             startAngle: 153.8,
                             endAngle: 161.25,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: -5,
                                            endValue: 0,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },
                        {
                             minimum: 0,
                             maximum: 5,
                             interval: 5,
                             startAngle: 161.25,
                             endAngle: 169.7,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 0,
                                            endValue: 5,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },


                          {
                             minimum: 5,
                             maximum: 10,
                             interval: 5,
                             startAngle: 169.7,
                             endAngle: 179.11,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 5,
                                            endValue: 10,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },

                          {
                             minimum: 10,
                             maximum: 15,
                             interval: 5,
                             startAngle: 179.11,
                             endAngle: 189.8,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 10,
                                            endValue: 15,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },

                         {
                             minimum: 15,
                             maximum: 20,
                             interval: 5,
                             startAngle: 189.8,
                             endAngle: 201.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 15,
                                            endValue: 20,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },

                          {
                             minimum: 20,
                             maximum: 25,
                             interval: 5,
                             startAngle: 201.5,
                             endAngle: 214.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 20,
                                            endValue: 25,
                                            fillStyle: tempcolor,
                                        }
                                     ]
                         },

                         {
                             minimum: 25,
                             maximum: 30,
                             interval: 5,
                             startAngle: 214.5,
                             endAngle: 229,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 25,
                                            endValue: 30,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },

                          {
                             minimum: 30,
                             maximum: 35,
                             interval: 5,
                             startAngle: 229,
                             endAngle: 245,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 30,
                                            endValue: 35,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },
                         {
                             minimum: 35,
                             maximum: 40,
                             interval: 5,
                             startAngle: 245,
                             endAngle: 262.15,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 35,
                                            endValue: 40,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },

                         {
                             minimum: 40,
                             maximum: 45,
                             interval: 5,
                             startAngle: 262.15,
                             endAngle: 281.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 40,
                                            endValue: 45,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },

                         {
                             minimum: 45,
                             maximum: 50,
                             interval: 5,
                             startAngle: 281.5,
                             endAngle: 302.65,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 45,
                                            endValue: 50,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },

                         {
                             minimum: 50,
                             maximum: 55,
                             interval: 5,
                             startAngle: 302.65,
                             endAngle: 325.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 50,
                                            endValue: 55,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },

                         {
                             minimum: 55,
                             maximum: 60,
                             interval: 5,
                             startAngle: 325.5,
                             endAngle: 349.5,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 55,
                                            endValue: 60,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },

                          {
                             minimum: 60,
                             maximum: 65,
                             interval: 5,
                             startAngle: 349.5,
                             endAngle: 375.8,
                             labels: {
                                // font: '15px Verdana',
                                 offset: 0.97,
                                 fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                 length: 14,
                                 lineWidth: 2,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                 visible: true,
                                 length: 8,
                                 lineWidth: 2,
                                 interval: 1,
                                 offset: 0.88,
                                 strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 60,
                                            endValue: 65,
                                            fillStyle: tempcolor
                                        }
                                     ]
                         },
                          {
                             minimum: 65,
                             maximum: 70,
                             interval: 5,
                             startAngle: 375.8,
                             endAngle: 403.2,//390
                             labels: {
                                // font: '15px Verdana',
                                offset: 0.97,
                                fillStyle: tempcolor
                             },
                             majorTickMarks: {
                                length: 14,
                                lineWidth: 2,
                                offset: 0.88,
                                strokeStyle: tempcolor
                             },
                             minorTickMarks: {
                                visible: true,
                                length: 8,
                                lineWidth: 2,
                                interval: 1,
                                offset: 0.88,
                                strokeStyle: tempcolor
                             },
                             ranges: [
                                        {
                                            outerOffset: 0.87,
                                            innerStartOffset: 0.88,
                                            innerEndOffset: 0.88,
                                            startValue: 65,
                                            endValue: 70,
                                            fillStyle: tempcolor
                                        }
                                    ]
                         }

                ]
            });


    setInterval(function(){
        var scales = $('#jqRadialGauge').jqRadialGauge('option', 'scales');
        // scales[2].needles[0].value =2000;
        scales[0].needles[0].value =values.slp;
        scales[0].needles[1].value =values.dlp;
        // scales[2].needles[1].value = 500;
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
        updatebulletchart(CapacityDisplay,0,100,values.capacity,"#17f4e3");
        updatebulletchart(IndoorDisplay,0,100,values.indoorf,"#17f4e3");
        updatebulletchart(OutdoorDisplay,0,100,values.outdoorf,"#17f4e3");
        // console.log(values.deice);
        updatebulletchart2(DeIceDisplay,values.deicemin,values.deicemax,values.deice,customvalue2,custommark,"#00baff");

        DonutDisplay1=updatedonutchart(DonutDisplay1,values.capacity,"1");
        DonutDisplay2=updatedonutchart(DonutDisplay2,values.capacity,"2");

        var slpdlp=0;
        if (values.slp!=0){
            slpdlp = values.dlp/values.slp;
            slpdlp = slpdlp.toFixed(1);
        }

        displaypanel1 = updatedisplaypanel(displaypanel1,"Evap.T",values.evapt,"\u00B0C","#184655","#17f4e3");
        displaypanel2 = updatedisplaypanel(displaypanel2,"EEV1",values.eev1,"%","#184655","#fff");
        displaypanel3 = updatedisplaypanel(displaypanel3,"Cond.T",values.condt,"\u00B0C","#184655","#ffa704");
        displaypanel12 = updatedisplaypanel(displaypanel12,"SSH",values.ssh,"\u00B0C","#184655","#17f4e3");
        displaypanel22 = updatedisplaypanel(displaypanel22,"EEV2",values.eev2,"%","#184655","#fff");
        displaypanel32 = updatedisplaypanel(displaypanel32,"DSH",values.dsh,"\u00B0C","#184655","#ffa704");
        displaypanel13 = updatedisplaypanel(displaypanel13,"SLT",values.slt,"\u00B0C","#184655","#17f4e3");
        displaypanel23 = updatedisplaypanel(displaypanel23,"Comp Ratio",slpdlp,"","#184655","#fff");
        displaypanel33 = updatedisplaypanel(displaypanel33,"DLT",values.dlt,"\u00B0C","#184655","#ffa704");

        // var capacity = $('#jqBulletGraph1').jqxBulletChart('val',values.capacity);
        // var deice = $('#jqBulletGraph2').jqxBulletChart('val',values.deice);
        // var indoorf = $('#jqBulletGraph3').jqxBulletChart('val',values.indoorf);
        // var outdoorf = $('#jqBulletGraph4').jqxBulletChart('val',values.outdoorf);



        // var capacity = $('#jqBulletGraph1').jqBulletGraph('option','featuredMeasures');
        // var maxdeice = $('#jqBulletGraph2').jqBulletGraph('option','quantitativeScale');
        // var deice = $('#jqBulletGraph2').jqBulletGraph('option','featuredMeasures');
        // var mindeice = $('#jqBulletGraph2').jqBulletGraph('option','quantitativeScale');
        // var indoorf = $('#jqBulletGraph3').jqBulletGraph('option','featuredMeasures');
        // var outdoorf = $('#jqBulletGraph4').jqBulletGraph('option','featuredMeasures');
        // capacity[0].value =values.capacity;

        // maxdeice.maximum = values.deice+10;
        // mindeice.minimum = values.deice-10;

        // indoorf[0].value =values.indoorf;
        // outdoorf[0].value =values.outdoorf;
        $('#jqRadialGauge').jqRadialGauge('update');
        // $('#jqBulletGraph1').jqBulletGraph('update');
        
        // $('#jqBulletGraph3').jqBulletGraph('update');
        // // $('#jqBulletGraph4').jqBulletGraph('update');
        // deice[0].value =values.deice;
        // $('#jqBulletGraph2').jqBulletGraph('update');
    },3000);
    doUpdate();
  });