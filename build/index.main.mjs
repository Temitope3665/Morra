// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

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
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Null;
  
  
  const v184 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v187 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:32:53:application',
    fs: ['at ./index.rsh:30:13:application call to [unknown function] (defined at: ./index.rsh:30:17:function exp)'],
    msg: 'makeGuess',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v184, v187],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v184, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v189, v190], secs: v192, time: v191, didSend: v31, from: v188 } = txn1;
      
      sim_r.txns.push({
        amt: v189,
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
  const {data: [v189, v190], secs: v192, time: v191, didSend: v31, from: v188 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v199], secs: v201, time: v200, didSend: v42, from: v198 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v208], secs: v210, time: v209, didSend: v53, from: v207 } = txn3;
  ;
  let v213 = stdlib.checkedBigNumberify('./index.rsh:55:17:decimal', stdlib.UInt_max, '0');
  let v214 = v209;
  
  while (await (async () => {
    const v229 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:57:20:decimal', stdlib.UInt_max, '0'));
    
    return v229;})()) {
    const v232 = stdlib.protect(ctc0, await interact.throwHand(), {
      at: './index.rsh:61:44:application',
      fs: ['at ./index.rsh:60:15:application call to [unknown function] (defined at: ./index.rsh:60:19:function exp)'],
      msg: 'throwHand',
      who: 'Alice'
      });
    const v233 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:62:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:60:15:application call to [unknown function] (defined at: ./index.rsh:60:19:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v234 = stdlib.digest(ctc1, [v233, v232]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v188, v189, v190, v198, v199, v207, v208, v234],
      evt_cnt: 1,
      funcNum: 4,
      lct: v214,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:65:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v237], secs: v239, time: v238, didSend: v78, from: v236 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc3, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v237], secs: v239, time: v238, didSend: v78, from: v236 } = txn4;
    ;
    const v240 = stdlib.addressEq(v188, v236);
    stdlib.assert(v240, {
      at: './index.rsh:65:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v248], secs: v250, time: v249, didSend: v92, from: v247 } = txn5;
    ;
    const v251 = stdlib.addressEq(v198, v247);
    stdlib.assert(v251, {
      at: './index.rsh:76:9:dot',
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
    const {data: [v256], secs: v258, time: v257, didSend: v102, from: v255 } = txn6;
    ;
    const v259 = stdlib.addressEq(v207, v255);
    stdlib.assert(v259, {
      at: './index.rsh:85:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn7 = await (ctc.sendrecv({
      args: [v188, v189, v190, v198, v199, v207, v208, v237, v248, v256, v232, v233],
      evt_cnt: 2,
      funcNum: 7,
      lct: v257,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:93:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v263, v264], secs: v266, time: v265, didSend: v112, from: v262 } = txn7;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v263, v264], secs: v266, time: v265, didSend: v112, from: v262 } = txn7;
    ;
    const v267 = stdlib.addressEq(v188, v262);
    stdlib.assert(v267, {
      at: './index.rsh:93:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v268 = stdlib.digest(ctc1, [v264, v263]);
    const v269 = stdlib.digestEq(v237, v268);
    stdlib.assert(v269, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
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
    const {data: [v273, v274], secs: v276, time: v275, didSend: v125, from: v272 } = txn8;
    ;
    const v277 = stdlib.addressEq(v198, v272);
    stdlib.assert(v277, {
      at: './index.rsh:101:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v278 = stdlib.digest(ctc1, [v274, v273]);
    const v279 = stdlib.digestEq(v248, v278);
    stdlib.assert(v279, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:102:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Alice'
      });
    const v280 = stdlib.safeAdd(v263, v273);
    const v281 = stdlib.safeAdd(v280, v256);
    const v282 = stdlib.eq(v281, v190);
    const v283 = stdlib.eq(v281, v199);
    const v284 = stdlib.eq(v281, v208);
    const v285 = v284 ? stdlib.checkedBigNumberify('./index.rsh:109:31:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:110:7:decimal', stdlib.UInt_max, '0');
    const v286 = v283 ? stdlib.checkedBigNumberify('./index.rsh:108:27:decimal', stdlib.UInt_max, '2') : v285;
    const v287 = v282 ? stdlib.checkedBigNumberify('./index.rsh:107:29:decimal', stdlib.UInt_max, '1') : v286;
    const cv213 = v287;
    const cv214 = v275;
    
    v213 = cv213;
    v214 = cv214;
    
    continue;
    
    
    
    
    
    
    
    
    
    }
  const v288 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '1'));
  if (v288) {
    const v289 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:114:35:decimal', stdlib.UInt_max, '3'));
    ;
    stdlib.protect(ctc4, await interact.getResult(v213), {
      at: './index.rsh:120:23:application',
      fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:34:function exp)'],
      msg: 'getResult',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const v303 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:115:16:decimal', stdlib.UInt_max, '2'));
    if (v303) {
      const v304 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:115:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc4, await interact.getResult(v213), {
        at: './index.rsh:120:23:application',
        fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:34:function exp)'],
        msg: 'getResult',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v319 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:116:22:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc4, await interact.getResult(v213), {
        at: './index.rsh:120:23:application',
        fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:34:function exp)'],
        msg: 'getResult',
        who: 'Alice'
        });
      
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
  const {data: [v189, v190], secs: v192, time: v191, didSend: v31, from: v188 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v189), {
    at: './index.rsh:40:25:application',
    fs: ['at ./index.rsh:39:11:application call to [unknown function] (defined at: ./index.rsh:39:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v197 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:41:51:application',
    fs: ['at ./index.rsh:39:11:application call to [unknown function] (defined at: ./index.rsh:39:15:function exp)'],
    msg: 'makeGuess',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v188, v189, v190, v197],
    evt_cnt: 1,
    funcNum: 1,
    lct: v191,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v189, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v199], secs: v201, time: v200, didSend: v42, from: v198 } = txn2;
      
      sim_r.txns.push({
        amt: v189,
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
  const {data: [v199], secs: v201, time: v200, didSend: v42, from: v198 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v208], secs: v210, time: v209, didSend: v53, from: v207 } = txn3;
  ;
  let v213 = stdlib.checkedBigNumberify('./index.rsh:55:17:decimal', stdlib.UInt_max, '0');
  let v214 = v209;
  
  while (await (async () => {
    const v229 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:57:20:decimal', stdlib.UInt_max, '0'));
    
    return v229;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v237], secs: v239, time: v238, didSend: v78, from: v236 } = txn4;
    ;
    const v240 = stdlib.addressEq(v188, v236);
    stdlib.assert(v240, {
      at: './index.rsh:65:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v243 = stdlib.protect(ctc0, await interact.throwHand(), {
      at: './index.rsh:72:42:application',
      fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:17:function exp)'],
      msg: 'throwHand',
      who: 'Bob'
      });
    const v244 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:73:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:17:function exp)'],
      msg: 'random',
      who: 'Bob'
      });
    const v245 = stdlib.digest(ctc3, [v244, v243]);
    
    const txn5 = await (ctc.sendrecv({
      args: [v188, v189, v190, v198, v199, v207, v208, v237, v245],
      evt_cnt: 1,
      funcNum: 5,
      lct: v238,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:76:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v248], secs: v250, time: v249, didSend: v92, from: v247 } = txn5;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc4, ctc0, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v248], secs: v250, time: v249, didSend: v92, from: v247 } = txn5;
    ;
    const v251 = stdlib.addressEq(v198, v247);
    stdlib.assert(v251, {
      at: './index.rsh:76:9:dot',
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
    const {data: [v256], secs: v258, time: v257, didSend: v102, from: v255 } = txn6;
    ;
    const v259 = stdlib.addressEq(v207, v255);
    stdlib.assert(v259, {
      at: './index.rsh:85:13:dot',
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
    const {data: [v263, v264], secs: v266, time: v265, didSend: v112, from: v262 } = txn7;
    ;
    const v267 = stdlib.addressEq(v188, v262);
    stdlib.assert(v267, {
      at: './index.rsh:93:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v268 = stdlib.digest(ctc3, [v264, v263]);
    const v269 = stdlib.digestEq(v237, v268);
    stdlib.assert(v269, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Bob'
      });
    const txn8 = await (ctc.sendrecv({
      args: [v188, v189, v190, v198, v199, v207, v208, v248, v256, v263, v243, v244],
      evt_cnt: 2,
      funcNum: 8,
      lct: v265,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:101:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v273, v274], secs: v276, time: v275, didSend: v125, from: v272 } = txn8;
        
        ;
        const v280 = stdlib.safeAdd(v263, v273);
        const v281 = stdlib.safeAdd(v280, v256);
        const v282 = stdlib.eq(v281, v190);
        const v283 = stdlib.eq(v281, v199);
        const v284 = stdlib.eq(v281, v208);
        const v285 = v284 ? stdlib.checkedBigNumberify('./index.rsh:109:31:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:110:7:decimal', stdlib.UInt_max, '0');
        const v286 = v283 ? stdlib.checkedBigNumberify('./index.rsh:108:27:decimal', stdlib.UInt_max, '2') : v285;
        const v287 = v282 ? stdlib.checkedBigNumberify('./index.rsh:107:29:decimal', stdlib.UInt_max, '1') : v286;
        const cv213 = v287;
        const cv214 = v275;
        
        await (async () => {
          const v213 = cv213;
          const v214 = cv214;
          
          if (await (async () => {
            const v229 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:57:20:decimal', stdlib.UInt_max, '0'));
            
            return v229;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v288 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '1'));
            if (v288) {
              const v289 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:114:35:decimal', stdlib.UInt_max, '3'));
              sim_r.txns.push({
                kind: 'from',
                to: v188,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v303 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:115:16:decimal', stdlib.UInt_max, '2'));
              if (v303) {
                const v304 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:115:37:decimal', stdlib.UInt_max, '3'));
                sim_r.txns.push({
                  kind: 'from',
                  to: v198,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v319 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:116:22:decimal', stdlib.UInt_max, '3'));
                sim_r.txns.push({
                  kind: 'from',
                  to: v207,
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
    const {data: [v273, v274], secs: v276, time: v275, didSend: v125, from: v272 } = txn8;
    ;
    const v277 = stdlib.addressEq(v198, v272);
    stdlib.assert(v277, {
      at: './index.rsh:101:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v278 = stdlib.digest(ctc3, [v274, v273]);
    const v279 = stdlib.digestEq(v248, v278);
    stdlib.assert(v279, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:102:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Bob'
      });
    const v280 = stdlib.safeAdd(v263, v273);
    const v281 = stdlib.safeAdd(v280, v256);
    const v282 = stdlib.eq(v281, v190);
    const v283 = stdlib.eq(v281, v199);
    const v284 = stdlib.eq(v281, v208);
    const v285 = v284 ? stdlib.checkedBigNumberify('./index.rsh:109:31:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:110:7:decimal', stdlib.UInt_max, '0');
    const v286 = v283 ? stdlib.checkedBigNumberify('./index.rsh:108:27:decimal', stdlib.UInt_max, '2') : v285;
    const v287 = v282 ? stdlib.checkedBigNumberify('./index.rsh:107:29:decimal', stdlib.UInt_max, '1') : v286;
    const cv213 = v287;
    const cv214 = v275;
    
    v213 = cv213;
    v214 = cv214;
    
    continue;
    
    
    
    
    
    
    
    
    
    }
  const v288 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '1'));
  if (v288) {
    const v289 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:114:35:decimal', stdlib.UInt_max, '3'));
    ;
    stdlib.protect(ctc1, await interact.getResult(v213), {
      at: './index.rsh:120:23:application',
      fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:34:function exp)'],
      msg: 'getResult',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const v303 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:115:16:decimal', stdlib.UInt_max, '2'));
    if (v303) {
      const v304 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:115:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc1, await interact.getResult(v213), {
        at: './index.rsh:120:23:application',
        fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:34:function exp)'],
        msg: 'getResult',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v319 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:116:22:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc1, await interact.getResult(v213), {
        at: './index.rsh:120:23:application',
        fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:34:function exp)'],
        msg: 'getResult',
        who: 'Bob'
        });
      
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
  const {data: [v189, v190], secs: v192, time: v191, didSend: v31, from: v188 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v199], secs: v201, time: v200, didSend: v42, from: v198 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v189), {
    at: './index.rsh:48:25:application',
    fs: ['at ./index.rsh:47:15:application call to [unknown function] (defined at: ./index.rsh:47:19:function exp)'],
    msg: 'acceptWager',
    who: 'Charlie'
    });
  const v206 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:49:55:application',
    fs: ['at ./index.rsh:47:15:application call to [unknown function] (defined at: ./index.rsh:47:19:function exp)'],
    msg: 'makeGuess',
    who: 'Charlie'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v188, v189, v190, v198, v199, v206],
    evt_cnt: 1,
    funcNum: 2,
    lct: v200,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v189, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v208], secs: v210, time: v209, didSend: v53, from: v207 } = txn3;
      
      sim_r.txns.push({
        amt: v189,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v213 = stdlib.checkedBigNumberify('./index.rsh:55:17:decimal', stdlib.UInt_max, '0');
      const v214 = v209;
      
      if (await (async () => {
        const v229 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:57:20:decimal', stdlib.UInt_max, '0'));
        
        return v229;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v288 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '1'));
        if (v288) {
          const v289 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:114:35:decimal', stdlib.UInt_max, '3'));
          sim_r.txns.push({
            kind: 'from',
            to: v188,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v303 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:115:16:decimal', stdlib.UInt_max, '2'));
          if (v303) {
            const v304 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:115:37:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v198,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v319 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:116:22:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v207,
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
  const {data: [v208], secs: v210, time: v209, didSend: v53, from: v207 } = txn3;
  ;
  let v213 = stdlib.checkedBigNumberify('./index.rsh:55:17:decimal', stdlib.UInt_max, '0');
  let v214 = v209;
  
  while (await (async () => {
    const v229 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:57:20:decimal', stdlib.UInt_max, '0'));
    
    return v229;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v237], secs: v239, time: v238, didSend: v78, from: v236 } = txn4;
    ;
    const v240 = stdlib.addressEq(v188, v236);
    stdlib.assert(v240, {
      at: './index.rsh:65:11:dot',
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
    const {data: [v248], secs: v250, time: v249, didSend: v92, from: v247 } = txn5;
    ;
    const v251 = stdlib.addressEq(v198, v247);
    stdlib.assert(v251, {
      at: './index.rsh:76:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Charlie'
      });
    const v254 = stdlib.protect(ctc0, await interact.throwHand(), {
      at: './index.rsh:83:56:application',
      fs: ['at ./index.rsh:82:17:application call to [unknown function] (defined at: ./index.rsh:82:21:function exp)'],
      msg: 'throwHand',
      who: 'Charlie'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v188, v189, v190, v198, v199, v207, v208, v237, v248, v254],
      evt_cnt: 1,
      funcNum: 6,
      lct: v249,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:85:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v256], secs: v258, time: v257, didSend: v102, from: v255 } = txn6;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v256], secs: v258, time: v257, didSend: v102, from: v255 } = txn6;
    ;
    const v259 = stdlib.addressEq(v207, v255);
    stdlib.assert(v259, {
      at: './index.rsh:85:13:dot',
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
    const {data: [v263, v264], secs: v266, time: v265, didSend: v112, from: v262 } = txn7;
    ;
    const v267 = stdlib.addressEq(v188, v262);
    stdlib.assert(v267, {
      at: './index.rsh:93:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Charlie'
      });
    const v268 = stdlib.digest(ctc3, [v264, v263]);
    const v269 = stdlib.digestEq(v237, v268);
    stdlib.assert(v269, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
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
    const {data: [v273, v274], secs: v276, time: v275, didSend: v125, from: v272 } = txn8;
    ;
    const v277 = stdlib.addressEq(v198, v272);
    stdlib.assert(v277, {
      at: './index.rsh:101:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Charlie'
      });
    const v278 = stdlib.digest(ctc3, [v274, v273]);
    const v279 = stdlib.digestEq(v248, v278);
    stdlib.assert(v279, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:102:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Charlie'
      });
    const v280 = stdlib.safeAdd(v263, v273);
    const v281 = stdlib.safeAdd(v280, v256);
    const v282 = stdlib.eq(v281, v190);
    const v283 = stdlib.eq(v281, v199);
    const v284 = stdlib.eq(v281, v208);
    const v285 = v284 ? stdlib.checkedBigNumberify('./index.rsh:109:31:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:110:7:decimal', stdlib.UInt_max, '0');
    const v286 = v283 ? stdlib.checkedBigNumberify('./index.rsh:108:27:decimal', stdlib.UInt_max, '2') : v285;
    const v287 = v282 ? stdlib.checkedBigNumberify('./index.rsh:107:29:decimal', stdlib.UInt_max, '1') : v286;
    const cv213 = v287;
    const cv214 = v275;
    
    v213 = cv213;
    v214 = cv214;
    
    continue;
    
    
    
    
    
    
    
    
    
    }
  const v288 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '1'));
  if (v288) {
    const v289 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:114:35:decimal', stdlib.UInt_max, '3'));
    ;
    stdlib.protect(ctc1, await interact.getResult(v213), {
      at: './index.rsh:120:23:application',
      fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:34:function exp)'],
      msg: 'getResult',
      who: 'Charlie'
      });
    
    return;
    }
  else {
    const v303 = stdlib.eq(v213, stdlib.checkedBigNumberify('./index.rsh:115:16:decimal', stdlib.UInt_max, '2'));
    if (v303) {
      const v304 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:115:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc1, await interact.getResult(v213), {
        at: './index.rsh:120:23:application',
        fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:34:function exp)'],
        msg: 'getResult',
        who: 'Charlie'
        });
      
      return;
      }
    else {
      const v319 = stdlib.safeMul(v189, stdlib.checkedBigNumberify('./index.rsh:116:22:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc1, await interact.getResult(v213), {
        at: './index.rsh:120:23:application',
        fs: ['at ./index.rsh:119:7:application call to [unknown function] (defined at: ./index.rsh:119:34:function exp)'],
        msg: 'getResult',
        who: 'Charlie'
        });
      
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
                "name": "v189",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v190",
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
                "name": "v189",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v190",
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
                "name": "v199",
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
                "name": "v208",
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
                "name": "v237",
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
                "name": "v248",
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
                "name": "v256",
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
                "name": "v263",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v264",
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
                "name": "v273",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v274",
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
                "name": "v199",
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
                "name": "v208",
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
                "name": "v237",
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
                "name": "v248",
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
                "name": "v256",
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
                "name": "v263",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v264",
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
                "name": "v273",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v274",
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
  Bytecode: `0x608060405260405162001f3b38038062001f3b833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b611c5980620002e26000396000f3fe60806040526004361061008f5760003560e01c80638328d4c4116100565780638328d4c41461010a578063873779a11461011d578063980b6eac14610130578063a209ad4e14610143578063ab53f2c61461015657005b80631e93b0f114610098578063422eb85c146100bc57806345f70396146100cf578063552d7b8e146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca3660046115c0565b610179565b6100966100dd3660046115f5565b610419565b6100966100f03660046115f5565b6105af565b34801561010157600080fd5b506001546100a9565b6100966101183660046115c0565b610830565b61009661012b3660046115f5565b610aa5565b61009661013e3660046115f5565b610c86565b6100966101513660046115f5565b610eaf565b34801561016257600080fd5b5061016b611113565b6040516100b3929190611611565b610189600a60005414601d6111b0565b6101a38135158061019c57506001548235145b601e6111b0565b6000808055600280546101b59061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546101e19061166e565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b505050505080602001905181019061024691906117c3565b90507f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa33836040516102799291906117e0565b60405180910390a161028d3415601a6111b0565b80516102a5906001600160a01b03163314601b6111b0565b604080516102f2916102cc9190850135906020808701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260e0015114601c6111b0565b61036360405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519093169284019290925260c080850151908401526101008085015160e085015261012080860151918501919091528582013590840152600b6000554360015590516103ef9183910161189d565b60405160208183030381529060405260029080519060200190610413929190611447565b50505050565b610429600260005414600c6111b0565b6104438135158061043c57506001548235145b600d6111b0565b6000808055600280546104559061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546104819061166e565b80156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b50505050508060200190518101906104e691906118ac565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b83383604051610519929190611936565b60405180910390a161053281602001513414600b6111b0565b61053a6114cb565b815181516001600160a01b03918216905260208084015183518201526040808501518451909101526060808501518451931692019190915260808084015183519091015281513360a09091015281518482013560c09091015280820180516000905251439101526105aa816111da565b505050565b6105bf60086000541460146111b0565b6105d9813515806105d257506001548235145b60156111b0565b6000808055600280546105eb9061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546106179061166e565b80156106645780601f1061063957610100808354040283529160200191610664565b820191906000526020600020905b81548152906001019060200180831161064757829003601f168201915b505050505080602001905181019061067c919061195d565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516106af929190611936565b60405180910390a16106c3341560126111b0565b60608101516106de906001600160a01b0316331460136111b0565b61074860405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519093169284019290925260c0808501519084015260e080850151908401528481013561010084015260096000554360015590516103ef9183910181516001600160a01b03908116825260208084015190830152604080840151908301526060808401518216908301526080808401519083015260a0808401519091169082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b610840600b6000541460226111b0565b61085a8135158061085357506001548235145b60236111b0565b60008080556002805461086c9061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546108989061166e565b80156108e55780601f106108ba576101008083540402835291602001916108e5565b820191906000526020600020905b8154815290600101906020018083116108c857829003601f168201915b50505050508060200190518101906108fd91906117c3565b90506109156040518060200160405280600081525090565b7f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e33846040516109469291906117e0565b60405180910390a161095a3415601f6111b0565b6060820151610975906001600160a01b0316331460206111b0565b604080516109c29161099c9190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360e001511460216111b0565b6109e66109db8361012001518560200160000135611395565b836101000151611395565b81526109f06114cb565b825181516001600160a01b03918216905260208085015183519091015260408085018051845190920191909152606080860151845190841691015260808086015184519091015260a0808601518451931692019190915260c08085015183519091015251825114610a88576080830151825114610a815760c0830151825114610a7a576000610a8b565b6003610a8b565b6002610a8b565b60015b6020808301805192909252905143910152610413816111da565b610ab560016000541460096111b0565b610acf81351580610ac857506001548235145b600a6111b0565b600080805560028054610ae19061166e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0d9061166e565b8015610b5a5780601f10610b2f57610100808354040283529160200191610b5a565b820191906000526020600020905b815481529060010190602001808311610b3d57829003601f168201915b5050505050806020019051810190610b729190611a10565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610ba5929190611936565b60405180910390a1610bbe8160200151341460086111b0565b610c026040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516103ef9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b610c9660096000541460186111b0565b610cb081351580610ca957506001548235145b60196111b0565b600080805560028054610cc29061166e565b80601f0160208091040260200160405190810160405280929190818152602001828054610cee9061166e565b8015610d3b5780601f10610d1057610100808354040283529160200191610d3b565b820191906000526020600020905b815481529060010190602001808311610d1e57829003601f168201915b5050505050806020019051810190610d539190611a7f565b90507fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3383604051610d86929190611936565b60405180910390a1610d9a341560166111b0565b60a0810151610db5906001600160a01b0316331460176111b0565b610e2660405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519093169284019290925260c0808501519084015260e08085015190840152610100808501519084015284810135610120840152600a6000554360015590516103ef9183910161189d565b610ebf60076000541460106111b0565b610ed981351580610ed257506001548235145b60116111b0565b600080805560028054610eeb9061166e565b80601f0160208091040260200160405190810160405280929190818152602001828054610f179061166e565b8015610f645780601f10610f3957610100808354040283529160200191610f64565b820191906000526020600020905b815481529060010190602001808311610f4757829003601f168201915b5050505050806020019051810190610f7c9190611b0f565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03383604051610faf929190611936565b60405180910390a1610fc33415600e6111b0565b8051610fdb906001600160a01b03163314600f6111b0565b61103e60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519093169284019290925260c080850151908401528481013560e084015260086000554360015590516103ef9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152608084015160808401528060a08501511660a08401525060c083015160c083015260e083015160e083015292915050565b6000606060005460028080546111289061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546111549061166e565b80156111a15780601f10611176576101008083540402835291602001916111a1565b820191906000526020600020905b81548152906001019060200180831161118457829003601f168201915b50505050509050915091509091565b816111d65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6020810151516112bf576111ec611505565b8151516001600160a01b0390811680835283516020908101518185019081528551604090810151818701908152875160609081015187168189019081528951608090810151818b019081528b5160a0908101518b16818d019081528d5160c090810151818f0190815260076000554360015589519b8c019c909c529851978a01979097529451938801939093529051881690860152519084015251909316928101929092525160e082015261010001604051602081830303815290604052600290805190602001906105aa929190611447565b60208101515160011415611337578060000151600001516001600160a01b03166108fc6112f583600001516020015160036113e8565b6040518115909202916000818181858888f1935050505015801561131d573d6000803e3d6000fd5b50600080805560018190556113349060029061155d565b50565b6020810151516002141561136d578060000151606001516001600160a01b03166108fc6112f583600001516020015160036113e8565b806000015160a001516001600160a01b03166108fc6112f583600001516020015160036113e8565b6000826113a28382611bca565b91508110156113e25760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016111cd565b92915050565b600081158061140c575082826113fe8183611be2565b925061140a9083611c01565b145b6113e25760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016111cd565b8280546114539061166e565b90600052602060002090601f01602090048101928261147557600085556114bb565b82601f1061148e57805160ff19168380011785556114bb565b828001600101855582156114bb579182015b828111156114bb5782518255916020019190600101906114a0565b506114c7929150611593565b5090565b60405180604001604052806114de611505565b8152602001611500604051806040016040528060008152602001600081525090565b905290565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b5080546115699061166e565b6000825580601f10611579575050565b601f01602090049060005260206000209081019061133491905b5b808211156114c75760008155600101611594565b6000606082840312156115ba57600080fd5b50919050565b6000606082840312156115d257600080fd5b6115dc83836115a8565b9392505050565b6000604082840312156115ba57600080fd5b60006040828403121561160757600080fd5b6115dc83836115e3565b82815260006020604081840152835180604085015260005b8181101561164557858101830151858201606001528201611629565b81811115611657576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061168257607f821691505b602082108114156115ba57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156116d557634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff811182821017156116d557634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461172457600080fd5b919050565b6000610140828403121561173c57600080fd5b6117446116a3565b905061174f8261170d565b815260208201516020820152604082015160408201526117716060830161170d565b60608201526080820151608082015261178c60a0830161170d565b60a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b600061014082840312156117d657600080fd5b6115dc8383611729565b6001600160a01b0383168152608081016115dc60208301848035825260208082013590830152604090810135910152565b80516001600160a01b031682526020810151602083015260408101516040830152606081015161184c60608401826001600160a01b03169052565b506080810151608083015260a081015161187160a08401826001600160a01b03169052565b5060c0818101519083015260e08082015190830152610100808201519083015261012090810151910152565b61014081016113e28284611811565b600060a082840312156118be57600080fd5b60405160a0810181811067ffffffffffffffff821117156118ef57634e487b7160e01b600052604160045260246000fd5b6040526118fb8361170d565b8152602083015160208201526040830151604082015261191d6060840161170d565b6060820152608083015160808201528091505092915050565b6001600160a01b0383168152606081016115dc602083018480358252602090810135910152565b600061010080838503121561197157600080fd5b6040519081019067ffffffffffffffff821181831017156119a257634e487b7160e01b600052604160045260246000fd5b816040526119af8461170d565b815260208401516020820152604084015160408201526119d16060850161170d565b6060820152608084015160808201526119ec60a0850161170d565b60a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060608284031215611a2257600080fd5b6040516060810181811067ffffffffffffffff82111715611a5357634e487b7160e01b600052604160045260246000fd5b604052611a5f8361170d565b815260208301516020820152604083015160408201528091505092915050565b60006101208284031215611a9257600080fd5b611a9a6116db565b611aa38361170d565b81526020830151602082015260408301516040820152611ac56060840161170d565b606082015260808301516080820152611ae060a0840161170d565b60a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060e08284031215611b2157600080fd5b60405160e0810181811067ffffffffffffffff82111715611b5257634e487b7160e01b600052604160045260246000fd5b604052611b5e8361170d565b81526020830151602082015260408301516040820152611b806060840161170d565b606082015260808301516080820152611b9b60a0840161170d565b60a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611bdd57611bdd611bb4565b500190565b6000816000190483118215151615611bfc57611bfc611bb4565b500290565b600082611c1e57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212200c8579c535f0cc77d0c610dc2f089363d23452b0d878d27dc49466b77f3599fc64736f6c634300080c0033`,
  BytecodeLen: 7995,
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
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:117:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:117:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:117:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:58:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:66:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:77:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:86:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:95:13:after expr stmt semicolon',
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
