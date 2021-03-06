import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  GeoComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'

import {
  BarChart,
  EffectScatterChart,
  LineChart,
  LinesChart,
  PictorialBarChart,
  PieChart,
  RadarChart,
} from 'echarts/charts'

use([
  CanvasRenderer,
  GridComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GeoComponent,
  PieChart,
  PictorialBarChart,
  LineChart,
  BarChart,
  RadarChart,
  LinesChart,
  EffectScatterChart,
])

export const install: UserModule = () => {}
