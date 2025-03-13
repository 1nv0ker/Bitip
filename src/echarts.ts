import * as echarts from 'echarts/core';
import {
  LineChart
} from 'echarts/charts';
import type {
  // 系列类型的定义后缀都为 SeriesOption
  LineSeriesOption
} from 'echarts/charts';

import type {
  ComposeOption,
} from 'echarts/core';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | LineSeriesOption
>;

// 注册必须的组件
echarts.use([
  LineChart,
]);
