import { tap } from 'rxjs/operators'
import { numbersStream } from 'state/numbers'
import { updateNumbersWarning } from 'state/numbersWarning'
import { createUseCase } from 'utils/architecture/createUseCase'

const name = 'numbers/showWarning'

interface DI {
  numbersStream: typeof numbersStream
  updateNumbersWarning: typeof updateNumbersWarning
}

export const showNumbersWarningUseCase = createUseCase<DI>(name,
  (intents, di) =>
    numbersStream
      .pipe(
        tap(numbers =>
          numbers.length === 0
            ? di.updateNumbersWarning(name, `Please set the array's length, but less than 10.`)
            : numbers.length >= 10
              ? di.updateNumbersWarning(name, `Isn't that too much?`)
              : di.updateNumbersWarning(name, 'Good boy!')
        )
      )
)
