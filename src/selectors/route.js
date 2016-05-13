import { routeNodeSelector } from 'redux-router5';

export default function routeSelector(node, reducerKey = 'router') {
  return (state, props) => routeNodeSelector(node, reducerKey)(state.toJS(), props);
}
