import repository from './repository';

export default function* rootSaga() {
  yield [
    ...repository,
  ];
}
