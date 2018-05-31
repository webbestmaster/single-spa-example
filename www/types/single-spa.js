// @flow

export type LoaderDetectorType = (location: Location) => boolean;
export type ModuleEventListenerType = (props: string) => Promise<void>;
export type ModuleType = {|
    +bootstrap: ModuleEventListenerType,
    +mount: ModuleEventListenerType,
    +unmount: ModuleEventListenerType
|};

export type LoadedModuleType = () => Promise<ModuleType>;
