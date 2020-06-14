const SUPPORTED_PLATFORMS = ["win32", "linux"];

export = function (): 'win32' | 'linux' | string {
    if (!SUPPORTED_PLATFORMS.includes(process.platform)) throw new Error(`Platform '${process.platform}' is not currently supported.`);
    else return process.platform;
}