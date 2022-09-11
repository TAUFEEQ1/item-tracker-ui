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
export {
  statuses,
  statusTexts
}