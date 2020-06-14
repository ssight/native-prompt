import { spawn } from 'child_process';

export = function (title: string, body: string, defaultText: string = ""): Promise<string | null> {
    return new Promise(resolve => {
        const boxSpawner = spawn("bash", ["./native/linux.sh", title, body, defaultText]);

        boxSpawner.stdout.on('data', d => {
            const data = d.toString() as string;
            if (data) resolve(data.trim());
        })

        boxSpawner.on('exit', () => resolve(null));
    })
}