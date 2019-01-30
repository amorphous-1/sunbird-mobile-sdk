import { ApiService } from './api';
import { DbService } from './db';
import { AuthService } from './auth';
import { TelemetryService } from './telemetry';
import { SharedPreference } from './util/shared-preference';
import { SdkConfig } from './sdk-config';
import { ContentService } from './content';
import { CourseService } from './course';
import { FormService } from './form';
import { FrameworkService } from './framework';
import { ProfileService } from './profile';
import { KeyValueStore } from './key-value-store';
import { PageAssembleService } from './page';
export declare class SunbirdSdk {
    private static _instance?;
    static readonly instance: SunbirdSdk;
    private _dbService;
    private _telemetryService;
    private _authService;
    private _apiService;
    private _keyValueStore;
    private _profileService;
    private _contentService;
    private _courseService;
    private _formService;
    private _frameworkService;
    private _pageAssembleService;
    private _sharedPreference;
    readonly pageAssembleService: PageAssembleService;
    readonly dbService: DbService;
    readonly telemetryService: TelemetryService;
    readonly authService: AuthService;
    readonly apiService: ApiService;
    readonly keyValueStore: KeyValueStore;
    readonly profileService: ProfileService;
    readonly contentService: ContentService;
    readonly courseService: CourseService;
    readonly formService: FormService;
    readonly frameworkService: FrameworkService;
    readonly sharedPreference: SharedPreference;
    init(sdkConfig: SdkConfig): void;
}