const EVENT = {
  PROCESS: {
    EXIT: 'process:exit',
    EXIT_CODE: {
      FAILURE: 'process:exit-code:failure',
    },
  },
  DATABASE: {
    RECORDSET: {
      CREATE: 'database:recordset:create',
      CLOSED: 'database:recordset:closed',
    },
    RECORD: {
      CREATE: 'database:record:create',
      UPDATE: 'database:record:update',
      CLOSE: 'database:record:close',
    },
    PROCESS: {
      ENDED: 'database:process:ended',
    },
  },
  SUITE: {
    STARTED: 'suite:started',
    HOOKS: {
      REGISTER: 'suite:hooks:register',
      UNREGISTER: 'suite:hooks:unregister',
    },
    ENDED: 'suite:ended',
  },
  SPEC: {
    SETUP: {
      REGISTER: 'spec:before-each:register',
      UNREGISTER: 'spec:before-each:unregister',
    },
    TEARDOWN: {
      REGISTER: 'spec:after-each:register',
      UNREGISTER: 'spec:after-each:unregister',
    },
    STARTED: 'spec:started',
    SUCCESS: 'spec:success',
    IGNORE: 'spec:ignore',
    FAILURE: 'spec:failure',
    ENDED: 'spec:ended',
  },
  REPORTER: {
    REPORT: {
      START: 'reporter:report:start',
      ENDED: 'reporter:report:ended',
    },
  },
};

const RESULT = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  IGNORED: 'IGNORED',
};

const RESULTS = Object.values(RESULT);

const NODE_MAJOR_VERSION = Number.parseInt((/(\d+)./).exec(process.version)[1], 10);

module.exports = {
  EVENT,
  NODE_MAJOR_VERSION,
  RESULT,
  RESULTS,
};
