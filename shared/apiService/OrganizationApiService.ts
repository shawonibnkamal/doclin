import { AxiosResponse } from 'axios';
import { AbstracApiService } from './AbstractApiService';
import { OrganizationDTO } from '../types/OrganizationDTO';
import { OrganizationCreateDTO } from '../types/OrganizationCreateDTO';
import { OrganizationGetQueryDTO } from '../types/OrganizationGetQueryDTO';

export class OrganizationApiService extends AbstracApiService {
  private BASE_ORGANIZATION_URL = `/organizations`;

  public async getOrganizations(): Promise<AxiosResponse<OrganizationDTO[]>> {
    const response: AxiosResponse<OrganizationDTO[]> = await this.axiosInstance.get(this.BASE_ORGANIZATION_URL);
    return response;
  }

  public async postOrganization(name: string): Promise<AxiosResponse<OrganizationDTO>> {
    const data: OrganizationCreateDTO = {
      name: name,
    };

    const response: AxiosResponse<OrganizationDTO> = await this.axiosInstance.post(this.BASE_ORGANIZATION_URL, data);
    return response;
  }

  public async getOrganization(organizationId: string): Promise<AxiosResponse<OrganizationDTO>> {
    const params: OrganizationGetQueryDTO = {
      includeMembers: true,
    };

    const response: AxiosResponse<OrganizationDTO> = await this.axiosInstance.get(
      `${this.BASE_ORGANIZATION_URL}/${organizationId}`,
      { params }
    );
    return response;
  }
}
