import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const API_BASE_URL = '/api';

type ApiRequestOptions = {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	endpoint: string;
	data?: Record<string, unknown>;
	params?: Record<string, unknown>;
	headers?: Record<string, unknown>;
};

export interface IApiService {
	makeApiRequest: {
		<T>(options: ApiRequestOptions): Promise<T>;
		get<T>(
			endpoint: string,
			options?: Omit<ApiRequestOptions, 'method' | 'endpoint'>
		): Promise<T>;
	};
}

const createApiService = () => {
	const api = axios.create({
		baseURL: API_BASE_URL,
	});

	// Add request interceptors
	api.interceptors.request.use(config => {
		config.headers = config.headers || {}; // Ensure headers exist
		config.headers['Content-Security-Policy'] = "default-src 'self'";
		config.headers['X-Content-Type-Options'] = 'nosniff';
		config.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains';
		return config;
	});

	const replaceRouteParams = (
		route: string,
		params: Record<string, unknown>
	) => {
		// Ensure params is defined and has the expected properties
		if (!params) {
			console.warn('No params provided for route replacement');
			return route;
		}

		return route.replace(/:\w+/g, (match) => {
			const paramKey = match.substring(1);
			const replacement = params[paramKey] ? String(params[paramKey]) : match;
			return replacement;
		});
	};

	const makeApiRequest = async <T>(options: ApiRequestOptions): Promise<T> => {
		const MAX_RETRIES = 3;
		let retries = 0;
		
		while (retries < MAX_RETRIES) {
			try {
				const { method, endpoint, data, params, headers } = options;
				const replacedEndpoint = replaceRouteParams(endpoint, params || {});
				
				const response: AxiosResponse<T> = await api.request({
					url: replacedEndpoint,
					method,
					data,
					headers: {
						...headers,
					} as AxiosRequestConfig['headers'],
					params,
					timeout: 10000 // Add 10s timeout
				});
	
				return response.data;
			} catch (error) {
				if (axios.isAxiosError(error)) {
					if (error.code === 'EAI_AGAIN' && retries < MAX_RETRIES) {
						retries++;
						await new Promise(resolve => setTimeout(resolve, 1000 * retries));
						continue;
					}
					throw new Error(`API Error: ${error.message}`);
				}
				throw error;
			}
		}
		throw new Error('Max retries exceeded');
	};

	// Add a .get, .post, etc to makeApiRequest
	makeApiRequest.get = async <T>(
		endpoint: string,
		options?: Omit<ApiRequestOptions, 'method' | 'endpoint'>
	) => {
		return makeApiRequest<T>({ ...options, method: 'GET', endpoint });
	};
	return {
		makeApiRequest,
	};
};

export const useApiService: IApiService = createApiService() as IApiService;