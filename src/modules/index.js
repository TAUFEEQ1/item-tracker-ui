const statuses = {
    INIT: "initializing",
    SCANNING: "scanning",
    VERIFYING: "verifying",
  };
const statusTexts = {
    [statuses.VERIFYING]:"Verifying QR Code ...",
    [statuses.SCANNING]:"Scanning QR Code ...",
    [statuses.INIT]:"Scan QR Code"
}
const depts = {
  LEVEL_0:'level_0',
  LEVEL_1:'level_1',
  LEVEL_2:'level_2',
  LEVEL_3:'level_3'
}
export {
  statuses,
  statusTexts,
  depts
}