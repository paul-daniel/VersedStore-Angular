import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
} from '@angular/animations';
export const slideInAnimation = trigger('routeAnimations', [
  transition('Product => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s 1s ease-in-out', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Product => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s 1s ease-in-out', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Checkout => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s 1s ease-in-out', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Checkout => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s 1s ease-in-out', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Home => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s 1s ease-in-out', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Cart => Product', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s 1s ease-in-out', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Cart => Home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s 1s ease-in-out', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Cart => Checkout', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s 1s ease-in-out', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('Checkout => Home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s 1s ease-in-out', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
