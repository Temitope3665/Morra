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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc0, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc0, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]
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
  
  
  const v145 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v148 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:31:53:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'makeGuess',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v145, v148],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v145, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v150, v151], secs: v153, time: v152, didSend: v31, from: v149 } = txn1;
      
      sim_r.txns.push({
        amt: v150,
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
  const {data: [v150, v151], secs: v153, time: v152, didSend: v31, from: v149 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v160], secs: v162, time: v161, didSend: v42, from: v159 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v169], secs: v171, time: v170, didSend: v53, from: v168 } = txn3;
  ;
  const v176 = stdlib.protect(ctc0, await interact.showHand(), {
    at: './index.rsh:57:51:application',
    fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:17:function exp)'],
    msg: 'showHand',
    who: 'Alice'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v149, v150, v151, v159, v160, v168, v169, v176],
    evt_cnt: 1,
    funcNum: 3,
    lct: v170,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v178], secs: v180, time: v179, didSend: v63, from: v177 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v178], secs: v180, time: v179, didSend: v63, from: v177 } = txn4;
  ;
  const v181 = stdlib.addressEq(v149, v177);
  stdlib.assert(v181, {
    at: './index.rsh:59:9:dot',
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
  const {data: [v186], secs: v188, time: v187, didSend: v73, from: v185 } = txn5;
  ;
  const v189 = stdlib.addressEq(v159, v185);
  stdlib.assert(v189, {
    at: './index.rsh:64:7:dot',
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
  const {data: [v194], secs: v196, time: v195, didSend: v83, from: v193 } = txn6;
  ;
  const v197 = stdlib.addressEq(v168, v193);
  stdlib.assert(v197, {
    at: './index.rsh:69:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v198 = stdlib.safeAdd(v178, v186);
  const v199 = stdlib.safeAdd(v198, v194);
  const v200 = stdlib.eq(v199, v151);
  const v201 = stdlib.eq(v199, v160);
  const v202 = stdlib.eq(v199, v169);
  const v203 = v202 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:77:5:decimal', stdlib.UInt_max, '0');
  const v204 = v201 ? stdlib.checkedBigNumberify('./index.rsh:75:25:decimal', stdlib.UInt_max, '2') : v203;
  const v205 = v200 ? stdlib.checkedBigNumberify('./index.rsh:74:27:decimal', stdlib.UInt_max, '1') : v204;
  const v206 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:79:18:decimal', stdlib.UInt_max, '0'));
  if (v206) {
    ;
    ;
    ;
    stdlib.protect(ctc1, await interact.getResult(v205), {
      at: './index.rsh:92:23:application',
      fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
      msg: 'getResult',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const v208 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:80:16:decimal', stdlib.UInt_max, '1'));
    if (v208) {
      const v209 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:80:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc1, await interact.getResult(v205), {
        at: './index.rsh:92:23:application',
        fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
        msg: 'getResult',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v223 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:81:16:decimal', stdlib.UInt_max, '2'));
      if (v223) {
        const v224 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:81:37:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc1, await interact.getResult(v205), {
          at: './index.rsh:92:23:application',
          fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
          msg: 'getResult',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v239 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:82:22:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc1, await interact.getResult(v205), {
          at: './index.rsh:92:23:application',
          fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
          msg: 'getResult',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
  
  
  
  
  
  
  
  
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
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v150, v151], secs: v153, time: v152, didSend: v31, from: v149 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v150), {
    at: './index.rsh:40:25:application',
    fs: ['at ./index.rsh:39:11:application call to [unknown function] (defined at: ./index.rsh:39:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v158 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:41:51:application',
    fs: ['at ./index.rsh:39:11:application call to [unknown function] (defined at: ./index.rsh:39:15:function exp)'],
    msg: 'makeGuess',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v149, v150, v151, v158],
    evt_cnt: 1,
    funcNum: 1,
    lct: v152,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v150, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v160], secs: v162, time: v161, didSend: v42, from: v159 } = txn2;
      
      sim_r.txns.push({
        amt: v150,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v160], secs: v162, time: v161, didSend: v42, from: v159 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v169], secs: v171, time: v170, didSend: v53, from: v168 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v178], secs: v180, time: v179, didSend: v63, from: v177 } = txn4;
  ;
  const v181 = stdlib.addressEq(v149, v177);
  stdlib.assert(v181, {
    at: './index.rsh:59:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v184 = stdlib.protect(ctc0, await interact.showHand(), {
    at: './index.rsh:62:49:application',
    fs: ['at ./index.rsh:61:11:application call to [unknown function] (defined at: ./index.rsh:61:15:function exp)'],
    msg: 'showHand',
    who: 'Bob'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v149, v150, v151, v159, v160, v168, v169, v178, v184],
    evt_cnt: 1,
    funcNum: 4,
    lct: v179,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v186], secs: v188, time: v187, didSend: v73, from: v185 } = txn5;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v186], secs: v188, time: v187, didSend: v73, from: v185 } = txn5;
  ;
  const v189 = stdlib.addressEq(v159, v185);
  stdlib.assert(v189, {
    at: './index.rsh:64:7:dot',
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
  const {data: [v194], secs: v196, time: v195, didSend: v83, from: v193 } = txn6;
  ;
  const v197 = stdlib.addressEq(v168, v193);
  stdlib.assert(v197, {
    at: './index.rsh:69:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v198 = stdlib.safeAdd(v178, v186);
  const v199 = stdlib.safeAdd(v198, v194);
  const v200 = stdlib.eq(v199, v151);
  const v201 = stdlib.eq(v199, v160);
  const v202 = stdlib.eq(v199, v169);
  const v203 = v202 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:77:5:decimal', stdlib.UInt_max, '0');
  const v204 = v201 ? stdlib.checkedBigNumberify('./index.rsh:75:25:decimal', stdlib.UInt_max, '2') : v203;
  const v205 = v200 ? stdlib.checkedBigNumberify('./index.rsh:74:27:decimal', stdlib.UInt_max, '1') : v204;
  const v206 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:79:18:decimal', stdlib.UInt_max, '0'));
  if (v206) {
    ;
    ;
    ;
    stdlib.protect(ctc1, await interact.getResult(v205), {
      at: './index.rsh:92:23:application',
      fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
      msg: 'getResult',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const v208 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:80:16:decimal', stdlib.UInt_max, '1'));
    if (v208) {
      const v209 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:80:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc1, await interact.getResult(v205), {
        at: './index.rsh:92:23:application',
        fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
        msg: 'getResult',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v223 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:81:16:decimal', stdlib.UInt_max, '2'));
      if (v223) {
        const v224 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:81:37:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc1, await interact.getResult(v205), {
          at: './index.rsh:92:23:application',
          fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
          msg: 'getResult',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v239 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:82:22:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc1, await interact.getResult(v205), {
          at: './index.rsh:92:23:application',
          fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
          msg: 'getResult',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  
  
  
  
  
  
  
  
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
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v150, v151], secs: v153, time: v152, didSend: v31, from: v149 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v160], secs: v162, time: v161, didSend: v42, from: v159 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v150), {
    at: './index.rsh:48:25:application',
    fs: ['at ./index.rsh:47:15:application call to [unknown function] (defined at: ./index.rsh:47:19:function exp)'],
    msg: 'acceptWager',
    who: 'Charlie'
    });
  const v167 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:49:55:application',
    fs: ['at ./index.rsh:47:15:application call to [unknown function] (defined at: ./index.rsh:47:19:function exp)'],
    msg: 'makeGuess',
    who: 'Charlie'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v149, v150, v151, v159, v160, v167],
    evt_cnt: 1,
    funcNum: 2,
    lct: v161,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v150, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v169], secs: v171, time: v170, didSend: v53, from: v168 } = txn3;
      
      sim_r.txns.push({
        amt: v150,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v169], secs: v171, time: v170, didSend: v53, from: v168 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v178], secs: v180, time: v179, didSend: v63, from: v177 } = txn4;
  ;
  const v181 = stdlib.addressEq(v149, v177);
  stdlib.assert(v181, {
    at: './index.rsh:59:9:dot',
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
  const {data: [v186], secs: v188, time: v187, didSend: v73, from: v185 } = txn5;
  ;
  const v189 = stdlib.addressEq(v159, v185);
  stdlib.assert(v189, {
    at: './index.rsh:64:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Charlie'
    });
  const v192 = stdlib.protect(ctc0, await interact.showHand(), {
    at: './index.rsh:67:53:application',
    fs: ['at ./index.rsh:66:15:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'showHand',
    who: 'Charlie'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v149, v150, v151, v159, v160, v168, v169, v178, v186, v192],
    evt_cnt: 1,
    funcNum: 5,
    lct: v187,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v194], secs: v196, time: v195, didSend: v83, from: v193 } = txn6;
      
      ;
      const v198 = stdlib.safeAdd(v178, v186);
      const v199 = stdlib.safeAdd(v198, v194);
      const v200 = stdlib.eq(v199, v151);
      const v201 = stdlib.eq(v199, v160);
      const v202 = stdlib.eq(v199, v169);
      const v203 = v202 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:77:5:decimal', stdlib.UInt_max, '0');
      const v204 = v201 ? stdlib.checkedBigNumberify('./index.rsh:75:25:decimal', stdlib.UInt_max, '2') : v203;
      const v205 = v200 ? stdlib.checkedBigNumberify('./index.rsh:74:27:decimal', stdlib.UInt_max, '1') : v204;
      const v206 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:79:18:decimal', stdlib.UInt_max, '0'));
      if (v206) {
        sim_r.txns.push({
          kind: 'from',
          to: v149,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v159,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v168,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        const v208 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:80:16:decimal', stdlib.UInt_max, '1'));
        if (v208) {
          const v209 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:80:37:decimal', stdlib.UInt_max, '3'));
          sim_r.txns.push({
            kind: 'from',
            to: v149,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v223 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:81:16:decimal', stdlib.UInt_max, '2'));
          if (v223) {
            const v224 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:81:37:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v159,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v239 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:82:22:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v168,
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
    tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v194], secs: v196, time: v195, didSend: v83, from: v193 } = txn6;
  ;
  const v197 = stdlib.addressEq(v168, v193);
  stdlib.assert(v197, {
    at: './index.rsh:69:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Charlie'
    });
  const v198 = stdlib.safeAdd(v178, v186);
  const v199 = stdlib.safeAdd(v198, v194);
  const v200 = stdlib.eq(v199, v151);
  const v201 = stdlib.eq(v199, v160);
  const v202 = stdlib.eq(v199, v169);
  const v203 = v202 ? stdlib.checkedBigNumberify('./index.rsh:76:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:77:5:decimal', stdlib.UInt_max, '0');
  const v204 = v201 ? stdlib.checkedBigNumberify('./index.rsh:75:25:decimal', stdlib.UInt_max, '2') : v203;
  const v205 = v200 ? stdlib.checkedBigNumberify('./index.rsh:74:27:decimal', stdlib.UInt_max, '1') : v204;
  const v206 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:79:18:decimal', stdlib.UInt_max, '0'));
  if (v206) {
    ;
    ;
    ;
    stdlib.protect(ctc1, await interact.getResult(v205), {
      at: './index.rsh:92:23:application',
      fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
      msg: 'getResult',
      who: 'Charlie'
      });
    
    return;
    }
  else {
    const v208 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:80:16:decimal', stdlib.UInt_max, '1'));
    if (v208) {
      const v209 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:80:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc1, await interact.getResult(v205), {
        at: './index.rsh:92:23:application',
        fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
        msg: 'getResult',
        who: 'Charlie'
        });
      
      return;
      }
    else {
      const v223 = stdlib.eq(v205, stdlib.checkedBigNumberify('./index.rsh:81:16:decimal', stdlib.UInt_max, '2'));
      if (v223) {
        const v224 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:81:37:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc1, await interact.getResult(v205), {
          at: './index.rsh:92:23:application',
          fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
          msg: 'getResult',
          who: 'Charlie'
          });
        
        return;
        }
      else {
        const v239 = stdlib.safeMul(v150, stdlib.checkedBigNumberify('./index.rsh:82:22:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc1, await interact.getResult(v205), {
          at: './index.rsh:92:23:application',
          fs: ['at ./index.rsh:91:7:application call to [unknown function] (defined at: ./index.rsh:91:34:function exp)'],
          msg: 'getResult',
          who: 'Charlie'
          });
        
        return;
        }}}
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAEDBSACKFAEeAiAASYDAQABAQAiNQAxGEED7CpkSSJbNQEhCls1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJAxAAjJJIQgMQAGeSSUMQAECJRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpXACA1/yEEWzX+VzAgNf1XWCA1/Ek1BRc1+4AEgaqazzT7FlCwNPwxABJENAMhC1s0A4GIAVsINPsINfoiJDT6NAMhCVsSTSEFNPo0AyEHWxJNIzT6NAMhBlsSTUk1+SISQQAzsSKyATT+sggjshA0/7IHs7EisgE0/rIII7IQNP2yB7OxIrIBNP6yCCOyEDT8sgezQgKuNPkjEkEAFbEisgE0/iQLsggjshA0/7IHs0ICkjT5IQUSQQAVsSKyATT+JAuyCCOyEDT9sgezQgJ1sSKyATT+JAuyCCOyEDT8sgezQgJgSCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8hBFs1/iEGWzX9VzAgNfwhB1s1+1dYIDX6IQlbNfkhC1s1+Ek1BRc194AE+YuveDT3FlCwNPwxABJENP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUDT3FlAoSwFXAH9nKUsBV38RZ0glNQEyBjUCQgHlSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEEWzX+IQZbNf1XMCA1/CEHWzX7V1ggNfohCVs1+Uk1BRc1+IAE1Axs1jT4FlCwNP8xABJENP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUChLAVcAf2cpSwFXfwlnSCEINQEyBjUCQgFYSSMMQADiSSEFDEAAekghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/iEGWzX9VzAgNfwhB1s1+0k1BRc1+oAEl073FzT6FlCwNP6IAVM0/zT+FlA0/RZQNPxQNPsWUDEAUDT6FlAoSwFXAH9nKUsBV38BZ0gkNQEyBjUCQgDRSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/iEGWzX9STUFFzX8gATVFRkUNPwWULA0/ogA5TT/NP4WUDT9FlAxAFA0/BZQKEsBVwBYZ0ghBTUBMgY1AkIAcEiBoI0GiAC5IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQpbNf6ABKzRH8M0/xZQNP4WULA0/4gAiDEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCABsxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 144,
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
                "name": "v150",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v151",
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
                "name": "v150",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v151",
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
                "name": "v160",
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
                "name": "v169",
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
                "name": "v178",
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
                "name": "v186",
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
                "name": "v194",
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
                "name": "v160",
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
                "name": "v169",
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
                "name": "v178",
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
                "name": "v186",
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
                "name": "v194",
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
  Bytecode: `0x60806040526040516200177538038062001775833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b61149380620002e26000396000f3fe6080604052600436106100795760003560e01c8063873779a11161004b578063873779a1146100e1578063a209ad4e146100f4578063ab53f2c614610107578063f4cedab01461012a57005b80631e93b0f11461008257806345f70396146100a6578063552d7b8e146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610fdd565b61013d565b6100806100c7366004610fdd565b61037d565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610fdd565b6106b0565b610080610102366004610fdd565b610891565b34801561011357600080fd5b5061011c610b12565b60405161009d929190611000565b610080610138366004610fdd565b610baf565b61014d600260005414600c610e13565b6101678135158061016057506001548235145b600d610e13565b6000808055600280546101799061105d565b80601f01602080910402602001604051908101604052809291908181526020018280546101a59061105d565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a91906110e6565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8338360405161023d929190611170565b60405180910390a161025681602001513414600b610e13565b6102b16040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b019081523360a0808d019182528e8a013560c0808f0191825260036000554360015589519b8c019c909c529851978a0197909752945193880193909352905188169086015251918401919091525190931691810191909152905160e0820152610100015b60405160208183030381529060405260029080519060200190610377929190610eef565b50505050565b61038d6005600054146018610e13565b6103a7813515806103a057506001548235145b6019610e13565b6000808055600280546103b99061105d565b80601f01602080910402602001604051908101604052809291908181526020018280546103e59061105d565b80156104325780601f1061040757610100808354040283529160200191610432565b820191906000526020600020905b81548152906001019060200180831161041557829003601f168201915b505050505080602001905181019061044a9190611197565b9050610469604051806040016040528060008152602001600081525090565b7f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d3338460405161049a929190611170565b60405180910390a16104ae34156016610e13565b60a08201516104c9906001600160a01b031633146017610e13565b6104e96104df8360e00151846101000151610e3d565b6020850135610e3d565b80825260408301511461052357608082015181511461051c5760c0820151815114610515576000610526565b6003610526565b6002610526565b60015b6020820181905261060e57815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561056e573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f193505050501580156105b0573d6000803e3d6000fd5b508160a001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f193505050501580156105f2573d6000803e3d6000fd5b506000808055600181905561060990600290610f73565b505050565b6001816020015114156106635781600001516001600160a01b03166108fc61063b84602001516003610e90565b6040518115909202916000818181858888f193505050501580156105f2573d6000803e3d6000fd5b6002816020015114156106905781606001516001600160a01b03166108fc61063b84602001516003610e90565b8160a001516001600160a01b03166108fc61063b84602001516003610e90565b6106c06001600054146009610e13565b6106da813515806106d357506001548235145b600a610e13565b6000808055600280546106ec9061105d565b80601f01602080910402602001604051908101604052809291908181526020018280546107189061105d565b80156107655780601f1061073a57610100808354040283529160200191610765565b820191906000526020600020905b81548152906001019060200180831161074857829003601f168201915b505050505080602001905181019061077d9190611227565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f722533836040516107b0929190611170565b60405180910390a16107c9816020015134146008610e13565b61080d6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516103539183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b6108a16004600054146014610e13565b6108bb813515806108b457506001548235145b6015610e13565b6000808055600280546108cd9061105d565b80601f01602080910402602001604051908101604052809291908181526020018280546108f99061105d565b80156109465780601f1061091b57610100808354040283529160200191610946565b820191906000526020600020905b81548152906001019060200180831161092957829003601f168201915b505050505080602001905181019061095e9190611296565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03383604051610991929190611170565b60405180910390a16109a534156012610e13565b60608101516109c0906001600160a01b031633146013610e13565b610a2a60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519093169284019290925260c0808501519084015260e080850151908401528481013561010084015260056000554360015590516103539183910181516001600160a01b03908116825260208084015190830152604080840151908301526060808401518216908301526080808401519083015260a0808401519091169082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b600060606000546002808054610b279061105d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b539061105d565b8015610ba05780601f10610b7557610100808354040283529160200191610ba0565b820191906000526020600020905b815481529060010190602001808311610b8357829003601f168201915b50505050509050915091509091565b610bbf6003600054146010610e13565b610bd981351580610bd257506001548235145b6011610e13565b600080805560028054610beb9061105d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c179061105d565b8015610c645780601f10610c3957610100808354040283529160200191610c64565b820191906000526020600020905b815481529060010190602001808311610c4757829003601f168201915b5050505050806020019051810190610c7c9190611349565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13383604051610caf929190611170565b60405180910390a1610cc33415600e610e13565b8051610cdb906001600160a01b03163314600f610e13565b610d3e60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519093169284019290925260c080850151908401528481013560e084015260046000554360015590516103539183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152608084015160808401528060a08501511660a08401525060c083015160c083015260e083015160e083015292915050565b81610e395760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600082610e4a8382611404565b9150811015610e8a5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610e30565b92915050565b6000811580610eb457508282610ea6818361141c565b9250610eb2908361143b565b145b610e8a5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610e30565b828054610efb9061105d565b90600052602060002090601f016020900481019282610f1d5760008555610f63565b82601f10610f3657805160ff1916838001178555610f63565b82800160010185558215610f63579182015b82811115610f63578251825591602001919060010190610f48565b50610f6f929150610fb0565b5090565b508054610f7f9061105d565b6000825580601f10610f8f575050565b601f016020900490600052602060002090810190610fad9190610fb0565b50565b5b80821115610f6f5760008155600101610fb1565b600060408284031215610fd757600080fd5b50919050565b600060408284031215610fef57600080fd5b610ff98383610fc5565b9392505050565b82815260006020604081840152835180604085015260005b8181101561103457858101830151858201606001528201611018565b81811115611046576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061107157607f821691505b60208210811415610fd757634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff811182821017156110c457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146110e157600080fd5b919050565b600060a082840312156110f857600080fd5b60405160a0810181811067ffffffffffffffff8211171561112957634e487b7160e01b600052604160045260246000fd5b604052611135836110ca565b81526020830151602082015260408301516040820152611157606084016110ca565b6060820152608083015160808201528091505092915050565b6001600160a01b038316815260608101610ff9602083018480358252602090810135910152565b600061012082840312156111aa57600080fd5b6111b2611092565b6111bb836110ca565b815260208301516020820152604083015160408201526111dd606084016110ca565b6060820152608083015160808201526111f860a084016110ca565b60a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b60006060828403121561123957600080fd5b6040516060810181811067ffffffffffffffff8211171561126a57634e487b7160e01b600052604160045260246000fd5b604052611276836110ca565b815260208301516020820152604083015160408201528091505092915050565b60006101008083850312156112aa57600080fd5b6040519081019067ffffffffffffffff821181831017156112db57634e487b7160e01b600052604160045260246000fd5b816040526112e8846110ca565b8152602084015160208201526040840151604082015261130a606085016110ca565b60608201526080840151608082015261132560a085016110ca565b60a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060e0828403121561135b57600080fd5b60405160e0810181811067ffffffffffffffff8211171561138c57634e487b7160e01b600052604160045260246000fd5b604052611398836110ca565b815260208301516020820152604083015160408201526113ba606084016110ca565b6060820152608083015160808201526113d560a084016110ca565b60a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611417576114176113ee565b500190565b6000816000190483118215151615611436576114366113ee565b500290565b60008261145857634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220e03460cfb5afeef5c6d3e66be592655f46fe591df7ac65d7e12c3cf27c79fb1164736f6c634300080c0033`,
  BytecodeLen: 6005,
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
  3: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:89:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:89:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:89:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:89:11:after expr stmt semicolon',
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
