import type { Blob } from 'buffer';
import type { BodyOf } from './internal/schema.utils';

import Requester from './internal/requester';

export type ExportRequest = Omit<
  BodyOf<'/v2/projects/{projectId}/export', 'post'>,
  'zip'
>;

type SingleExportRequest = Omit<ExportRequest, 'languages'> & {
  languages: [string];
};

export default class ExportClient {
  constructor(private requester: Requester) {}

  async export(req: ExportRequest): Promise<Blob> {
    return this.requester.requestBlob({
      method: 'POST',
      path: `${this.requester.projectUrl}/export`,
      body: { ...req, zip: true },
    });
  }

  async exportSingle(
    req: SingleExportRequest
  ): Promise<Record<string, string | null>> {
    return this.requester.requestJson({
      method: 'POST',
      path: `${this.requester.projectUrl}/export`,
      body: { ...req, zip: false },
    });
  }
}
