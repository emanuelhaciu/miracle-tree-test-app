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
	api.interceptors.request.use(
		(config) => {
			return config;
		},
		(error) => {
			// Handle request error
			return Promise.reject(error);
		}
	);

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
			});

			if (response.status < 200 || response.status >= 300) {
				throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
			}

			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				throw new Error(`API Error: ${error.response?.data?.message || error.message}`);
			}
			throw error;
		}
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