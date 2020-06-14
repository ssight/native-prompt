import checkPlatform from './lib/platform-check';
import { win32, linux, darwin } from './lib/platforms';

const platform = checkPlatform();
export async function prompt(title: string, body: string, defaultText: string = ""): Promise<string | null> {
    switch (platform) {
        case 'win32': return await win32(title, body, defaultText);
        case 'linux': return await linux(title, body, defaultText);
        case 'darwin': return await darwin(title, body, defaultText);
    }
}