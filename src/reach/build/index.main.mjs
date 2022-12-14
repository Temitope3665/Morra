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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc0, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc0, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc0, ctc1, ctc2],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc0, ctc1, ctc2, ctc2],
      10: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
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
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const v205 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v208 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:41:53:application',
    fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'makeGuess',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v205, v208],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v205, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v210, v211], secs: v213, time: v212, didSend: v31, from: v209 } = txn1;
      
      sim_r.txns.push({
        amt: v210,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v210, v211], secs: v213, time: v212, didSend: v31, from: v209 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.reportReady(v210), {
    at: './index.rsh:45:29:application',
    fs: ['at ./index.rsh:45:29:application call to [unknown function] (defined at: ./index.rsh:45:29:function exp)', 'at ./index.rsh:45:29:application call to "liftedInteract" (defined at: ./index.rsh:45:29:application)'],
    msg: 'reportReady',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v221], secs: v223, time: v222, didSend: v46, from: v220 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v231], secs: v233, time: v232, didSend: v61, from: v230 } = txn3;
  ;
  stdlib.protect(ctc1, await interact.getGuesses(v211, v221, v231), {
    at: './index.rsh:67:24:application',
    fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:34:function exp)'],
    msg: 'getGuesses',
    who: 'Alice'
    });
  
  let v243 = stdlib.checkedBigNumberify('./index.rsh:71:17:decimal', stdlib.UInt_max, '0');
  let v244 = v232;
  
  while (await (async () => {
    const v259 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:73:20:decimal', stdlib.UInt_max, '0'));
    
    return v259;})()) {
    const v262 = stdlib.protect(ctc0, await interact.throwHand(), {
      at: './index.rsh:77:44:application',
      fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
      msg: 'throwHand',
      who: 'Alice'
      });
    const v263 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:78:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v264 = stdlib.digest(ctc2, [v263, v262]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v209, v210, v211, v220, v221, v230, v231, v264],
      evt_cnt: 1,
      funcNum: 4,
      lct: v244,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:81:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v267], secs: v269, time: v268, didSend: v99, from: v266 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc4, ctc0, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v267], secs: v269, time: v268, didSend: v99, from: v266 } = txn4;
    ;
    const v270 = stdlib.addressEq(v209, v266);
    stdlib.assert(v270, {
      at: './index.rsh:81:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v278], secs: v280, time: v279, didSend: v113, from: v277 } = txn5;
    ;
    const v281 = stdlib.addressEq(v220, v277);
    stdlib.assert(v281, {
      at: './index.rsh:92:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v286], secs: v288, time: v287, didSend: v123, from: v285 } = txn6;
    ;
    const v289 = stdlib.addressEq(v230, v285);
    stdlib.assert(v289, {
      at: './index.rsh:101:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn7 = await (ctc.sendrecv({
      args: [v209, v210, v211, v220, v221, v230, v231, v267, v278, v286, v262, v263],
      evt_cnt: 2,
      funcNum: 7,
      lct: v287,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:109:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v293, v294], secs: v296, time: v295, didSend: v133, from: v292 } = txn7;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v293, v294], secs: v296, time: v295, didSend: v133, from: v292 } = txn7;
    ;
    const v297 = stdlib.addressEq(v209, v292);
    stdlib.assert(v297, {
      at: './index.rsh:109:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v298 = stdlib.digest(ctc2, [v294, v293]);
    const v299 = stdlib.digestEq(v267, v298);
    stdlib.assert(v299, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:110:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Alice'
      });
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 8,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v303, v304], secs: v306, time: v305, didSend: v146, from: v302 } = txn8;
    ;
    const v307 = stdlib.addressEq(v220, v302);
    stdlib.assert(v307, {
      at: './index.rsh:117:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v308 = stdlib.digest(ctc2, [v304, v303]);
    const v309 = stdlib.digestEq(v278, v308);
    stdlib.assert(v309, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:118:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Alice'
      });
    const v310 = stdlib.add(v293, v303);
    const v311 = stdlib.add(v310, v286);
    const v312 = stdlib.eq(v311, v211);
    const v313 = stdlib.eq(v311, v221);
    const v314 = stdlib.eq(v311, v231);
    const v315 = v314 ? stdlib.checkedBigNumberify('./index.rsh:125:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:126:5:decimal', stdlib.UInt_max, '0');
    const v316 = v313 ? stdlib.checkedBigNumberify('./index.rsh:124:25:decimal', stdlib.UInt_max, '2') : v315;
    const v317 = v312 ? stdlib.checkedBigNumberify('./index.rsh:123:27:decimal', stdlib.UInt_max, '1') : v316;
    stdlib.protect(ctc1, await interact.getResult(v317, v293, v303, v286), {
      at: './index.rsh:129:25:application',
      fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:36:function exp)'],
      msg: 'getResult',
      who: 'Alice'
      });
    
    const cv243 = v317;
    const cv244 = v305;
    
    v243 = cv243;
    v244 = cv244;
    
    continue;
    
    
    
    
    
    
    
    
    
    }
  const v324 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:136:14:decimal', stdlib.UInt_max, '1'));
  if (v324) {
    const v325 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:136:35:decimal', stdlib.UInt_max, '3'));
    ;
    return;
    }
  else {
    const v333 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:137:16:decimal', stdlib.UInt_max, '2'));
    if (v333) {
      const v334 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:137:37:decimal', stdlib.UInt_max, '3'));
      ;
      return;
      }
    else {
      const v343 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:138:22:decimal', stdlib.UInt_max, '3'));
      ;
      return;
      }}
  
  
  
  
  
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
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v210, v211], secs: v213, time: v212, didSend: v31, from: v209 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v210), {
    at: './index.rsh:50:25:application',
    fs: ['at ./index.rsh:49:11:application call to [unknown function] (defined at: ./index.rsh:49:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v219 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:51:51:application',
    fs: ['at ./index.rsh:49:11:application call to [unknown function] (defined at: ./index.rsh:49:15:function exp)'],
    msg: 'makeGuess',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v209, v210, v211, v219],
    evt_cnt: 1,
    funcNum: 1,
    lct: v212,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v210, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v221], secs: v223, time: v222, didSend: v46, from: v220 } = txn2;
      
      sim_r.txns.push({
        amt: v210,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v221], secs: v223, time: v222, didSend: v46, from: v220 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.reportReady(v210), {
    at: './index.rsh:55:27:application',
    fs: ['at ./index.rsh:55:27:application call to [unknown function] (defined at: ./index.rsh:55:27:function exp)', 'at ./index.rsh:55:27:application call to "liftedInteract" (defined at: ./index.rsh:55:27:application)'],
    msg: 'reportReady',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v231], secs: v233, time: v232, didSend: v61, from: v230 } = txn3;
  ;
  stdlib.protect(ctc1, await interact.getGuesses(v211, v221, v231), {
    at: './index.rsh:67:24:application',
    fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:34:function exp)'],
    msg: 'getGuesses',
    who: 'Bob'
    });
  
  let v243 = stdlib.checkedBigNumberify('./index.rsh:71:17:decimal', stdlib.UInt_max, '0');
  let v244 = v232;
  
  while (await (async () => {
    const v259 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:73:20:decimal', stdlib.UInt_max, '0'));
    
    return v259;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v267], secs: v269, time: v268, didSend: v99, from: v266 } = txn4;
    ;
    const v270 = stdlib.addressEq(v209, v266);
    stdlib.assert(v270, {
      at: './index.rsh:81:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v273 = stdlib.protect(ctc0, await interact.throwHand(), {
      at: './index.rsh:88:42:application',
      fs: ['at ./index.rsh:87:13:application call to [unknown function] (defined at: ./index.rsh:87:17:function exp)'],
      msg: 'throwHand',
      who: 'Bob'
      });
    const v274 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:89:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:87:13:application call to [unknown function] (defined at: ./index.rsh:87:17:function exp)'],
      msg: 'random',
      who: 'Bob'
      });
    const v275 = stdlib.digest(ctc3, [v274, v273]);
    
    const txn5 = await (ctc.sendrecv({
      args: [v209, v210, v211, v220, v221, v230, v231, v267, v275],
      evt_cnt: 1,
      funcNum: 5,
      lct: v268,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:92:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v278], secs: v280, time: v279, didSend: v113, from: v277 } = txn5;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc4, ctc0, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v278], secs: v280, time: v279, didSend: v113, from: v277 } = txn5;
    ;
    const v281 = stdlib.addressEq(v220, v277);
    stdlib.assert(v281, {
      at: './index.rsh:92:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v286], secs: v288, time: v287, didSend: v123, from: v285 } = txn6;
    ;
    const v289 = stdlib.addressEq(v230, v285);
    stdlib.assert(v289, {
      at: './index.rsh:101:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 7,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v293, v294], secs: v296, time: v295, didSend: v133, from: v292 } = txn7;
    ;
    const v297 = stdlib.addressEq(v209, v292);
    stdlib.assert(v297, {
      at: './index.rsh:109:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v298 = stdlib.digest(ctc3, [v294, v293]);
    const v299 = stdlib.digestEq(v267, v298);
    stdlib.assert(v299, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:110:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Bob'
      });
    const txn8 = await (ctc.sendrecv({
      args: [v209, v210, v211, v220, v221, v230, v231, v278, v286, v293, v273, v274],
      evt_cnt: 2,
      funcNum: 8,
      lct: v295,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:117:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v303, v304], secs: v306, time: v305, didSend: v146, from: v302 } = txn8;
        
        ;
        const v310 = stdlib.add(v293, v303);
        const v311 = stdlib.add(v310, v286);
        const v312 = stdlib.eq(v311, v211);
        const v313 = stdlib.eq(v311, v221);
        const v314 = stdlib.eq(v311, v231);
        const v315 = v314 ? stdlib.checkedBigNumberify('./index.rsh:125:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:126:5:decimal', stdlib.UInt_max, '0');
        const v316 = v313 ? stdlib.checkedBigNumberify('./index.rsh:124:25:decimal', stdlib.UInt_max, '2') : v315;
        const v317 = v312 ? stdlib.checkedBigNumberify('./index.rsh:123:27:decimal', stdlib.UInt_max, '1') : v316;
        
        const cv243 = v317;
        const cv244 = v305;
        
        await (async () => {
          const v243 = cv243;
          const v244 = cv244;
          
          if (await (async () => {
            const v259 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:73:20:decimal', stdlib.UInt_max, '0'));
            
            return v259;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v324 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:136:14:decimal', stdlib.UInt_max, '1'));
            if (v324) {
              const v325 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:136:35:decimal', stdlib.UInt_max, '3'));
              sim_r.txns.push({
                kind: 'from',
                to: v209,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v333 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:137:16:decimal', stdlib.UInt_max, '2'));
              if (v333) {
                const v334 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:137:37:decimal', stdlib.UInt_max, '3'));
                sim_r.txns.push({
                  kind: 'from',
                  to: v220,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v343 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:138:22:decimal', stdlib.UInt_max, '3'));
                sim_r.txns.push({
                  kind: 'from',
                  to: v230,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v303, v304], secs: v306, time: v305, didSend: v146, from: v302 } = txn8;
    ;
    const v307 = stdlib.addressEq(v220, v302);
    stdlib.assert(v307, {
      at: './index.rsh:117:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v308 = stdlib.digest(ctc3, [v304, v303]);
    const v309 = stdlib.digestEq(v278, v308);
    stdlib.assert(v309, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:118:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Bob'
      });
    const v310 = stdlib.add(v293, v303);
    const v311 = stdlib.add(v310, v286);
    const v312 = stdlib.eq(v311, v211);
    const v313 = stdlib.eq(v311, v221);
    const v314 = stdlib.eq(v311, v231);
    const v315 = v314 ? stdlib.checkedBigNumberify('./index.rsh:125:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:126:5:decimal', stdlib.UInt_max, '0');
    const v316 = v313 ? stdlib.checkedBigNumberify('./index.rsh:124:25:decimal', stdlib.UInt_max, '2') : v315;
    const v317 = v312 ? stdlib.checkedBigNumberify('./index.rsh:123:27:decimal', stdlib.UInt_max, '1') : v316;
    stdlib.protect(ctc1, await interact.getResult(v317, v293, v303, v286), {
      at: './index.rsh:129:25:application',
      fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:36:function exp)'],
      msg: 'getResult',
      who: 'Bob'
      });
    
    const cv243 = v317;
    const cv244 = v305;
    
    v243 = cv243;
    v244 = cv244;
    
    continue;
    
    
    
    
    
    
    
    
    
    }
  const v324 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:136:14:decimal', stdlib.UInt_max, '1'));
  if (v324) {
    const v325 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:136:35:decimal', stdlib.UInt_max, '3'));
    ;
    return;
    }
  else {
    const v333 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:137:16:decimal', stdlib.UInt_max, '2'));
    if (v333) {
      const v334 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:137:37:decimal', stdlib.UInt_max, '3'));
      ;
      return;
      }
    else {
      const v343 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:138:22:decimal', stdlib.UInt_max, '3'));
      ;
      return;
      }}
  
  
  
  
  
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
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v210, v211], secs: v213, time: v212, didSend: v31, from: v209 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v221], secs: v223, time: v222, didSend: v46, from: v220 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v210), {
    at: './index.rsh:59:25:application',
    fs: ['at ./index.rsh:58:15:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
    msg: 'acceptWager',
    who: 'Charlie'
    });
  const v229 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:60:55:application',
    fs: ['at ./index.rsh:58:15:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
    msg: 'makeGuess',
    who: 'Charlie'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v209, v210, v211, v220, v221, v229],
    evt_cnt: 1,
    funcNum: 2,
    lct: v222,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v210, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v231], secs: v233, time: v232, didSend: v61, from: v230 } = txn3;
      
      sim_r.txns.push({
        amt: v210,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      
      const v243 = stdlib.checkedBigNumberify('./index.rsh:71:17:decimal', stdlib.UInt_max, '0');
      const v244 = v232;
      
      if (await (async () => {
        const v259 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:73:20:decimal', stdlib.UInt_max, '0'));
        
        return v259;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v324 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:136:14:decimal', stdlib.UInt_max, '1'));
        if (v324) {
          const v325 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:136:35:decimal', stdlib.UInt_max, '3'));
          sim_r.txns.push({
            kind: 'from',
            to: v209,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v333 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:137:16:decimal', stdlib.UInt_max, '2'));
          if (v333) {
            const v334 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:137:37:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v220,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v343 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:138:22:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v230,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v231], secs: v233, time: v232, didSend: v61, from: v230 } = txn3;
  ;
  stdlib.protect(ctc1, await interact.reportReady(v210), {
    at: './index.rsh:64:31:application',
    fs: ['at ./index.rsh:64:31:application call to [unknown function] (defined at: ./index.rsh:64:31:function exp)', 'at ./index.rsh:64:31:application call to "liftedInteract" (defined at: ./index.rsh:64:31:application)'],
    msg: 'reportReady',
    who: 'Charlie'
    });
  
  stdlib.protect(ctc1, await interact.getGuesses(v211, v221, v231), {
    at: './index.rsh:67:24:application',
    fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:34:function exp)'],
    msg: 'getGuesses',
    who: 'Charlie'
    });
  
  let v243 = stdlib.checkedBigNumberify('./index.rsh:71:17:decimal', stdlib.UInt_max, '0');
  let v244 = v232;
  
  while (await (async () => {
    const v259 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:73:20:decimal', stdlib.UInt_max, '0'));
    
    return v259;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v267], secs: v269, time: v268, didSend: v99, from: v266 } = txn4;
    ;
    const v270 = stdlib.addressEq(v209, v266);
    stdlib.assert(v270, {
      at: './index.rsh:81:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Charlie'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v278], secs: v280, time: v279, didSend: v113, from: v277 } = txn5;
    ;
    const v281 = stdlib.addressEq(v220, v277);
    stdlib.assert(v281, {
      at: './index.rsh:92:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Charlie'
      });
    const v284 = stdlib.protect(ctc0, await interact.throwHand(), {
      at: './index.rsh:99:56:application',
      fs: ['at ./index.rsh:98:17:application call to [unknown function] (defined at: ./index.rsh:98:21:function exp)'],
      msg: 'throwHand',
      who: 'Charlie'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v209, v210, v211, v220, v221, v230, v231, v267, v278, v284],
      evt_cnt: 1,
      funcNum: 6,
      lct: v279,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:101:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v286], secs: v288, time: v287, didSend: v123, from: v285 } = txn6;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v286], secs: v288, time: v287, didSend: v123, from: v285 } = txn6;
    ;
    const v289 = stdlib.addressEq(v230, v285);
    stdlib.assert(v289, {
      at: './index.rsh:101:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Charlie'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 7,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v293, v294], secs: v296, time: v295, didSend: v133, from: v292 } = txn7;
    ;
    const v297 = stdlib.addressEq(v209, v292);
    stdlib.assert(v297, {
      at: './index.rsh:109:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Charlie'
      });
    const v298 = stdlib.digest(ctc3, [v294, v293]);
    const v299 = stdlib.digestEq(v267, v298);
    stdlib.assert(v299, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:110:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Charlie'
      });
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 8,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v303, v304], secs: v306, time: v305, didSend: v146, from: v302 } = txn8;
    ;
    const v307 = stdlib.addressEq(v220, v302);
    stdlib.assert(v307, {
      at: './index.rsh:117:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Charlie'
      });
    const v308 = stdlib.digest(ctc3, [v304, v303]);
    const v309 = stdlib.digestEq(v278, v308);
    stdlib.assert(v309, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:118:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Charlie'
      });
    const v310 = stdlib.add(v293, v303);
    const v311 = stdlib.add(v310, v286);
    const v312 = stdlib.eq(v311, v211);
    const v313 = stdlib.eq(v311, v221);
    const v314 = stdlib.eq(v311, v231);
    const v315 = v314 ? stdlib.checkedBigNumberify('./index.rsh:125:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:126:5:decimal', stdlib.UInt_max, '0');
    const v316 = v313 ? stdlib.checkedBigNumberify('./index.rsh:124:25:decimal', stdlib.UInt_max, '2') : v315;
    const v317 = v312 ? stdlib.checkedBigNumberify('./index.rsh:123:27:decimal', stdlib.UInt_max, '1') : v316;
    stdlib.protect(ctc1, await interact.getResult(v317, v293, v303, v286), {
      at: './index.rsh:129:25:application',
      fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:36:function exp)'],
      msg: 'getResult',
      who: 'Charlie'
      });
    
    const cv243 = v317;
    const cv244 = v305;
    
    v243 = cv243;
    v244 = cv244;
    
    continue;
    
    
    
    
    
    
    
    
    
    }
  const v324 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:136:14:decimal', stdlib.UInt_max, '1'));
  if (v324) {
    const v325 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:136:35:decimal', stdlib.UInt_max, '3'));
    ;
    return;
    }
  else {
    const v333 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:137:16:decimal', stdlib.UInt_max, '2'));
    if (v333) {
      const v334 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:137:37:decimal', stdlib.UInt_max, '3'));
      ;
      return;
      }
    else {
      const v343 = stdlib.mul(v210, stdlib.checkedBigNumberify('./index.rsh:138:22:decimal', stdlib.UInt_max, '3'));
      ;
      return;
      }}
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAEIKCBQAngDBwULCgkmAwEAAQEAIjUAMRhBBWIqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQoMQAKjSSEJDEABZkkkDEAApyQSRCELNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSiVbNf9XMCA1/iEFWzX9IQdbNfxJNQVJIls1+yRbNfqABDUaKtA0+xZQNPoWULA0/jEAEkQ0A1eAIDT6FjT7FlABEkQ0A4GoAVs0+wg0A4GgAVsINfk0A1cAIDQDIQRbNP80/jT9NANXWCA0/CIhCDT5NPwSTSEGNPk0/RJNIzT5NP8STTIGQgOUSCEMNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/IQRbNf4lWzX9VzAgNfwhBVs1+1dYIDX6IQdbNflXoCA1+IHAAVs190k1BUkiWzX2JFs19YAEgmt7djT2FlA09RZQsDT/MQASRDQDV4AgNPUWNPYWUAESRDT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUDT4UDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIIQs1ATIGNQJCA5NJgQYMQACeSCENNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/IQRbNf4lWzX9VzAgNfwhBVs1+1dYIDX6IQdbNflXgCA1+FegIDX3STUFFzX2gARw7e96NPYWULA0+jEAEkQ0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlA0+FA091A09hZQKEsBVwB/ZylLAVd/SWdIIQw1ATIGNQJCAu5IJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/IQRbNf4lWzX9VzAgNfwhBVs1+1dYIDX6IQdbNflXgCA1+Ek1BTX3gATNpujLNPdQsDT8MQASRDT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUDT4UDT3UChLAVcAf2cpSwFXf0FnSCENNQEyBjUCQgJdSSEGDEAA5EmBBAxAAIlIIQk0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEEWzX+JVs1/VcwIDX8IQVbNftXWCA1+iEHWzX5STUFNfiABDiwIy00+FCwNP8xABJENP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPhQKEsBVwB/ZylLAVd/IWdIJDUBMgY1AkIBxiEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkSTUDIQRbNf9JNQUXNf6ABJdO9xc0/hZQsDT/iAHjNANXACA0/zQDJVs0A1cwIDQDIQVbMQA0/iIyBkIAukkjDEAAYEgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf4lWzX9STUFFzX8gATVFRkUNPwWULA0/ogBgjT/NP4WUDT9FlAxAFA0/BZQKEsBVwBYZ0ghBjUBMgY1AkIBDEiBoI0GiAFWIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDT/iAEmMQA0/xZQNP4WUChLAVcAMGdIIzUBMgY1AkIAuDX/Nf41/TX8Nfs1+jX5Nfg19zT+IhJBADI09zT4FlA0+RZQNPpQNPsWUDT8UDT9FlAoSwFXAH9nKUsBV38BZ0ghCTUBMgY1AkIAbTT+IxJBABaxIrIBNPghCAuyCCOyEDT3sgezQgA0NP4hBhJBABaxIrIBNPghCAuyCCOyEDT6sgezQgAWsSKyATT4IQgLsggjshA0/LIHs0IAADEZIQoSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 200,
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
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
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
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
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
                "name": "v221",
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
                "name": "v231",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
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
                "name": "v267",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
                "name": "v278",
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
                "name": "v286",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
                "name": "v293",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v294",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
                "name": "v303",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
                "name": "v221",
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
                "name": "v231",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
                "name": "v267",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
                "name": "v278",
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
                "name": "v286",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
                "name": "v293",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v294",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
                "name": "v303",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001e6f38038062001e6f833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b611b8d80620002e26000396000f3fe60806040526004361061008f5760003560e01c80638328d4c4116100565780638328d4c41461010a578063873779a11461011d578063980b6eac14610130578063a209ad4e14610143578063ab53f2c61461015657005b80631e93b0f114610098578063422eb85c146100bc57806345f70396146100cf578063552d7b8e146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611510565b610179565b6100966100dd366004611545565b610419565b6100966100f0366004611545565b6105af565b34801561010157600080fd5b506001546100a9565b610096610118366004611510565b610830565b61009661012b366004611545565b610aa6565b61009661013e366004611545565b610c87565b610096610151366004611545565b610eb0565b34801561016257600080fd5b5061016b611114565b6040516100b3929190611561565b610189600a60005414601d6111b1565b6101a38135158061019c57506001548235145b601e6111b1565b6000808055600280546101b5906115be565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906115be565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611713565b90507f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa3383604051610279929190611730565b60405180910390a161028d3415601a6111b1565b80516102a5906001600160a01b03163314601b6111b1565b604080516102f2916102cc9190850135906020808701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260e0015114601c6111b1565b61036360405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519093169284019290925260c080850151908401526101008085015160e085015261012080860151918501919091528582013590840152600b6000554360015590516103ef918391016117ed565b60405160208183030381529060405260029080519060200190610413929190611397565b50505050565b610429600260005414600c6111b1565b6104438135158061043c57506001548235145b600d6111b1565b600080805560028054610455906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054610481906115be565b80156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b50505050508060200190518101906104e69190611802565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8338360405161051992919061188c565b60405180910390a161053281602001513414600b6111b1565b61053a61141b565b815181516001600160a01b03918216905260208084015183518201526040808501518451909101526060808501518451931692019190915260808084015183519091015281513360a09091015281518482013560c09091015280820180516000905251439101526105aa816111da565b505050565b6105bf60086000541460146111b1565b6105d9813515806105d257506001548235145b60156111b1565b6000808055600280546105eb906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054610617906115be565b80156106645780601f1061063957610100808354040283529160200191610664565b820191906000526020600020905b81548152906001019060200180831161064757829003601f168201915b505050505080602001905181019061067c91906118b3565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516106af92919061188c565b60405180910390a16106c3341560126111b1565b60608101516106de906001600160a01b0316331460136111b1565b61074860405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519093169284019290925260c0808501519084015260e080850151908401528481013561010084015260096000554360015590516103ef9183910181516001600160a01b03908116825260208084015190830152604080840151908301526060808401518216908301526080808401519083015260a0808401519091169082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b610840600b6000541460226111b1565b61085a8135158061085357506001548235145b60236111b1565b60008080556002805461086c906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054610898906115be565b80156108e55780601f106108ba576101008083540402835291602001916108e5565b820191906000526020600020905b8154815290600101906020018083116108c857829003601f168201915b50505050508060200190518101906108fd9190611713565b90506109156040518060200160405280600081525090565b7f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e3384604051610946929190611730565b60405180910390a161095a3415601f6111b1565b6060820151610975906001600160a01b0316331460206111b1565b604080516109c29161099c9190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360e001511460216111b1565b6101008201516101208301516109dd9060208601359061197c565b6109e7919061197c565b81526109f161141b565b825181516001600160a01b03918216905260208085015183519091015260408085018051845190920191909152606080860151845190841691015260808086015184519091015260a0808601518451931692019190915260c08085015183519091015251825114610a89576080830151825114610a825760c0830151825114610a7b576000610a8c565b6003610a8c565b6002610a8c565b60015b6020808301805192909252905143910152610413816111da565b610ab660016000541460096111b1565b610ad081351580610ac957506001548235145b600a6111b1565b600080805560028054610ae2906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0e906115be565b8015610b5b5780601f10610b3057610100808354040283529160200191610b5b565b820191906000526020600020905b815481529060010190602001808311610b3e57829003601f168201915b5050505050806020019051810190610b739190611994565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610ba692919061188c565b60405180910390a1610bbf8160200151341460086111b1565b610c036040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516103ef9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b610c9760096000541460186111b1565b610cb181351580610caa57506001548235145b60196111b1565b600080805560028054610cc3906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054610cef906115be565b8015610d3c5780601f10610d1157610100808354040283529160200191610d3c565b820191906000526020600020905b815481529060010190602001808311610d1f57829003601f168201915b5050505050806020019051810190610d549190611a03565b90507fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3383604051610d8792919061188c565b60405180910390a1610d9b341560166111b1565b60a0810151610db6906001600160a01b0316331460176111b1565b610e2760405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519093169284019290925260c0808501519084015260e08085015190840152610100808501519084015284810135610120840152600a6000554360015590516103ef918391016117ed565b610ec060076000541460106111b1565b610eda81351580610ed357506001548235145b60116111b1565b600080805560028054610eec906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054610f18906115be565b8015610f655780601f10610f3a57610100808354040283529160200191610f65565b820191906000526020600020905b815481529060010190602001808311610f4857829003601f168201915b5050505050806020019051810190610f7d9190611a93565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03383604051610fb092919061188c565b60405180910390a1610fc43415600e6111b1565b8051610fdc906001600160a01b03163314600f6111b1565b61103f60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519093169284019290925260c080850151908401528481013560e084015260086000554360015590516103ef9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152608084015160808401528060a08501511660a08401525060c083015160c083015260e083015160e083015292915050565b600060606000546002808054611129906115be565b80601f0160208091040260200160405190810160405280929190818152602001828054611155906115be565b80156111a25780601f10611177576101008083540402835291602001916111a2565b820191906000526020600020905b81548152906001019060200180831161118557829003601f168201915b50505050509050915091509091565b816111d65760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6020810151516112bf576111ec611455565b8151516001600160a01b0390811680835283516020908101518185019081528551604090810151818701908152875160609081015187168189019081528951608090810151818b019081528b5160a0908101518b16818d019081528d5160c090810151818f0190815260076000554360015589519b8c019c909c529851978a01979097529451938801939093529051881690860152519084015251909316928101929092525160e082015261010001604051602081830303815290604052600290805190602001906105aa929190611397565b6020810151516001141561133557805180516020909101516001600160a01b03909116906108fc906112f390600390611b38565b6040518115909202916000818181858888f1935050505015801561131b573d6000803e3d6000fd5b5060008080556001819055611332906002906114ad565b50565b6020810151516002141561136d578060000151606001516001600160a01b03166108fc60038360000151602001516112f39190611b38565b806000015160a001516001600160a01b03166108fc60038360000151602001516112f39190611b38565b8280546113a3906115be565b90600052602060002090601f0160209004810192826113c5576000855561140b565b82601f106113de57805160ff191683800117855561140b565b8280016001018555821561140b579182015b8281111561140b5782518255916020019190600101906113f0565b506114179291506114e3565b5090565b604051806040016040528061142e611455565b8152602001611450604051806040016040528060008152602001600081525090565b905290565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b5080546114b9906115be565b6000825580601f106114c9575050565b601f01602090049060005260206000209081019061133291905b5b8082111561141757600081556001016114e4565b60006060828403121561150a57600080fd5b50919050565b60006060828403121561152257600080fd5b61152c83836114f8565b9392505050565b60006040828403121561150a57600080fd5b60006040828403121561155757600080fd5b61152c8383611533565b82815260006020604081840152835180604085015260005b8181101561159557858101830151858201606001528201611579565b818111156115a7576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806115d257607f821691505b6020821081141561150a57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561162557634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff8111828210171561162557634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461167457600080fd5b919050565b6000610140828403121561168c57600080fd5b6116946115f3565b905061169f8261165d565b815260208201516020820152604082015160408201526116c16060830161165d565b6060820152608082015160808201526116dc60a0830161165d565b60a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b6000610140828403121561172657600080fd5b61152c8383611679565b6001600160a01b03831681526080810161152c60208301848035825260208082013590830152604090810135910152565b80516001600160a01b031682526020810151602083015260408101516040830152606081015161179c60608401826001600160a01b03169052565b506080810151608083015260a08101516117c160a08401826001600160a01b03169052565b5060c0818101519083015260e08082015190830152610100808201519083015261012090810151910152565b61014081016117fc8284611761565b92915050565b600060a0828403121561181457600080fd5b60405160a0810181811067ffffffffffffffff8211171561184557634e487b7160e01b600052604160045260246000fd5b6040526118518361165d565b815260208301516020820152604083015160408201526118736060840161165d565b6060820152608083015160808201528091505092915050565b6001600160a01b03831681526060810161152c602083018480358252602090810135910152565b60006101008083850312156118c757600080fd5b6040519081019067ffffffffffffffff821181831017156118f857634e487b7160e01b600052604160045260246000fd5b816040526119058461165d565b815260208401516020820152604084015160408201526119276060850161165d565b60608201526080840151608082015261194260a0850161165d565b60a082015260c084015160c082015260e084015160e0820152809250505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561198f5761198f611966565b500190565b6000606082840312156119a657600080fd5b6040516060810181811067ffffffffffffffff821117156119d757634e487b7160e01b600052604160045260246000fd5b6040526119e38361165d565b815260208301516020820152604083015160408201528091505092915050565b60006101208284031215611a1657600080fd5b611a1e61162b565b611a278361165d565b81526020830151602082015260408301516040820152611a496060840161165d565b606082015260808301516080820152611a6460a0840161165d565b60a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060e08284031215611aa557600080fd5b60405160e0810181811067ffffffffffffffff82111715611ad657634e487b7160e01b600052604160045260246000fd5b604052611ae28361165d565b81526020830151602082015260408301516040820152611b046060840161165d565b606082015260808301516080820152611b1f60a0840161165d565b60a082015260c083015160c08201528091505092915050565b6000816000190483118215151615611b5257611b52611966565b50029056fea2646970667358221220542d24480aee9f0ca10edb5101000b742cdeb81815c3935eb913799f25d4335264736f6c634300080c0033`,
  BytecodeLen: 7791,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:46:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:56:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:139:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:139:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:139:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:82:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:93:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:102:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:111:13:after expr stmt semicolon',
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
