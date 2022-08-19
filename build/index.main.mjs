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
      1: [ctc0, ctc1, ctc1, ctc2],
      2: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc1, ctc2, ctc0, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc0, ctc1, ctc1, ctc1]
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
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v155 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v158 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:31:53:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'makeGuess',
    who: 'Alice'
    });
  const v159 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:32:42:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'throwHand',
    who: 'Alice'
    });
  const v160 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:33:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v161 = stdlib.digest(ctc1, [v160, v159]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v155, v158, v161],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc2],
    pay: [v155, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v164, v165, v166], secs: v168, time: v167, didSend: v37, from: v163 } = txn1;
      
      sim_r.txns.push({
        amt: v164,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v164, v165, v166], secs: v168, time: v167, didSend: v37, from: v163 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v179, v180], secs: v182, time: v181, didSend: v54, from: v178 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v190, v191], secs: v193, time: v192, didSend: v67, from: v189 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v163, v164, v165, v166, v178, v179, v180, v189, v190, v191, v159, v160],
    evt_cnt: 2,
    funcNum: 3,
    lct: v192,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v199, v200], secs: v202, time: v201, didSend: v77, from: v198 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc2, ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v199, v200], secs: v202, time: v201, didSend: v77, from: v198 } = txn4;
  ;
  const v203 = stdlib.addressEq(v163, v198);
  stdlib.assert(v203, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v204 = stdlib.digest(ctc1, [v200, v199]);
  const v205 = stdlib.digestEq(v166, v204);
  stdlib.assert(v205, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:72:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v209, v210], secs: v212, time: v211, didSend: v90, from: v208 } = txn5;
  ;
  const v213 = stdlib.addressEq(v178, v208);
  stdlib.assert(v213, {
    at: './index.rsh:79:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v214 = stdlib.digest(ctc1, [v210, v209]);
  const v215 = stdlib.digestEq(v180, v214);
  stdlib.assert(v215, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:80:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v216 = stdlib.safeAdd(v199, v209);
  const v217 = stdlib.safeAdd(v216, v191);
  const v218 = stdlib.eq(v217, v165);
  const v219 = stdlib.eq(v217, v179);
  const v220 = stdlib.eq(v217, v190);
  const v221 = v220 ? stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:88:5:decimal', stdlib.UInt_max, '0');
  const v222 = v219 ? stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, '2') : v221;
  const v223 = v218 ? stdlib.checkedBigNumberify('./index.rsh:85:27:decimal', stdlib.UInt_max, '1') : v222;
  const v224 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:90:18:decimal', stdlib.UInt_max, '0'));
  if (v224) {
    ;
    ;
    ;
    stdlib.protect(ctc3, await interact.getResult(v223), {
      at: './index.rsh:103:23:application',
      fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
      msg: 'getResult',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const v226 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, '1'));
    if (v226) {
      const v227 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc3, await interact.getResult(v223), {
        at: './index.rsh:103:23:application',
        fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
        msg: 'getResult',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v241 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:92:16:decimal', stdlib.UInt_max, '2'));
      if (v241) {
        const v242 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc3, await interact.getResult(v223), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
          msg: 'getResult',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v257 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:93:22:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc3, await interact.getResult(v223), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v164, v165, v166], secs: v168, time: v167, didSend: v37, from: v163 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v164), {
    at: './index.rsh:43:25:application',
    fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v173 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:44:51:application',
    fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:15:function exp)'],
    msg: 'makeGuess',
    who: 'Bob'
    });
  const v174 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:45:40:application',
    fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:15:function exp)'],
    msg: 'throwHand',
    who: 'Bob'
    });
  const v175 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:46:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:15:function exp)'],
    msg: 'random',
    who: 'Bob'
    });
  const v176 = stdlib.digest(ctc3, [v175, v174]);
  
  const txn2 = await (ctc.sendrecv({
    args: [v163, v164, v165, v166, v173, v176],
    evt_cnt: 2,
    funcNum: 1,
    lct: v167,
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [v164, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v179, v180], secs: v182, time: v181, didSend: v54, from: v178 } = txn2;
      
      sim_r.txns.push({
        amt: v164,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc1, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v179, v180], secs: v182, time: v181, didSend: v54, from: v178 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v190, v191], secs: v193, time: v192, didSend: v67, from: v189 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v199, v200], secs: v202, time: v201, didSend: v77, from: v198 } = txn4;
  ;
  const v203 = stdlib.addressEq(v163, v198);
  stdlib.assert(v203, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v204 = stdlib.digest(ctc3, [v200, v199]);
  const v205 = stdlib.digestEq(v166, v204);
  stdlib.assert(v205, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:72:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const txn5 = await (ctc.sendrecv({
    args: [v163, v164, v165, v178, v179, v180, v189, v190, v191, v199, v174, v175],
    evt_cnt: 2,
    funcNum: 4,
    lct: v201,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:79:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v209, v210], secs: v212, time: v211, didSend: v90, from: v208 } = txn5;
      
      ;
      const v216 = stdlib.safeAdd(v199, v209);
      const v217 = stdlib.safeAdd(v216, v191);
      const v218 = stdlib.eq(v217, v165);
      const v219 = stdlib.eq(v217, v179);
      const v220 = stdlib.eq(v217, v190);
      const v221 = v220 ? stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:88:5:decimal', stdlib.UInt_max, '0');
      const v222 = v219 ? stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, '2') : v221;
      const v223 = v218 ? stdlib.checkedBigNumberify('./index.rsh:85:27:decimal', stdlib.UInt_max, '1') : v222;
      const v224 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:90:18:decimal', stdlib.UInt_max, '0'));
      if (v224) {
        sim_r.txns.push({
          kind: 'from',
          to: v163,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v178,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v189,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        const v226 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, '1'));
        if (v226) {
          const v227 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '3'));
          sim_r.txns.push({
            kind: 'from',
            to: v163,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v241 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:92:16:decimal', stdlib.UInt_max, '2'));
          if (v241) {
            const v242 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v178,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v257 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:93:22:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v189,
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
    tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc1, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v209, v210], secs: v212, time: v211, didSend: v90, from: v208 } = txn5;
  ;
  const v213 = stdlib.addressEq(v178, v208);
  stdlib.assert(v213, {
    at: './index.rsh:79:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v214 = stdlib.digest(ctc3, [v210, v209]);
  const v215 = stdlib.digestEq(v180, v214);
  stdlib.assert(v215, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:80:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v216 = stdlib.safeAdd(v199, v209);
  const v217 = stdlib.safeAdd(v216, v191);
  const v218 = stdlib.eq(v217, v165);
  const v219 = stdlib.eq(v217, v179);
  const v220 = stdlib.eq(v217, v190);
  const v221 = v220 ? stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:88:5:decimal', stdlib.UInt_max, '0');
  const v222 = v219 ? stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, '2') : v221;
  const v223 = v218 ? stdlib.checkedBigNumberify('./index.rsh:85:27:decimal', stdlib.UInt_max, '1') : v222;
  const v224 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:90:18:decimal', stdlib.UInt_max, '0'));
  if (v224) {
    ;
    ;
    ;
    stdlib.protect(ctc2, await interact.getResult(v223), {
      at: './index.rsh:103:23:application',
      fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
      msg: 'getResult',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const v226 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, '1'));
    if (v226) {
      const v227 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc2, await interact.getResult(v223), {
        at: './index.rsh:103:23:application',
        fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
        msg: 'getResult',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v241 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:92:16:decimal', stdlib.UInt_max, '2'));
      if (v241) {
        const v242 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc2, await interact.getResult(v223), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
          msg: 'getResult',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v257 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:93:22:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc2, await interact.getResult(v223), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v164, v165, v166], secs: v168, time: v167, didSend: v37, from: v163 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v179, v180], secs: v182, time: v181, didSend: v54, from: v178 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v164), {
    at: './index.rsh:54:25:application',
    fs: ['at ./index.rsh:53:15:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'acceptWager',
    who: 'Charlie'
    });
  const v187 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:55:55:application',
    fs: ['at ./index.rsh:53:15:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'makeGuess',
    who: 'Charlie'
    });
  const v188 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:56:54:application',
    fs: ['at ./index.rsh:53:15:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'throwHand',
    who: 'Charlie'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v163, v164, v165, v166, v178, v179, v180, v187, v188],
    evt_cnt: 2,
    funcNum: 2,
    lct: v181,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v164, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v190, v191], secs: v193, time: v192, didSend: v67, from: v189 } = txn3;
      
      sim_r.txns.push({
        amt: v164,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc1, ctc4, ctc0, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v190, v191], secs: v193, time: v192, didSend: v67, from: v189 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v199, v200], secs: v202, time: v201, didSend: v77, from: v198 } = txn4;
  ;
  const v203 = stdlib.addressEq(v163, v198);
  stdlib.assert(v203, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Charlie'
    });
  const v204 = stdlib.digest(ctc3, [v200, v199]);
  const v205 = stdlib.digestEq(v166, v204);
  stdlib.assert(v205, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:72:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Charlie'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v209, v210], secs: v212, time: v211, didSend: v90, from: v208 } = txn5;
  ;
  const v213 = stdlib.addressEq(v178, v208);
  stdlib.assert(v213, {
    at: './index.rsh:79:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Charlie'
    });
  const v214 = stdlib.digest(ctc3, [v210, v209]);
  const v215 = stdlib.digestEq(v180, v214);
  stdlib.assert(v215, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:80:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Charlie'
    });
  const v216 = stdlib.safeAdd(v199, v209);
  const v217 = stdlib.safeAdd(v216, v191);
  const v218 = stdlib.eq(v217, v165);
  const v219 = stdlib.eq(v217, v179);
  const v220 = stdlib.eq(v217, v190);
  const v221 = v220 ? stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:88:5:decimal', stdlib.UInt_max, '0');
  const v222 = v219 ? stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, '2') : v221;
  const v223 = v218 ? stdlib.checkedBigNumberify('./index.rsh:85:27:decimal', stdlib.UInt_max, '1') : v222;
  const v224 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:90:18:decimal', stdlib.UInt_max, '0'));
  if (v224) {
    ;
    ;
    ;
    stdlib.protect(ctc2, await interact.getResult(v223), {
      at: './index.rsh:103:23:application',
      fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
      msg: 'getResult',
      who: 'Charlie'
      });
    
    return;
    }
  else {
    const v226 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, '1'));
    if (v226) {
      const v227 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc2, await interact.getResult(v223), {
        at: './index.rsh:103:23:application',
        fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
        msg: 'getResult',
        who: 'Charlie'
        });
      
      return;
      }
    else {
      const v241 = stdlib.eq(v223, stdlib.checkedBigNumberify('./index.rsh:92:16:decimal', stdlib.UInt_max, '2'));
      if (v241) {
        const v242 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc2, await interact.getResult(v223), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
          msg: 'getResult',
          who: 'Charlie'
          });
        
        return;
        }
      else {
        const v257 = stdlib.safeMul(v164, stdlib.checkedBigNumberify('./index.rsh:93:22:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc2, await interact.getResult(v223), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
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
  appApproval: `BiAJAAEDCAIEIChwJgMBAAEBACI1ADEYQQPjKmRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEEDEACgkkkDEAB4EkhBQxAAR8hBRJEIQU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKVwAgNf8hBls1/lcwIDX9V3ggNfxJNQVJIls1+yVbNfqABBBGrXM0+xZQNPoWULA0/TEAEkQ0A1dYIDT6FjT7FlABEkQ0A4GoAVs0+wg0A4GgAVsINfkiJDT5NAOBmAFbEk0hBDT5NAOBUFsSTSM0+TQDIQdbEk1JNfgiEkEAM7EisgE0/rIII7IQNP+yB7OxIrIBNP6yCCOyEDT9sgezsSKyATT+sggjshA0/LIHs0IChzT4IxJBABWxIrIBNP4kC7III7IQNP+yB7NCAms0+CEEEkEAFbEisgE0/iQLsggjshA0/bIHs0ICTrEisgE0/iQLsggjshA0/LIHs0ICOUgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/IQZbNf4hB1s1/VdQIDX8IQhbNftXeCA1+leYIDX5gbgBWzX4gcABWzX3STUFSSJbNfYlWzX1gASkpfCINPYWUDT1FlCwNP8xABJENANXMCA09RY09hZQARJENP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQNPcWUDT2FlAoSwFXAH9nKUsBV38xZ0ghBTUBMgY1AkIBm0ghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQZbNf4hB1s1/VcwIDX8V1AgNfshCFs1+ld4IDX5STUFSSJbNfglWzX3gATzLQoMNPgWUDT3FlCwNP6IAYs0/zT+FlA0/RZQNPxQNPtQNPoWUDT5UDEAUDT4FlA09xZQKEsBVwB/ZylLAVd/SWdIJDUBMgY1AkIA/0kjDEAAfUgjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQZbNf4hB1s1/VcwIDX8STUFSSJbNftXCCA1+oAE/u4Z8TT7FlA0+lCwNP6IAP40/zT+FlA0/RZQNPxQMQBQNPsWUDT6UChLAVcAf2cpSwFXfxlnSCEENQEyBjUCQgB8SIGgjQaIAMUiNAESRDQESSISTDQCEhFESTUFSUkiWzX/JVs1/lcQIDX9gAQWLSg7NP8WUDT+FlA0/VCwNP+IAIwxADT/FlA0/hZQNP1QKEsBVwBQZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v164",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v166",
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
                "name": "v164",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v166",
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
                "name": "v179",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v180",
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
                "name": "v190",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v191",
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
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
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
                "name": "v209",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v210",
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
                "name": "v179",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v180",
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
                "name": "v190",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v191",
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
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
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
                "name": "v209",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v210",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200166c3803806200166c83398101604081905262000026916200025c565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a16020810151516200009c903414600762000155565b620000d1604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014c9260029201906200017f565b50505062000330565b816200017b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018d90620002f3565b90600052602060002090601f016020900481019282620001b15760008555620001fc565b82601f10620001cc57805160ff1916838001178555620001fc565b82800160010185558215620001fc579182015b82811115620001fc578251825591602001919060010190620001df565b506200020a9291506200020e565b5090565b5b808211156200020a57600081556001016200020f565b604051606081016001600160401b03811182821017156200025657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027057600080fd5b604080519081016001600160401b0381118282101715620002a157634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002bb57600080fd5b620002c562000225565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030857607f821691505b602082108114156200032a57634e487b7160e01b600052602260045260246000fd5b50919050565b61132c80620003406000396000f3fe60806040526004361061006e5760003560e01c80639014596a1161004b5780639014596a146100c3578063ab53f2c6146100d6578063ad2d91d1146100f9578063ebdbfdcc1461010c57005b80631e93b0f11461007757806342ae229d1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610dd5565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610dd5565b61035f565b3480156100e257600080fd5b506100eb61056b565b604051610092929190610df8565b610075610107366004610dd5565b610608565b61007561011a366004610dd5565b610887565b61012f6001600054146009610c0b565b6101498135158061014257506001548235145b600a610c0b565b60008080556002805461015b90610e55565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610e55565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ede565b90507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd93338360405161021f929190610f57565b60405180910390a1610238816020015134146008610c0b565b61028a6040518060e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401523360808401528482013560a08401528481013560c0840152600260005543600155516103359183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0918201519181019190915260e00190565b60405160208183030381529060405260029080519060200190610359929190610ce7565b50505050565b61036f600260005414600c610c0b565b6103898135158061038257506001548235145b600d610c0b565b60008080556002805461039b90610e55565b80601f01602080910402602001604051908101604052809291908181526020018280546103c790610e55565b80156104145780601f106103e957610100808354040283529160200191610414565b820191906000526020600020905b8154815290600101906020018083116103f757829003601f168201915b505050505080602001905181019061042c9190610f88565b90507feade97c60783e4c8b7590ebdcad0dcf3d731471c98f3f06328d9701c9d0e1969338360405161045f929190610f57565b60405180910390a161047881602001513414600b610c0b565b6104e960405180610140016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151908501526080808601519093169284019290925260a0808501519084015260c080850151908401523360e08401528481013561010084015284820135610120840152600360005543600155905161033591839101611026565b60006060600054600280805461058090610e55565b80601f01602080910402602001604051908101604052809291908181526020018280546105ac90610e55565b80156105f95780601f106105ce576101008083540402835291602001916105f9565b820191906000526020600020905b8154815290600101906020018083116105dc57829003601f168201915b50505050509050915091509091565b6106186003600054146011610c0b565b6106328135158061062b57506001548235145b6012610c0b565b60008080556002805461064490610e55565b80601f016020809104026020016040519081016040528092919081815260200182805461067090610e55565b80156106bd5780601f10610692576101008083540402835291602001916106bd565b820191906000526020600020905b8154815290600101906020018083116106a057829003601f168201915b50505050508060200190518101906106d591906110bd565b90507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d16343383604051610708929190610f57565b60405180910390a161071c3415600e610c0b565b8051610734906001600160a01b03163314600f610c0b565b604080516107819161075b9190850135906020808701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260600151146010610c0b565b6107f260405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526080808601518416606086015260a0808701519186019190915260c0808701519186019190915260e08087015190941690850152610100808601519385019390935261012080860151938501939093528582013592840192909252600460005543600155905161033591839101611156565b6108976004600054146016610c0b565b6108b1813515806108aa57506001548235145b6017610c0b565b6000808055600280546108c390610e55565b80601f01602080910402602001604051908101604052809291908181526020018280546108ef90610e55565b801561093c5780601f106109115761010080835404028352916020019161093c565b820191906000526020600020905b81548152906001019060200180831161091f57829003601f168201915b505050505080602001905181019061095491906111ee565b9050610973604051806040016040528060008152602001600081525090565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a33846040516109a4929190610f57565b60405180910390a16109b834156013610c0b565b60608201516109d3906001600160a01b031633146014610c0b565b60408051610a20916109fa9190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146015610c0b565b610a44610a398361012001518560200160000135610c35565b836101000151610c35565b808252604083015114610a7e576080820151815114610a775760e0820151815114610a70576000610a81565b6003610a81565b6002610a81565b60015b60208201819052610b6957815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610ac9573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f19350505050158015610b0b573d6000803e3d6000fd5b508160c001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f19350505050158015610b4d573d6000803e3d6000fd5b5060008080556001819055610b6490600290610d6b565b505050565b600181602001511415610bbe5781600001516001600160a01b03166108fc610b9684602001516003610c88565b6040518115909202916000818181858888f19350505050158015610b4d573d6000803e3d6000fd5b600281602001511415610beb5781606001516001600160a01b03166108fc610b9684602001516003610c88565b8160c001516001600160a01b03166108fc610b9684602001516003610c88565b81610c315760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600082610c42838261129d565b9150811015610c825760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610c28565b92915050565b6000811580610cac57508282610c9e81836112b5565b9250610caa90836112d4565b145b610c825760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610c28565b828054610cf390610e55565b90600052602060002090601f016020900481019282610d155760008555610d5b565b82601f10610d2e57805160ff1916838001178555610d5b565b82800160010185558215610d5b579182015b82811115610d5b578251825591602001919060010190610d40565b50610d67929150610da8565b5090565b508054610d7790610e55565b6000825580601f10610d87575050565b601f016020900490600052602060002090810190610da59190610da8565b50565b5b80821115610d675760008155600101610da9565b600060608284031215610dcf57600080fd5b50919050565b600060608284031215610de757600080fd5b610df18383610dbd565b9392505050565b82815260006020604081840152835180604085015260005b81811015610e2c57858101830151858201606001528201610e10565b81811115610e3e576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610e6957607f821691505b60208210811415610dcf57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff81118282101715610ebc57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114610ed957600080fd5b919050565b600060808284031215610ef057600080fd5b6040516080810181811067ffffffffffffffff82111715610f2157634e487b7160e01b600052604160045260246000fd5b604052610f2d83610ec2565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038316815260808101610df160208301848035825260208082013590830152604090810135910152565b600060e08284031215610f9a57600080fd5b60405160e0810181811067ffffffffffffffff82111715610fcb57634e487b7160e01b600052604160045260246000fd5b604052610fd783610ec2565b815260208301516020820152604083015160408201526060830151606082015261100360808401610ec2565b608082015260a083015160a082015260c083015160c08201528091505092915050565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516060830152608083015161107060808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015161109f60e08401826001600160a01b03169052565b50610100838101519083015261012092830151929091019190915290565b600061014082840312156110d057600080fd5b6110d8610e8a565b6110e183610ec2565b815260208301516020820152604083015160408201526060830151606082015261110d60808401610ec2565b608082015260a083015160a082015260c083015160c082015261113260e08401610ec2565b60e08201526101008381015190820152610120928301519281019290925250919050565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161119660608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c08301516111c560c08401826001600160a01b03169052565b5060e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000610140828403121561120157600080fd5b611209610e8a565b61121283610ec2565b8152602083015160208201526040830151604082015261123460608401610ec2565b60608201526080830151608082015260a083015160a082015261125960c08401610ec2565b60c082015260e083810151908201526101008084015190820152610120928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156112b0576112b0611287565b500190565b60008160001904831182151516156112cf576112cf611287565b500290565b6000826112f157634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122062b4d30dd7c6402b8e6e70415fd4b9115564618d3c960668f3d54e6c51518f2364736f6c634300080c0033`,
  BytecodeLen: 5740,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:51:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:73:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:100:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:100:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:100:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:100:11:after expr stmt semicolon',
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
