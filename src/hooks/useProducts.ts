import { Product } from '../models/Product';
import { axiosInstance } from '../utils/axiosSetup'

type ReturnValues = {
    fetchProducts: (limit?: number) => Promise<Product[] | undefined>;
    fetchProduct: (id: number) => Promise<Product | undefined>;
}


export const useProducts = (): ReturnValues => {

    const fetchProducts = async (limit = 4): Promise<Product[] | undefined> => {
        const { data, status } = await axiosInstance.get(`/products?limit=${limit}`);
        if (data) {
            return data;
        }
    }
    const fetchProduct = async (id: number): Promise<Product | undefined> => {
        const { data, status } = await axiosInstance.get(`/products/${id}`);
        if (data) {
            return data;
        }
    }
    return { fetchProducts, fetchProduct }
}
