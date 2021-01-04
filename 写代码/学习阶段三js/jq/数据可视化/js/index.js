// 监控模块滑动
(
    function() {
        $('.monitor .tabs a').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            $('.monitor .content').eq($(this).index()).show().siblings('.content').hide()
        });

        $('.marquee-view .marquee').each(function(index, el) {
            var rows = $(this).children().clone();
            $(this).append(rows);

        })
    }
)();
//点位统计饼图模块
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.pie'));

    // 指定图表的配置项和数据
    var option = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },


        series: [

            {
                name: '面积模式',
                type: 'pie',
                radius: ['10%', '70% '],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 6,
                    length2: 8
                },
                color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 图表自动缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();

// 用户统计柱形模块
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.users .chart .bar'));

    // 中间省略的数据  准备三项
    var item = {
            name: '',
            value: 1200,
            // 柱子颜色
            itemStyle: {
                color: '#254065'
            },
            // 鼠标经过柱子颜色
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            },
            // 工具提示隐藏
            tooltip: {
                extraCssText: 'opacity:0'
            },
        }
        // 指定图表的配置项和数据
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' } // 1 结束颜色
            ]
        ),
        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'item',
            // 轴触发提示才有效
            // axisPointer: {
            //     // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
            //     type: 'line'
            // }
        },
        // 图表边界控制
        grid: {
            top: '3%',
            right: '3%',
            bottom: '3%',
            left: '0%',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [{
            // 使用类目，必须有data属性
            type: 'category',
            // 使用 data 中的数据设为刻度文字
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            // 刻度设置
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                // 不显示刻度
                show: false
            },
            // x坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // x坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width: 8, // x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            }
        }],
        // 控制y轴
        yAxis: [{
            // 使用数据的值设为刻度文字
            type: 'value',
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间

                // 不显示刻度
                show: false
            },
            // y坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
            // y轴 分割线的样式 
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }

        }],

        series: [{
            // 图表数据名称
            name: '用户统计',
            // 图表类型
            type: 'bar',
            // 柱子宽度
            barWidth: '60%',
            // 数据
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
        }]
    };



    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 图表自动缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();

// 订单模块
(function() {
    // 数据准备
    var data = {
        day365: { orders: '20,301,987', amount: '99834' },
        day90: { orders: '301,987', amount: '9834' },
        day30: { orders: '1,987', amount: '3834' },
        day1: { orders: '987', amount: '834' }
    };

    $('.order .filter a').on('click', function() {
        var key = $(this).text();
        key = parseInt(key);
        key = key == 24 ? 1 : key;
        key = 'day' + key
        $(this).addClass('active').siblings().removeClass('active');
        var h4s = $('.order .data h4');
        h4s.eq(0).text(data[key].orders);
        h4s.eq(1).text(data[key].amount);
    })

    // 定时切换
    var as = $('.order .filter a')
    var index = 0;
    var timer = setInterval(function() {
        index = index == 4 ? 0 : index;
        as.eq(index).click();
        index++;
    }, 1000)

    // 鼠标经过停止自动切换
    $('.order').hover(function() {
        clearInterval(timer)
    }, function() {
        clearInterval(timer);
        timer = setInterval(function() {
            index = index == 4 ? 0 : index;
            as.eq(index).click();
            index++;
        }, 1000)

    })
})();

// 销售统计模块
(function() {
    var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.sales .line'));
    // 使用刚指定的配置项和数据显示图表。

    // 配置选项
    var option = {

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
            containLabel: true,
            borderColor: '#012f4a', // 边框颜色
            show: true
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false, // 去除轴内间距
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [

            {
                name: '预期销售额',
                type: 'line',
                smooth: true,
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            },
            {
                name: '实际销售额',
                type: 'line',
                smooth: true,
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            }
        ]
    };

    // 点击切换
    $('.sales .caption a').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            // 数据切换


            option.series[0].data = data[this.dataset.key][0];
            option.series[1].data = data[this.dataset.key][1];
            myChart.setOption(option);


        })
        // 自动切换
    var as = $('.sales .caption a')
    var index = 0;
    var timer = setInterval(function() {
        index = index == 4 ? 0 : index;
        as.eq(index).click();
        index++;

    }, 1000)
    $('.sales').hover(function() {
        clearInterval(timer)
    }, function() {
        clearInterval(timer);
        timer = setInterval(function() {
            index = index == 4 ? 0 : index;
            as.eq(index).click();
            index++;

        }, 1000)
    })

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    // 图表自动缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();

// 渠道分步雷达图
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    // 2.指定配置
    var dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1]
    ];
    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };
    var option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ["60%", "10%"]
        },
        radar: {
            indicator: [
                { name: "机场", max: 100 },
                { name: "商场", max: 100 },
                { name: "火车站", max: 100 },
                { name: "汽车站", max: 100 },
                { name: "地铁", max: 100 }
            ],
            // 修改雷达图的大小
            radius: "50%",
            shape: "circle",
            // 分割的圆圈个数
            splitNumber: 4,
            name: {
                // 修饰雷达图文字的颜色
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            // 分割的圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴的线修改为白色半透明
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        series: [{
            name: "北京",
            type: "radar",
            // 填充区域的线条颜色
            lineStyle: {
                normal: {
                    color: "#fff",
                    width: 1,
                    opacity: 0.5
                }
            },
            data: [
                [90, 19, 56, 11, 34]
            ],
            // 设置图形标记 （拐点）
            symbol: "circle",
            // 这个是设置小圆点大小
            symbolSize: 5,
            // 设置小圆点颜色
            itemStyle: {
                color: "#fff"
            },
            // 让小圆点显示数据
            label: {
                show: true,
                fontSize: 8
            },
            // 修饰我们区域填充的背景颜色
            areaStyle: {
                color: "rgba(238, 197, 102, 0.6)"
            }
        }]
    };
    // 3.把配置和数据给对象
    myChart.setOption(option);
    // 图表自动缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();

// 季度 饼形图 半圆形 
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".gauge"));
    // 2. 指定数据和配置
    var option = {
            series: [{
                type: 'pie',
                // 放大图形
                radius: ['130%', '150%'],
                // 移动下位置  套住50%文字
                center: ['48%', '80%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                // 起始角度，支持范围[0, 360]
                startAngle: 180,
                data: [{
                        value: 100,
                        itemStyle: {
                            // 颜色渐变#00c9e0->#005fc1
                            color: new echarts.graphic.LinearGradient(
                                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                0,
                                0,
                                0,
                                1, [
                                    { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                    { offset: 1, color: "#005fc1" } // 1 结束颜色
                                ]
                            )
                        }
                    }, // 不需要名称
                    { value: 100, itemStyle: { color: '#12274d' } }, // 颜色#12274d
                    { value: 200, itemStyle: { color: 'transparent' } } // 透明隐藏第三块区域
                ]
            }]
        }
        // 3. 把数据和配置给实例对象
    myChart.setOption(option);
    // 图表自动缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();

// 排行榜
(function() {
    var hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ];
    var supHTML = "";
    $.each(hotData, function(index, item) {
        // console.log(item);

        supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
        ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
    });
    $(".sup").html(supHTML);
    // tab栏切换
    $('.province .sup').children().on('mouseenter', function(e) {
            e.stopPropagation();
            $(this).addClass('active').siblings().removeClass('active');
            var shtml = ''
            $.each(hotData[$(this).index()].brands, function(index, item) {

                shtml += `<li><span>${item.name}</span><span>${item.num} <s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
            });

            $(".sub").html(shtml);

        })
        // 默认激活第一个li
    $('.province .sup').children().eq(0).mouseenter();

    // 定时播放
    var lis = $('.province .sup').children();
    var index = 0;
    var timer = setInterval(function() {
        index = index == 5 ? 0 : index;
        lis.eq(index).mouseenter();
        index++;

    }, 1000)

    // $('.province .sup').hover(function() {
    //     // clearInterval(timer);
    //     console.log('111111');

    // }, function() {

    // });
    $('.top').hover(function() {
        console.log('11')
        clearInterval(timer)
    }, function() {
        clearInterval(timer)
        timer = setInterval(function() {
            index = index == 5 ? 0 : index;
            lis.eq(index).mouseenter();
            index++;

        }, 1000)
    });



})();