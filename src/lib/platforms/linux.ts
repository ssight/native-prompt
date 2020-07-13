import { spawn } from 'child_process';
import { resolve as path } from 'path';

export = function (title: string, body: string, mask: boolean, defaultText: string = ""): Promise<string | null> {
    return new Promise(resolve => {
        const boxSpawner = spawn("bash", [path(__dirname, "../../../", "./native/linux/default.sh").replace("app.asar", "app.asar.unpacked"), title, body, defaultText, mask === true ? "--hide-text" : ""]);

        boxSpawner.stdout.on('data', d => {
            const data = d.toString() as string;
            if (data) resolve(data.trim() || null);
        })

        boxSpawner.on('exit', () => resolve(null));
    })
}