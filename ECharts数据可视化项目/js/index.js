window.onload = function () {
    (function () {
        var t = null;
        t = setTimeout(time, 1000); //開始运行
        function time() {
            clearTimeout(t); //清除定时器
            dt = new Date();
            var y = dt.getFullYear();
            var mt = dt.getMonth() + 1;
            var day = dt.getDate();
            var h = dt.getHours(); //获取时
            var m = dt.getMinutes(); //获取分
            var s = dt.getSeconds(); //获取秒
            document.querySelector(".showTime").innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
            t = setTimeout(time, 1000); //设定定时器，循环运行     
        }
    })();
    // 柱状图1
    (function () {
        //实例化对象
        var myChart = echarts.init(document.querySelector('.bar1 .chart'));
        //指定配置项和数据
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            //修改图表柱形颜色
            color: ["#2f89cf"],
            //修改图表的大小
            grid: {
                left: '0%',
                top: '10',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "8.5",
                    //x轴样式不显示
                    axisLine: {
                        show: false
                    }
                },


            }],
            yAxis: [{
                type: 'value',
                //修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12",
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)"
                        }
                    },

                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }

            }],
            series: [{
                name: '数值',
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    //修改柱子圆角
                    barBorderRadius: 5
                }
            }]
        };
        //3.把配置项给实例对象
        myChart.setOption(option);
        //让图表跟随屏幕自适应
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })();
    //柱状图2
    (function () {
        var myChart = echarts.init(document.querySelector('.bar2 .chart'));
        // 声明颜色数组
        var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
        var option = {
            grid: {
                top: '10%',
                left: '22%',
                bottom: '10%'
            },
            xAxis: {
                //不显示x轴相关信息
                show: false
            },
            yAxis: [{
                    type: "category",
                    inverse: true,
                    data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                    // 不显示y轴的线
                    axisLine: {
                        show: false
                    },
                    // 不显示刻度
                    axisTick: {
                        show: false
                    },
                    // 把刻度标签里面的文字颜色设置为白色
                    axisLabel: {
                        color: "#fff"
                    }
                },
                {
                    data: [702, 350, 610, 793, 664],
                    inverse: true,
                    // 不显示y轴的线
                    axisLine: {
                        show: false
                    },
                    // 不显示刻度
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 12,
                            color: "#fff"
                        }
                    }
                }
            ],
            series: [{
                    name: '条',
                    type: 'bar',
                    data: [70, 34, 60, 78, 69],
                    yAxisIndex: 0,
                    // 柱子之间的距离
                    barCategoryGap: 50,
                    //柱子的宽度
                    barWidth: 10,
                    // 柱子设为圆角
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            color: function (params) {
                                return myColor[params.dataIndex];

                            }
                        }
                    },
                    // 图形上的文本标签
                    label: {
                        normal: {
                            show: true,
                            // 图形内显示
                            position: "inside",
                            // 文字的显示格式
                            formatter: "{c}%"
                        }
                    },
                },
                {
                    name: '框',
                    type: 'bar',
                    data: [100, 100, 100, 100, 100],
                    yAxisIndex: 1,
                    barCategoryGap: 50,
                    barWidth: 15,
                    itemStyle: {
                        color: "none",
                        borderColor: "#00c1de",
                        borderWidth: 3,
                        barBorderRadius: 15
                    },

                }
            ],
        };
        //3.把配置项给实例对象
        myChart.setOption(option);
        //让图表跟随屏幕自适应
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })();
    //折线图1
    (function () {
        var myChart = echarts.init(document.querySelector('.line1 .chart'));
        //通过Ajax获取的数据
        var yearData = [{
                year: '2020', // 年份
                data: [ // 两个数组是因为有两条线
                    [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                    [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
                ]
            },
            {
                year: '2021', // 年份
                data: [ // 两个数组是因为有两条线
                    [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                    [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
                ]
            }
        ];
        var option = {
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: '#4c9bfd' // 图例文字颜色
                },
                right: '10%' // 距离右边10%
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,
                borderColor: '#012f4a',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false // 去除轴线
                },
                boundaryGap: false // 去除轴内间距
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false // 去除轴线
                },
                boundaryGap: false, //
                splitLine: {
                    lineStyle: {
                        color: "#012f4a"
                    }
                }
            },
            series: [{
                    name: '新增粉丝',
                    data: yearData[0].data[0],
                    type: 'line',
                    smooth: true,
                },
                {
                    name: '新增游客',
                    data: yearData[0].data[1],
                    type: 'line',
                    smooth: true, //设置线为圆滑 让我们的折线带有圆滑
                }
            ]
        };
        //3.把配置项给实例对象
        myChart.setOption(option);
        //让图表跟随屏幕自适应
        window.addEventListener("resize", function () {
            myChart.resize();
        });
        // 点击切换
        $('.line1 h2').on('click', 'a', function () {
            var obj = yearData[$(this).index()];
            option.series[0].data = obj.data[0];
            option.series[1].data = obj.data[1];
            //更换数据后，需要重新渲染
            myChart.setOption(option);
        })
    })();
    //折线图2
    (function () {
        var myChart = echarts.init(document.querySelector('.line2 .chart'));
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: "0%",
                data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: "12"
                }
            },
            grid: {
                top: '30',
                left: '10',
                right: '10',
                bottom: '10',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // x轴线的颜色为   rgba(255,255,255,.2)
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // 修改分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }],
            series: [{
                    name: '播放量',
                    type: 'line',
                    smooth: true,
                    data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
                    // 单独修改线的样式
                    lineStyle: {
                        color: "#0184d5",
                        width: "2"
                    },
                    // 填充区域
                    areaStyle: {
                        // 渐变色，只需要复制即可
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    },
                    // 设置拐点 小圆点
                    symbol: "circle",
                    // 拐点大小
                    symbolSize: 8,
                    // 设置拐点颜色以及边框
                    itemStyle: {
                        color: "#0184d5",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    },
                    // 开始不显示拐点， 鼠标经过显示
                    showSymbol: false,
                },
                {
                    name: "转发量",
                    type: "line",
                    smooth: true,
                    data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
                    lineStyle: {
                        normal: {
                            color: "#00d887",
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [{
                                        offset: 0,
                                        color: "rgba(0, 216, 135, 0.4)"
                                    },
                                    {
                                        offset: 0.8,
                                        color: "rgba(0, 216, 135, 0.1)"
                                    }
                                ],
                                false
                            ),
                            shadowColor: "rgba(0, 0, 0, 0.1)"
                        }
                    },
                    // 设置拐点 小圆点
                    symbol: "circle",
                    // 拐点大小
                    symbolSize: 5,
                    // 设置拐点颜色以及边框
                    itemStyle: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    },
                    // 开始不显示拐点， 鼠标经过显示
                    showSymbol: false,

                }
            ]
        };
        //3.把配置项给实例对象
        myChart.setOption(option);
        //让图表跟随屏幕自适应
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })();
}