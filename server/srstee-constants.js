const srsteeConstants = {
    srsteeEndPoint: "ws://localhost:2222",
    syncConfigRequestHeader: "HEADER:accept-push-config\nBODY:",
    syncDataRequestHeader: "HEADER:accept-push-data\nBODY:",
    request2Client2SendFilesHeader: "client2send",
    syncCompletedResponseHeader: "completed",
    request2Server2SendFilesHeader: "server2send",
    pushStatusHeader: "HEADER:push-status:",
    getAccessToken: "getAccessToken",
    authFailed: "authFailed",
    srsteeRoot: "client",
    payloadSent: "payloadSent",
    payloadChunkSent: "payloadChunkSent",
    request2Server2UpdateBundle: "UpdateBundle",
    request2Server2UpdateBundleMap: "UpdateBundleMap",
    Delimiter: ":~:~:",
    enableBundling: "EnableBundling",
    disableBundling: "DisableBundling"
}
module.exports = srsteeConstants;
