import { spawn } from 'child_process';
import { resolve as path } from 'path';

export = function (title: string, body: string, defaultText: string = ""): Promise<string | null> {
    return new Promise(resolve => {
        const boxSpawner = spawn("osascript", [path(__dirname, "../../../", "./native/darwin.scpt"), title, body, defaultText]);

        boxSpawner.stdout.on('data', d => {
            const data = d.toString() as string;
            if (data) resolve(data.trim().split("text returned:").pop() || null);
        })

        boxSpawner.on('exit', () => resolve(null));
    })
}