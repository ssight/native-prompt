import checkPlatform from './lib/platform-check';
import { win32, linux, darwin } from './lib/platforms';

const platform = checkPlatform();
export = async function (title: string, body: string, options: { defaultText?: string, mask?: boolean }): Promise<string | null> {
    const defaultText: string = options.defaultText || "";
    
    switch (platform) {
        case 'win32': {
            if (options.mask) return await win32.displayMask(title, body, defaultText);
            else return await win32.displayBox(title, body, defaultText);
        }
        case 'linux': return await linux(title, body, options.mask, defaultText);
        case 'darwin': return await darwin(title, body, options.mask, defaultText);
    }
}