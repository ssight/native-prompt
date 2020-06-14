import { spawn } from 'child_process';

export = function (title: string, body: string, defaultText: string = ""): Promise<string | null> {
    return new Promise(resolve => {
        const boxSpawner = spawn("cscript", ['native\\win32.vbs', title, body, defaultText]);

        boxSpawner.stdout.on('data', (d: string) => {
            const data = d.toString();
            if (data.startsWith("RETURN")) resolve(data.replace("RETURN", "").trim() || null);
        })

        boxSpawner.on('exit', () => resolve(null));
    })
}