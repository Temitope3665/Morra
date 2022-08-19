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
      2: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc0, ctc1, ctc1],
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
  
  
  const v152 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v155 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:31:53:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'makeGuess',
    who: 'Alice'
    });
  const v156 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:32:42:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'throwHand',
    who: 'Alice'
    });
  const v157 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:33:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v158 = stdlib.digest(ctc1, [v157, v156]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v152, v155, v158],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc2],
    pay: [v152, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v161, v162, v163], secs: v165, time: v164, didSend: v37, from: v160 } = txn1;
      
      sim_r.txns.push({
        amt: v161,
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
  const {data: [v161, v162, v163], secs: v165, time: v164, didSend: v37, from: v160 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v176, v177], secs: v179, time: v178, didSend: v54, from: v175 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v187, v188], secs: v190, time: v189, didSend: v67, from: v186 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v160, v161, v162, v175, v176, v177, v186, v187, v188, v156, v157],
    evt_cnt: 2,
    funcNum: 3,
    lct: v189,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v196, v197], secs: v199, time: v198, didSend: v77, from: v195 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v196, v197], secs: v199, time: v198, didSend: v77, from: v195 } = txn4;
  ;
  const v200 = stdlib.addressEq(v160, v195);
  stdlib.assert(v200, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
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
  const {data: [v204, v205], secs: v207, time: v206, didSend: v87, from: v203 } = txn5;
  ;
  const v208 = stdlib.addressEq(v175, v203);
  stdlib.assert(v208, {
    at: './index.rsh:79:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v209 = stdlib.digest(ctc1, [v205, v204]);
  const v210 = stdlib.digestEq(v177, v209);
  stdlib.assert(v210, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:80:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v211 = stdlib.safeAdd(v196, v204);
  const v212 = stdlib.safeAdd(v211, v188);
  const v213 = stdlib.eq(v212, v162);
  const v214 = stdlib.eq(v212, v176);
  const v215 = stdlib.eq(v212, v187);
  const v216 = v215 ? stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:88:5:decimal', stdlib.UInt_max, '0');
  const v217 = v214 ? stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, '2') : v216;
  const v218 = v213 ? stdlib.checkedBigNumberify('./index.rsh:85:27:decimal', stdlib.UInt_max, '1') : v217;
  const v219 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:90:18:decimal', stdlib.UInt_max, '0'));
  if (v219) {
    ;
    ;
    ;
    stdlib.protect(ctc3, await interact.getResult(v218), {
      at: './index.rsh:103:23:application',
      fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
      msg: 'getResult',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const v221 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, '1'));
    if (v221) {
      const v222 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc3, await interact.getResult(v218), {
        at: './index.rsh:103:23:application',
        fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
        msg: 'getResult',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v236 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:92:16:decimal', stdlib.UInt_max, '2'));
      if (v236) {
        const v237 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc3, await interact.getResult(v218), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
          msg: 'getResult',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v252 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:93:22:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc3, await interact.getResult(v218), {
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
  const {data: [v161, v162, v163], secs: v165, time: v164, didSend: v37, from: v160 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v161), {
    at: './index.rsh:43:25:application',
    fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v170 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:44:51:application',
    fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:15:function exp)'],
    msg: 'makeGuess',
    who: 'Bob'
    });
  const v171 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:45:40:application',
    fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:15:function exp)'],
    msg: 'throwHand',
    who: 'Bob'
    });
  const v172 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:46:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:15:function exp)'],
    msg: 'random',
    who: 'Bob'
    });
  const v173 = stdlib.digest(ctc3, [v172, v171]);
  
  const txn2 = await (ctc.sendrecv({
    args: [v160, v161, v162, v170, v173],
    evt_cnt: 2,
    funcNum: 1,
    lct: v164,
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [v161, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v176, v177], secs: v179, time: v178, didSend: v54, from: v175 } = txn2;
      
      sim_r.txns.push({
        amt: v161,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v176, v177], secs: v179, time: v178, didSend: v54, from: v175 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v187, v188], secs: v190, time: v189, didSend: v67, from: v186 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v196, v197], secs: v199, time: v198, didSend: v77, from: v195 } = txn4;
  ;
  const v200 = stdlib.addressEq(v160, v195);
  stdlib.assert(v200, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn5 = await (ctc.sendrecv({
    args: [v160, v161, v162, v175, v176, v177, v186, v187, v188, v196, v171, v172],
    evt_cnt: 2,
    funcNum: 4,
    lct: v198,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:79:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v204, v205], secs: v207, time: v206, didSend: v87, from: v203 } = txn5;
      
      ;
      const v211 = stdlib.safeAdd(v196, v204);
      const v212 = stdlib.safeAdd(v211, v188);
      const v213 = stdlib.eq(v212, v162);
      const v214 = stdlib.eq(v212, v176);
      const v215 = stdlib.eq(v212, v187);
      const v216 = v215 ? stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:88:5:decimal', stdlib.UInt_max, '0');
      const v217 = v214 ? stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, '2') : v216;
      const v218 = v213 ? stdlib.checkedBigNumberify('./index.rsh:85:27:decimal', stdlib.UInt_max, '1') : v217;
      const v219 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:90:18:decimal', stdlib.UInt_max, '0'));
      if (v219) {
        sim_r.txns.push({
          kind: 'from',
          to: v160,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v175,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v186,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        const v221 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, '1'));
        if (v221) {
          const v222 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '3'));
          sim_r.txns.push({
            kind: 'from',
            to: v160,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v236 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:92:16:decimal', stdlib.UInt_max, '2'));
          if (v236) {
            const v237 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v175,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v252 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:93:22:decimal', stdlib.UInt_max, '3'));
            sim_r.txns.push({
              kind: 'from',
              to: v186,
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
  const {data: [v204, v205], secs: v207, time: v206, didSend: v87, from: v203 } = txn5;
  ;
  const v208 = stdlib.addressEq(v175, v203);
  stdlib.assert(v208, {
    at: './index.rsh:79:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v209 = stdlib.digest(ctc3, [v205, v204]);
  const v210 = stdlib.digestEq(v177, v209);
  stdlib.assert(v210, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:80:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v211 = stdlib.safeAdd(v196, v204);
  const v212 = stdlib.safeAdd(v211, v188);
  const v213 = stdlib.eq(v212, v162);
  const v214 = stdlib.eq(v212, v176);
  const v215 = stdlib.eq(v212, v187);
  const v216 = v215 ? stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:88:5:decimal', stdlib.UInt_max, '0');
  const v217 = v214 ? stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, '2') : v216;
  const v218 = v213 ? stdlib.checkedBigNumberify('./index.rsh:85:27:decimal', stdlib.UInt_max, '1') : v217;
  const v219 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:90:18:decimal', stdlib.UInt_max, '0'));
  if (v219) {
    ;
    ;
    ;
    stdlib.protect(ctc2, await interact.getResult(v218), {
      at: './index.rsh:103:23:application',
      fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
      msg: 'getResult',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const v221 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, '1'));
    if (v221) {
      const v222 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc2, await interact.getResult(v218), {
        at: './index.rsh:103:23:application',
        fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
        msg: 'getResult',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v236 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:92:16:decimal', stdlib.UInt_max, '2'));
      if (v236) {
        const v237 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc2, await interact.getResult(v218), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
          msg: 'getResult',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v252 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:93:22:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc2, await interact.getResult(v218), {
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
  const {data: [v161, v162, v163], secs: v165, time: v164, didSend: v37, from: v160 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v176, v177], secs: v179, time: v178, didSend: v54, from: v175 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v161), {
    at: './index.rsh:54:25:application',
    fs: ['at ./index.rsh:53:15:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'acceptWager',
    who: 'Charlie'
    });
  const v184 = stdlib.protect(ctc0, await interact.makeGuess(), {
    at: './index.rsh:55:55:application',
    fs: ['at ./index.rsh:53:15:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'makeGuess',
    who: 'Charlie'
    });
  const v185 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:56:54:application',
    fs: ['at ./index.rsh:53:15:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'throwHand',
    who: 'Charlie'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v160, v161, v162, v175, v176, v177, v184, v185],
    evt_cnt: 2,
    funcNum: 2,
    lct: v178,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v161, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v187, v188], secs: v190, time: v189, didSend: v67, from: v186 } = txn3;
      
      sim_r.txns.push({
        amt: v161,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v187, v188], secs: v190, time: v189, didSend: v67, from: v186 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v196, v197], secs: v199, time: v198, didSend: v77, from: v195 } = txn4;
  ;
  const v200 = stdlib.addressEq(v160, v195);
  stdlib.assert(v200, {
    at: './index.rsh:71:9:dot',
    fs: [],
    msg: 'sender correct',
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
  const {data: [v204, v205], secs: v207, time: v206, didSend: v87, from: v203 } = txn5;
  ;
  const v208 = stdlib.addressEq(v175, v203);
  stdlib.assert(v208, {
    at: './index.rsh:79:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Charlie'
    });
  const v209 = stdlib.digest(ctc3, [v205, v204]);
  const v210 = stdlib.digestEq(v177, v209);
  stdlib.assert(v210, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:80:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Charlie'
    });
  const v211 = stdlib.safeAdd(v196, v204);
  const v212 = stdlib.safeAdd(v211, v188);
  const v213 = stdlib.eq(v212, v162);
  const v214 = stdlib.eq(v212, v176);
  const v215 = stdlib.eq(v212, v187);
  const v216 = v215 ? stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:88:5:decimal', stdlib.UInt_max, '0');
  const v217 = v214 ? stdlib.checkedBigNumberify('./index.rsh:86:25:decimal', stdlib.UInt_max, '2') : v216;
  const v218 = v213 ? stdlib.checkedBigNumberify('./index.rsh:85:27:decimal', stdlib.UInt_max, '1') : v217;
  const v219 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:90:18:decimal', stdlib.UInt_max, '0'));
  if (v219) {
    ;
    ;
    ;
    stdlib.protect(ctc2, await interact.getResult(v218), {
      at: './index.rsh:103:23:application',
      fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
      msg: 'getResult',
      who: 'Charlie'
      });
    
    return;
    }
  else {
    const v221 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:91:16:decimal', stdlib.UInt_max, '1'));
    if (v221) {
      const v222 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:91:37:decimal', stdlib.UInt_max, '3'));
      ;
      stdlib.protect(ctc2, await interact.getResult(v218), {
        at: './index.rsh:103:23:application',
        fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
        msg: 'getResult',
        who: 'Charlie'
        });
      
      return;
      }
    else {
      const v236 = stdlib.eq(v218, stdlib.checkedBigNumberify('./index.rsh:92:16:decimal', stdlib.UInt_max, '2'));
      if (v236) {
        const v237 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:92:37:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc2, await interact.getResult(v218), {
          at: './index.rsh:103:23:application',
          fs: ['at ./index.rsh:102:7:application call to [unknown function] (defined at: ./index.rsh:102:34:function exp)'],
          msg: 'getResult',
          who: 'Charlie'
          });
        
        return;
        }
      else {
        const v252 = stdlib.safeMul(v161, stdlib.checkedBigNumberify('./index.rsh:93:22:decimal', stdlib.UInt_max, '3'));
        ;
        stdlib.protect(ctc2, await interact.getResult(v218), {
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
  appApproval: `BiALAAEDCAIEIChQoAGYASYDAQABAQAiNQAxGEEDsipkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAmNJJAxAAc1JIQUMQAEdIQUSRCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSlcAIDX/IQZbNf5XMCA1/Vd4IDX8STUFSSJbNfslWzX6gAQQRq1zNPsWUDT6FlCwNP0xABJENANXWCA0+hY0+xZQARJENAOBqAFbNPsINAMhCVsINfkiJDT5NAMhClsSTSEENPk0AyEIWxJNIzT5NAMhB1sSTUk1+CISQQAzsSKyATT+sggjshA0/7IHs7EisgE0/rIII7IQNP2yB7OxIrIBNP6yCCOyEDT8sgezQgJYNPgjEkEAFbEisgE0/iQLsggjshA0/7IHs0ICPDT4IQQSQQAVsSKyATT+JAuyCCOyEDT9sgezQgIfsSKyATT+JAuyCCOyEDT8sgezQgIKSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8hBls1/iEHWzX9VzAgNfwhCFs1+1dYIDX6V3ggNfkhCls1+CEJWzX3STUFSSJbNfYlWzX1gASkpfCINPYWUDT1FlCwNP8xABJENP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQNPcWUDT2FlAoSwFXAH9nKUsBV38xZ0ghBTUBMgY1AkIBfUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8hBls1/iEHWzX9VzAgNfwhCFs1+1dYIDX6STUFSSJbNfklWzX4gATzLQoMNPkWUDT4FlCwNP6IAXY0/zT+FlA0/RZQNPxQNPsWUDT6UDEAUDT5FlA0+BZQKEsBVwB/ZylLAVd/KWdIJDUBMgY1AkIA7UkjDEAAbkgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQZbNf4hB1s1/Uk1BUkiWzX8VwggNfuABP7uGfE0/BZQNPtQsDT+iADxNP80/hZQNP0WUDEAUDT8FlA0+1AoSwFXAHhnSCEENQEyBjUCQgB5SIGgjQaIAMIiNAESRDQESSISTDQCEhFESTUFSUkiWzX/JVs1/lcQIDX9gAQWLSg7NP8WUDT+FlA0/VCwNP+IAIkxADT/FlA0/hZQKEsBVwAwZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
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
                "name": "v161",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v162",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v163",
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
                "name": "v161",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v162",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v163",
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
                "name": "v176",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v177",
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
                "name": "v187",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
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
                "name": "v196",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v197",
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
                "name": "v204",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
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
                "name": "v176",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v177",
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
                "name": "v187",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
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
                "name": "v196",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v197",
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
                "name": "v204",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
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
  Bytecode: `0x60806040526040516200159e3803806200159e83398101604081905262000026916200023f565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a16020810151516200009c903414600762000138565b620000ca604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012f92600292019062000162565b50505062000313565b816200015e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017090620002d6565b90600052602060002090601f016020900481019282620001945760008555620001df565b82601f10620001af57805160ff1916838001178555620001df565b82800160010185558215620001df579182015b82811115620001df578251825591602001919060010190620001c2565b50620001ed929150620001f1565b5090565b5b80821115620001ed5760008155600101620001f2565b604051606081016001600160401b03811182821017156200023957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200025357600080fd5b604080519081016001600160401b03811182821017156200028457634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200029e57600080fd5b620002a862000208565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c90821680620002eb57607f821691505b602082108114156200030d57634e487b7160e01b600052602260045260246000fd5b50919050565b61127b80620003236000396000f3fe60806040526004361061006e5760003560e01c80639014596a1161004b5780639014596a146100c3578063ab53f2c6146100d6578063ad2d91d1146100f9578063ebdbfdcc1461010c57005b80631e93b0f11461007757806342ae229d1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610da8565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610da8565b610333565b3480156100e257600080fd5b506100eb610597565b604051610092929190610dcb565b610075610107366004610da8565b610634565b61007561011a366004610da8565b61085a565b61012f6001600054146009610bde565b6101498135158061014257506001548235145b600a610bde565b60008080556002805461015b90610e28565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610e28565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ee3565b90507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd93338360405161021f929190610f52565b60405180910390a1610238816020015134146008610bde565b6102836040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b039081168083526020808501518185019081526040808701518187019081523360608089019182528a8601356080808b019182528c86013560a0808d019182526002600055436001558751998a019a909a529651958801959095529251908601525190951690830152925191810191909152905160c082015260e0015b6040516020818303038152906040526002908051906020019061032d929190610cba565b50505050565b610343600260005414600c610bde565b61035d8135158061035657506001548235145b600d610bde565b60008080556002805461036f90610e28565b80601f016020809104026020016040519081016040528092919081815260200182805461039b90610e28565b80156103e85780601f106103bd576101008083540402835291602001916103e8565b820191906000526020600020905b8154815290600101906020018083116103cb57829003601f168201915b50505050508060200190518101906104009190610f83565b90507feade97c60783e4c8b7590ebdcad0dcf3d731471c98f3f06328d9701c9d0e19693383604051610433929190610f52565b60405180910390a161044c81602001513414600b610bde565b6104b660405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a080850151908401523360c08401528481013560e08401528482013561010084015260036000554360015590516103099183910181516001600160a01b03908116825260208084015190830152604080840151908301526060808401518216908301526080808401519083015260a0808401519083015260c0808401519091169082015260e0808301519082015261010091820151918101919091526101200190565b6000606060005460028080546105ac90610e28565b80601f01602080910402602001604051908101604052809291908181526020018280546105d890610e28565b80156106255780601f106105fa57610100808354040283529160200191610625565b820191906000526020600020905b81548152906001019060200180831161060857829003601f168201915b50505050509050915091509091565b6106446003600054146010610bde565b61065e8135158061065757506001548235145b6011610bde565b60008080556002805461067090610e28565b80601f016020809104026020016040519081016040528092919081815260200182805461069c90610e28565b80156106e95780601f106106be576101008083540402835291602001916106e9565b820191906000526020600020905b8154815290600101906020018083116106cc57829003601f168201915b50505050508060200190518101906107019190611017565b90507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d16343383604051610734929190610f52565b60405180910390a16107483415600e610bde565b8051610760906001600160a01b03163314600f610bde565b6107d160405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601518416908501526080808601519085015260a0808601519085015260c0808601519093169284019290925260e080850151908401526101008085015190840152848101356101208401526004600055436001559051610309918391016110a5565b61086a6004600054146015610bde565b6108848135158061087d57506001548235145b6016610bde565b60008080556002805461089690610e28565b80601f01602080910402602001604051908101604052809291908181526020018280546108c290610e28565b801561090f5780601f106108e45761010080835404028352916020019161090f565b820191906000526020600020905b8154815290600101906020018083116108f257829003601f168201915b5050505050806020019051810190610927919061113d565b9050610946604051806040016040528060008152602001600081525090565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610977929190610f52565b60405180910390a161098b34156012610bde565b60608201516109a6906001600160a01b031633146013610bde565b604080516109f3916109cd9190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146014610bde565b610a17610a0c8361012001518560200160000135610c08565b836101000151610c08565b808252604083015114610a51576080820151815114610a4a5760e0820151815114610a43576000610a54565b6003610a54565b6002610a54565b60015b60208201819052610b3c57815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a9c573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f19350505050158015610ade573d6000803e3d6000fd5b508160c001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f19350505050158015610b20573d6000803e3d6000fd5b5060008080556001819055610b3790600290610d3e565b505050565b600181602001511415610b915781600001516001600160a01b03166108fc610b6984602001516003610c5b565b6040518115909202916000818181858888f19350505050158015610b20573d6000803e3d6000fd5b600281602001511415610bbe5781606001516001600160a01b03166108fc610b6984602001516003610c5b565b8160c001516001600160a01b03166108fc610b6984602001516003610c5b565b81610c045760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600082610c1583826111ec565b9150811015610c555760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610bfb565b92915050565b6000811580610c7f57508282610c718183611204565b9250610c7d9083611223565b145b610c555760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610bfb565b828054610cc690610e28565b90600052602060002090601f016020900481019282610ce85760008555610d2e565b82601f10610d0157805160ff1916838001178555610d2e565b82800160010185558215610d2e579182015b82811115610d2e578251825591602001919060010190610d13565b50610d3a929150610d7b565b5090565b508054610d4a90610e28565b6000825580601f10610d5a575050565b601f016020900490600052602060002090810190610d789190610d7b565b50565b5b80821115610d3a5760008155600101610d7c565b600060608284031215610da257600080fd5b50919050565b600060608284031215610dba57600080fd5b610dc48383610d90565b9392505050565b82815260006020604081840152835180604085015260005b81811015610dff57858101830151858201606001528201610de3565b81811115610e11576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610e3c57607f821691505b60208210811415610da257634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff81118282101715610e8f57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610140810167ffffffffffffffff81118282101715610e8f57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114610ede57600080fd5b919050565b600060608284031215610ef557600080fd5b6040516060810181811067ffffffffffffffff82111715610f2657634e487b7160e01b600052604160045260246000fd5b604052610f3283610ec7565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b038316815260808101610dc460208301848035825260208082013590830152604090810135910152565b600060c08284031215610f9557600080fd5b60405160c0810181811067ffffffffffffffff82111715610fc657634e487b7160e01b600052604160045260246000fd5b604052610fd283610ec7565b81526020830151602082015260408301516040820152610ff460608401610ec7565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610120828403121561102a57600080fd5b611032610e5d565b61103b83610ec7565b8152602083015160208201526040830151604082015261105d60608401610ec7565b60608201526080830151608082015260a083015160a082015261108260c08401610ec7565b60c082015260e08381015190820152610100928301519281019290925250919050565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516110e560608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015161111460c08401826001600160a01b03169052565b5060e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000610140828403121561115057600080fd5b611158610e95565b61116183610ec7565b8152602083015160208201526040830151604082015261118360608401610ec7565b60608201526080830151608082015260a083015160a08201526111a860c08401610ec7565b60c082015260e083810151908201526101008084015190820152610120928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156111ff576111ff6111d6565b500190565b600081600019048311821515161561121e5761121e6111d6565b500290565b60008261124057634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212207f4901c58c3cc2a6a1d97d4a61759af065784a0998127c6824f92cb206233e4264736f6c634300080c0033`,
  BytecodeLen: 5534,
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
