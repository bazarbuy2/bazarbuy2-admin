import bazarbuyClient from 'bazarbuy2-client';
import settings from 'lib/settings';

let api = null;
const dashboardToken = localStorage.getItem('dashboard_token');
const webstoreToken = localStorage.getItem('webstore_token');

const DEVELOPER_MODE = settings.developerMode === true;

if (dashboardToken || DEVELOPER_MODE === true) {
	api = new bazarbuyClient({
		apiBaseUrl: settings.apiBaseUrl || '/api/v1',
		apiToken: dashboardToken,
		webstoreToken
	});
}

export default api;
