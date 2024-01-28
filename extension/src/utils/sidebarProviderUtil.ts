import { getAuthenticatedUser } from "../providerHelpers/authenticationProviderHelper"
import { getCurrentOrganization } from "../providerHelpers/organizationProviderHelper"
import { getCurrentProject, getGithubUrl } from "../providerHelpers/projectProviderHelper"

export const getExtensionState = async () => {
  try {
    return {
      user: await getAuthenticatedUser(),
      organization: await getCurrentOrganization(),
      project: await getCurrentProject(),
      githubUrl: await getGithubUrl()
    }
  } catch (error) {
    return { error }
  }
}