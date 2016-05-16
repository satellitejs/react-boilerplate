import repositorySaga from './repository';

export default function* rootSaga() {
  yield [
    repositorySaga(),
  ];
}
