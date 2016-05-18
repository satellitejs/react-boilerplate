import { createAction } from 'redux-actions';

export default function bulkCreateActions(actionMap) {
  const actions = {};
  Object.keys(actionMap).forEach((name) => {
    actions[name] = createAction(actionMap[name]);
    actions[name].type = actionMap[name];
  });
  return actions;
}
