//Campaign specific API functions goes here
const API_BASE_URL = "https://localhost:5001";
const ENTITY_URL = "api/campaigns";

export const getCampaigns = () => {
  return fetch(`${API_BASE_URL}/${ENTITY_URL}`).then((response) =>
    response.json()
  );
};
