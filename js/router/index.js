import CompaignProduct from '../components/CompaignProduct.js';
import EventCredential from '../components/EventCredential.js';
import EventDetail from '../components/EventDetail.js';
import EventRecord from '../components/EventRecord.js';
import EventRedemption from '../components/EventRedemption.js';
import CompaignLayout from '../views/CompaignLayout.js';
import EventLayout from '../views/EventLayout.js';
import EventList from '../views/EventList.js';
import GiftList from '../views/GiftList.js';
import RegularCompaign from '../views/RegularCompaign.js';

const routes = [
  {
    name: 'home',
    path: '/',
    component: EventList,
  },
  {
    path: '/event/:id',
    component: EventLayout,
    children: [
      {
        name: 'event-detail',
        path: '',
        component: EventDetail,
      },
      {
        name: 'event-credential',
        path: 'credential',
        component: EventCredential,
      },
      {
        name: 'event-record',
        path: 'record',
        component: EventRecord,
      },
      {
        // 集滿點數可轉換為禮物券
        name: 'event-redemption',
        path: 'redemption',
        component: EventRedemption,
      },
    ],
  },
  {
    name: 'gifts',
    path: '/gifts',
    component: GiftList,
  },
  {
    name: 'compaign',
    path: '/compaign',
    component: RegularCompaign,
  },
  {
    path: '/compaign/:product',
    component: CompaignLayout,
    children: [
      {
        name: 'compaign-product',
        path: '',
        component: CompaignProduct,
      },
    ],
  },
];

const router = new VueRouter({ routes });

export default router;