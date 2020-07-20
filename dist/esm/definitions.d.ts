declare module '@capacitor/core' {
    interface PluginRegistry {
        AppleLogin: AppleLoginPlugin;
    }
}
export interface AppleLoginPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
