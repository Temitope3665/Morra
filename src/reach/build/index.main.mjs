// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0],
      3: [ctc0, ctc0, ctc0],
      4: [ctc0, ctc0],
      5: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v105 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:33:53:application',
    fs: ['at ./index.rsh:32:13:application call to [unknown function] (defined at: ./index.rsh:32:17:function exp)'],
    msg: 'makeGuess',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v105],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v107], secs: v109, time: v108, didSend: v27, from: v106 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v107], secs: v109, time: v108, didSend: v27, from: v106 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v114], secs: v116, time: v115, didSend: v36, from: v113 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v121], secs: v123, time: v122, didSend: v45, from: v120 } = txn3;
  ;
  const v126 = stdlib.protect(ctc0, await interact.showHand(), {
    at: './index.rsh:53:51:application',
    fs: ['at ./index.rsh:52:13:application call to [unknown function] (defined at: ./index.rsh:52:17:function exp)'],
    msg: 'showHand',
    who: 'Alice'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v106, v113, v120, v126],
    evt_cnt: 1,
    funcNum: 3,
    lct: v122,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v128], secs: v130, time: v129, didSend: v55, from: v127 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v128], secs: v130, time: v129, didSend: v55, from: v127 } = txn4;
  ;
  const v131 = stdlib.addressEq(v106, v127);
  stdlib.assert(v131, {
    at: './index.rsh:55:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v136], secs: v138, time: v137, didSend: v65, from: v135 } = txn5;
  ;
  const v139 = stdlib.addressEq(v113, v135);
  stdlib.assert(v139, {
    at: './index.rsh:60:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v144], secs: v146, time: v145, didSend: v75, from: v143 } = txn6;
  ;
  const v147 = stdlib.addressEq(v120, v143);
  stdlib.assert(v147, {
    at: './index.rsh:65:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v148 = stdlib.add(v128, v136);
  const v149 = stdlib.add(v148, v144);
  const v150 = stdlib.eq(v149, v107);
  const v151 = stdlib.eq(v149, v114);
  const v152 = stdlib.eq(v149, v121);
  const v153 = v152 ? stdlib.checkedBigNumberify('./index.rsh:72:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0');
  const v154 = v151 ? stdlib.checkedBigNumberify('./index.rsh:71:25:decimal', stdlib.UInt_max, '2') : v153;
  const v155 = v150 ? stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '1') : v154;
  stdlib.protect(ctc1, await interact.getResult(v155), {
    at: './index.rsh:79:23:application',
    fs: ['at ./index.rsh:78:7:application call to [unknown function] (defined at: ./index.rsh:78:34:function exp)'],
    msg: 'getResult',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v107], secs: v109, time: v108, didSend: v27, from: v106 } = txn1;
  ;
  const v112 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:40:51:application',
    fs: ['at ./index.rsh:39:11:application call to [unknown function] (defined at: ./index.rsh:39:15:function exp)'],
    msg: 'makeGuess',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v106, v112],
    evt_cnt: 1,
    funcNum: 1,
    lct: v108,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v114], secs: v116, time: v115, didSend: v36, from: v113 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v114], secs: v116, time: v115, didSend: v36, from: v113 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v121], secs: v123, time: v122, didSend: v45, from: v120 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v128], secs: v130, time: v129, didSend: v55, from: v127 } = txn4;
  ;
  const v131 = stdlib.addressEq(v106, v127);
  stdlib.assert(v131, {
    at: './index.rsh:55:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v134 = stdlib.protect(ctc0, await interact.showHand(), {
    at: './index.rsh:58:49:application',
    fs: ['at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)'],
    msg: 'showHand',
    who: 'Bob'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v113, v120, v134],
    evt_cnt: 1,
    funcNum: 4,
    lct: v129,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v136], secs: v138, time: v137, didSend: v65, from: v135 } = txn5;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v136], secs: v138, time: v137, didSend: v65, from: v135 } = txn5;
  ;
  const v139 = stdlib.addressEq(v113, v135);
  stdlib.assert(v139, {
    at: './index.rsh:60:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v144], secs: v146, time: v145, didSend: v75, from: v143 } = txn6;
  ;
  const v147 = stdlib.addressEq(v120, v143);
  stdlib.assert(v147, {
    at: './index.rsh:65:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v148 = stdlib.add(v128, v136);
  const v149 = stdlib.add(v148, v144);
  const v150 = stdlib.eq(v149, v107);
  const v151 = stdlib.eq(v149, v114);
  const v152 = stdlib.eq(v149, v121);
  const v153 = v152 ? stdlib.checkedBigNumberify('./index.rsh:72:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0');
  const v154 = v151 ? stdlib.checkedBigNumberify('./index.rsh:71:25:decimal', stdlib.UInt_max, '2') : v153;
  const v155 = v150 ? stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '1') : v154;
  stdlib.protect(ctc1, await interact.getResult(v155), {
    at: './index.rsh:79:23:application',
    fs: ['at ./index.rsh:78:7:application call to [unknown function] (defined at: ./index.rsh:78:34:function exp)'],
    msg: 'getResult',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Charlie(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Charlie expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Charlie expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v107], secs: v109, time: v108, didSend: v27, from: v106 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v114], secs: v116, time: v115, didSend: v36, from: v113 } = txn2;
  ;
  const v119 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:46:55:application',
    fs: ['at ./index.rsh:45:15:application call to [unknown function] (defined at: ./index.rsh:45:19:function exp)'],
    msg: 'makeGuess',
    who: 'Charlie'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v106, v113, v119],
    evt_cnt: 1,
    funcNum: 2,
    lct: v115,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v121], secs: v123, time: v122, didSend: v45, from: v120 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v121], secs: v123, time: v122, didSend: v45, from: v120 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v128], secs: v130, time: v129, didSend: v55, from: v127 } = txn4;
  ;
  const v131 = stdlib.addressEq(v106, v127);
  stdlib.assert(v131, {
    at: './index.rsh:55:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Charlie'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v136], secs: v138, time: v137, didSend: v65, from: v135 } = txn5;
  ;
  const v139 = stdlib.addressEq(v113, v135);
  stdlib.assert(v139, {
    at: './index.rsh:60:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Charlie'
    });
  const v142 = stdlib.protect(ctc0, await interact.showHand(), {
    at: './index.rsh:63:53:application',
    fs: ['at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
    msg: 'showHand',
    who: 'Charlie'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v120, v142],
    evt_cnt: 1,
    funcNum: 5,
    lct: v137,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v144], secs: v146, time: v145, didSend: v75, from: v143 } = txn6;
      
      ;
      const v148 = stdlib.add(v128, v136);
      const v149 = stdlib.add(v148, v144);
      const v150 = stdlib.eq(v149, v107);
      const v151 = stdlib.eq(v149, v114);
      const v152 = stdlib.eq(v149, v121);
      const v153 = v152 ? stdlib.checkedBigNumberify('./index.rsh:72:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0');
      const v154 = v151 ? stdlib.checkedBigNumberify('./index.rsh:71:25:decimal', stdlib.UInt_max, '2') : v153;
      const v155 = v150 ? stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '1') : v154;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v144], secs: v146, time: v145, didSend: v75, from: v143 } = txn6;
  ;
  const v147 = stdlib.addressEq(v120, v143);
  stdlib.assert(v147, {
    at: './index.rsh:65:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Charlie'
    });
  const v148 = stdlib.add(v128, v136);
  const v149 = stdlib.add(v148, v144);
  const v150 = stdlib.eq(v149, v107);
  const v151 = stdlib.eq(v149, v114);
  const v152 = stdlib.eq(v149, v121);
  const v153 = v152 ? stdlib.checkedBigNumberify('./index.rsh:72:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0');
  const v154 = v151 ? stdlib.checkedBigNumberify('./index.rsh:71:25:decimal', stdlib.UInt_max, '2') : v153;
  const v155 = v150 ? stdlib.checkedBigNumberify('./index.rsh:70:27:decimal', stdlib.UInt_max, '1') : v154;
  stdlib.protect(ctc1, await interact.getResult(v155), {
    at: './index.rsh:79:23:application',
    fs: ['at ./index.rsh:78:7:application call to [unknown function] (defined at: ./index.rsh:78:34:function exp)'],
    msg: 'getResult',
    who: 'Charlie'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAGAAEFAgMEJgIBAAAiNQAxGEECMClkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQADcSSEFDEAAgUkkDEAAMSQSRCQ0ARJENARJIhJMNAISEUQoZDUDSTUFFzX/gASBqprPNP8WULA0AzEAEkRCAXRIIQU0ARJENARJIhJMNAISEUQoZEk1A1cgIDX/STUFFzX+gAT5i694NP4WULA0A1cAIDEAEkQ0/yhLAVcAIGdIJDUBMgY1AkIBRUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcgIDX/V0AgNf5JNQUXNf2ABNQMbNY0/RZQsDQDVwAgMQASRDT/NP5QKEsBVwBAZ0ghBTUBMgY1AkIA8UkjDEAAk0klDEAATUglNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf9XICA1/kk1BRc1/YAEl073FzT9FlCwNP80/lAxAFAoSwFXAGBnSCEENQEyBjUCQgCYSCM0ARJENARJIhJMNAISEUQoZEk1AzX/STUFFzX+gATVFRkUNP4WULA0/zEAUChLAVcAQGdIJTUBMgY1AkIAWEiBoI0GiAChIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwMQAoSwFXACBnSCM1ATIGNQJCABsxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v121",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v128",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v114",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v121",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v128",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v144",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f6138038062000f618339810160408190526200002691620001a3565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000d3565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000ca929190620000fd565b50505062000282565b81620000f95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010b9062000245565b90600052602060002090601f0160209004810192826200012f57600085556200017a565b82601f106200014a57805160ff19168380011785556200017a565b828001600101855582156200017a579182015b828111156200017a5782518255916020019190600101906200015d565b50620001889291506200018c565b5090565b5b808211156200018857600081556001016200018d565b6000818303604080821215620001b857600080fd5b80518082016001600160401b038082118383101715620001e857634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200020257600080fd5b8351945060208501915084821081831117156200022f57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b610ccf80620002926000396000f3fe6080604052600436106100795760003560e01c8063873779a11161004b578063873779a1146100e1578063a209ad4e146100f4578063ab53f2c614610107578063f4cedab01461012a57005b80631e93b0f11461008257806345f70396146100a6578063552d7b8e146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b43660046109ff565b61013d565b6100806100c73660046109ff565b6102dd565b3480156100d857600080fd5b50600154610093565b6100806100ef3660046109ff565b610423565b6100806101023660046109ff565b610576565b34801561011357600080fd5b5061011c6106d9565b60405161009d929190610a22565b6100806101383660046109ff565b610776565b61014d600260005414600c6108ec565b6101678135158061016057506001548235145b600d6108ec565b60008080556002805461017990610a7f565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610a7f565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610b3c565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8338360405161023d929190610b58565b60405180910390a16102513415600b6108ec565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015182168452338352600390955543600155875193840194909452905183169582019590955293511690830152906080015b604051602081830303815290604052600290805190602001906102d7929190610911565b50505050565b6102ed60056000541460186108ec565b6103078135158061030057506001548235145b60196108ec565b60008080556002805461031990610a7f565b80601f016020809104026020016040519081016040528092919081815260200182805461034590610a7f565b80156103925780601f1061036757610100808354040283529160200191610392565b820191906000526020600020905b81548152906001019060200180831161037557829003601f168201915b50505050508060200190518101906103aa9190610bd9565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516103dd929190610b58565b60405180910390a16103f1341560166108ec565b8051610409906001600160a01b0316331460176108ec565b6000808055600181905561041f90600290610995565b5050565b61043360016000541460096108ec565b61044d8135158061044657506001548235145b600a6108ec565b60008080556002805461045f90610a7f565b80601f016020809104026020016040519081016040528092919081815260200182805461048b90610a7f565b80156104d85780601f106104ad576101008083540402835291602001916104d8565b820191906000526020600020905b8154815290600101906020018083116104bb57829003601f168201915b50505050508060200190518101906104f09190610bd9565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610523929190610b58565b60405180910390a1610537341560086108ec565b6040805180820182526000808252602080830182815285516001600160a01b03168452339052600290915543600155915190916102b391839101610bf5565b61058660046000541460146108ec565b6105a08135158061059957506001548235145b60156108ec565b6000808055600280546105b290610a7f565b80601f01602080910402602001604051908101604052809291908181526020018280546105de90610a7f565b801561062b5780601f106106005761010080835404028352916020019161062b565b820191906000526020600020905b81548152906001019060200180831161060e57829003601f168201915b50505050508060200190518101906106439190610b3c565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03383604051610676929190610b58565b60405180910390a161068a341560126108ec565b80516106a2906001600160a01b0316331460136108ec565b60408051602080820183526000808352848201516001600160a01b03168084526005909155436001558351918201529091016102b3565b6000606060005460028080546106ee90610a7f565b80601f016020809104026020016040519081016040528092919081815260200182805461071a90610a7f565b80156107675780601f1061073c57610100808354040283529160200191610767565b820191906000526020600020905b81548152906001019060200180831161074a57829003601f168201915b50505050509050915091509091565b61078660036000541460106108ec565b6107a08135158061079957506001548235145b60116108ec565b6000808055600280546107b290610a7f565b80601f01602080910402602001604051908101604052809291908181526020018280546107de90610a7f565b801561082b5780601f106108005761010080835404028352916020019161082b565b820191906000526020600020905b81548152906001019060200180831161080e57829003601f168201915b50505050508060200190518101906108439190610c1f565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13383604051610876929190610b58565b60405180910390a161088a3415600e6108ec565b80516108a2906001600160a01b03163314600f6108ec565b60408051808201909152600080825260208201526020808301516001600160a01b03908116835260408085015190911683830152600460005543600155516102b391839101610bf5565b8161041f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b82805461091d90610a7f565b90600052602060002090601f01602090048101928261093f5760008555610985565b82601f1061095857805160ff1916838001178555610985565b82800160010185558215610985579182015b8281111561098557825182559160200191906001019061096a565b506109919291506109d2565b5090565b5080546109a190610a7f565b6000825580601f106109b1575050565b601f0160209004906000526020600020908101906109cf91906109d2565b50565b5b8082111561099157600081556001016109d3565b6000604082840312156109f957600080fd5b50919050565b600060408284031215610a1157600080fd5b610a1b83836109e7565b9392505050565b82815260006020604081840152835180604085015260005b81811015610a5657858101830151858201606001528201610a3a565b81811115610a68576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610a9357607f821691505b602082108114156109f957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610acb57600080fd5b919050565b600060408284031215610ae257600080fd5b6040516040810181811067ffffffffffffffff82111715610b1357634e487b7160e01b600052604160045260246000fd5b604052905080610b2283610ab4565b8152610b3060208401610ab4565b60208201525092915050565b600060408284031215610b4e57600080fd5b610a1b8383610ad0565b6001600160a01b038316815260608101610a1b602083018480358252602090810135910152565b600060208284031215610b9157600080fd5b6040516020810181811067ffffffffffffffff82111715610bc257634e487b7160e01b600052604160045260246000fd5b604052905080610bd183610ab4565b905292915050565b600060208284031215610beb57600080fd5b610a1b8383610b7f565b60408101610c19828480516001600160a01b03908116835260209182015116910152565b92915050565b600060608284031215610c3157600080fd5b6040516060810181811067ffffffffffffffff82111715610c6257634e487b7160e01b600052604160045260246000fd5b604052610c6e83610ab4565b8152610c7c60208401610ab4565b6020820152610c8d60408401610ab4565b6040820152939250505056fea264697066735822122052b73071892164a437d387216f1d2a443cc1218bdf651dee9987de2eac4afea964736f6c634300080c0033`,
  BytecodeLen: 3937,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:36:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:43:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:56:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob,
  "Charlie": Charlie
  };
export const _APIs = {
  };
