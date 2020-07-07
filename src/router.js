import Page1 from './page1/Page1'
import Page2 from './page2/Page2'
import Page3 from './page3/Page3'

const routes = [
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2,
    children: [
      {
        path: 'page3',
        component: Page3
      }
    ]
  }
]

export default routes