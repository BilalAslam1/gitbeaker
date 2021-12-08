import { BaseResource } from '@gitbeaker/requester-utils';
import { RequestHelper, GitlabAPIResponse, BaseRequestOptions } from '../infrastructure';

export interface AvatarSchema extends Record<string, unknown> {
  avatar_url: string;
}

export class Avatars<C extends boolean = false> extends BaseResource<C> {
  show<E extends boolean = false>(
    email: string,
    options?: BaseRequestOptions<E>,
  ): Promise<GitlabAPIResponse<AvatarSchema, C, E, never>> {
    return RequestHelper.get<AvatarSchema>()(this, 'avatar', { email, ...options });
  }
}
