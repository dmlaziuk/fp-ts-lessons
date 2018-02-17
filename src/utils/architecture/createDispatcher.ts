import { tag } from 'rxjs-spy/operators/tag'
import { Subject } from 'rxjs/Subject'

import { Intent } from './createIntent'


export const createDispacther = () => {
  const dispatcher$ = new Subject<Intent>()
  const stream$ = dispatcher$.asObservable().pipe(tag(`dispatcher`))
  const dispatch = (intent: Intent) => dispatcher$.next(intent)
  return { dispatcher$: stream$, dispatch }
}