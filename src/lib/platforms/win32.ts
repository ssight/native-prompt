import { spawn } from 'child_process';
import { resolve as path } from 'path';

export function displayBox(title: string, body: string, defaultText: string = ""): Promise<string | null> {
    return new Promise(resolve => {
        const boxSpawner = spawn("cscript", [path(__dirname, '../../../', 'native/win32/default.vbs').replace("app.asar", "app.asar.unpacked"), title, body, defaultText]);

        boxSpawner.stdout.on('data', (d: string) => {
            const data = d.toString();
            if (data.startsWith("RETURN")) resolve(data.replace("RETURN", "").trim() || null);
        })

        boxSpawner.on('exit', () => resolve(null));
    })
}

export function displayMask(title: string, body: string, defaultText: string = ""): Promise<string | null> {
    return new Promise(resolve => {
        const boxSpawner = spawn("powershell", ["-ExecutionPolicy", "Bypass", "-File", path(__dirname, '../../../', 'native/win32/mask.ps1').replace("app.asar", "app.asar.unpacked"), title, body, defaultText]);

        boxSpawner.stdout.on('data', (d: string) => {
            const data = d.toString();
            if (data.startsWith("RETURN")) resolve(data.replace("RETURN", "").trim() || null);
        })

        boxSpawner.on('exit', () => resolve(null));
    })
}