export const idlFactory = ({ IDL }) => {
  const NFT = IDL.Service({
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getOnwer' : IDL.Func([], [IDL.Principal], ['query']),
    'getimage' : IDL.Func([], [IDL.Vec(IDL.Nat8)], ['query']),
  });
  return NFT;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Principal, IDL.Vec(IDL.Nat8)];
};
