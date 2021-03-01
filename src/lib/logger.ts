const log = (target: string, ..._messages) => {
  console.log('------ ', target);
};

log.deep = (target: string, ...messages) => {
  console.log('------ ', target, JSON.stringify(messages, null, 4));
};
export default log;
