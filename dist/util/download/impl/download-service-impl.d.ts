import { DownloadCancelRequest, DownloadRequest, DownloadService } from '..';
import { Observable } from 'rxjs';
import { SdkServiceOnInitDelegate } from '../../../sdk-service-on-init-delegate';
import { EventsBusService } from '../../../events-bus';
import { SharedPreferences } from '../../shared-preferences';
import { DownloadCompleteDelegate } from '../def/download-complete-delegate';
export declare class DownloadServiceImpl implements DownloadService, SdkServiceOnInitDelegate {
    private eventsBusService;
    private sharedPreferences;
    private static readonly KEY_TO_DOWNLOAD_LIST;
    private static readonly DOWNLOAD_DIR_NAME;
    private currentDownloadRequest$;
    private downloadCompleteDelegate?;
    private sharedPreferencesSetCollection;
    constructor(eventsBusService: EventsBusService, sharedPreferences: SharedPreferences);
    private static generateDownloadStartTelemetry;
    private static generateDownloadCompleteTelemetry;
    private static generateDownloadCancelTelemetry;
    onInit(): Observable<undefined>;
    download(downloadRequests: DownloadRequest[]): Observable<undefined>;
    cancel(downloadCancelRequest: DownloadCancelRequest, generateTelemetry?: boolean): Observable<undefined>;
    cancelAll(): Observable<void>;
    registerOnDownloadCompleteDelegate(downloadCompleteDelegate: DownloadCompleteDelegate): void;
    getActiveDownloadRequests(): Observable<DownloadRequest[]>;
    private switchToNextDownloadRequest;
    private addToDownloadList;
    private removeFromDownloadList;
    private removeAllFromDownloadList;
    private handleDownloadCompletion;
    private emitProgressInEventBus;
    private getDownloadProgress;
    private listenForDownloadProgressChanges;
}
