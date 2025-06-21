export const API_URL = "https://ott.gpay.one/api";

import AsyncStorage from '@react-native-async-storage/async-storage';

export const fn_getBrandsApi = async (selectedCategories: any | null, globalFilterCities: any | null) => {
    try {
        const response = await fetch(`${API_URL}/brand/get-all?status=true${selectedCategories?.length > 0 ? `&category=${selectedCategories}` : ''}&cities=${JSON.stringify(globalFilterCities)}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const data = await response.json();
        if (response?.status === 200) {
            return { status: true, data: data.data };
        }
    } catch (error: any) {
        console.error("Error fetching brands:", error);
        return { status: false, message: error?.response?.data?.message || "Network Error" };
    }
};

export const fn_getCategoriesApi = async () => {
    try {
        const response = await fetch(`${API_URL}/category/get-all`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const data = await response.json();
        if (response?.status === 200) {
            return { status: true, data: data.data };
        }
    } catch (error: any) {
        console.error("Error fetching brands:", error);
        return { status: false, message: error?.response?.data?.message || "Network Error" };
    }
};

export const fn_getDiscountByBrandIdApi = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/post/get/${id}?status=active`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const data = await response.json();
        if (response?.status === 200) {
            return { status: true, data: data.data };
        }
    } catch (error: any) {
        console.error("Error fetching brands:", error);
        return { status: false, message: error?.response?.data?.message || "Network Error" };
    }
};

export const fn_getDiscountWithBrandApi = async (page: any, globalFilterCities: any | null) => {
    try {
        const response = await fetch(`${API_URL}/post/get-with-brand?status=active&page=${page}&cities=${JSON.stringify(globalFilterCities)}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const data = await response.json();
        if (response?.status === 200) {
            return { status: true, data: data.data };
        }
    } catch (error: any) {
        console.error("Error fetching brands:", error);
        return { status: false, message: error?.response?.data?.message || "Network Error" };
    }
};

export const fn_getPostDetailsApi = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/post/get-post/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const data = await response.json();
        if (response?.status === 200) {
            return { status: true, data: data.data };
        }
    } catch (error: any) {
        console.error("Error fetching brands:", error);
        return { status: false, message: error?.response?.data?.message || "Network Error" };
    }
};

export const fn_favouriteToggleApi = async (id: string) => {
    try {
        const favouritesString = await AsyncStorage.getItem('favourites');
        let favourites: string[] = favouritesString ? JSON.parse(favouritesString) : [];

        if (favourites.includes(id)) {
            favourites = favourites.filter(favId => favId !== id);
            console.log(`❌ Removed ID ${id} from favourites`);
        } else {
            favourites.push(id);
            console.log(`✅ Added ID ${id} to favourites`);
        }

        await AsyncStorage.setItem('favourites', JSON.stringify(favourites));
        console.log("Updated favourites: ", favourites);
    } catch (error) {
        console.error("Error toggling favourite:", error);
    }
};

export const fn_isFavourite = async (id: string): Promise<boolean> => {
    try {
        const favouritesString = await AsyncStorage.getItem('favourites');
        const favourites: string[] = favouritesString ? JSON.parse(favouritesString) : [];

        return favourites.includes(id);
    } catch (error) {
        return false;
    }
};

export const fn_getWithlistPostApi = async (data: any) => {
    try {
        const response = await fetch(`${API_URL}/post/wishlist`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const res = await response.json();
        if (response?.status === 200) {
            return { status: true, data: res.data };
        };
    } catch (error: any) {
        return { status: false, message: error?.response?.data?.message || "Network Error" };
    }
};

export const fn_getPostsByCategoryApi = async (id: string, globalFilterCities: any | null) => {
    try {
        const response = await fetch(`${API_URL}/post/category?category=${id}&cities=${JSON.stringify(globalFilterCities)}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const data = await response.json();
        if (response?.status === 200) {
            return { status: true, data: data.data };
        };
    } catch (error: any) {
        console.error("Error fetching brands:", error);
        return { status: false, message: error?.response?.data?.message || "Network Error" };
    }
};

export const fn_getBrandsCitiesApi = async () => {
    try {
        const response = await fetch(`${API_URL}/brand/get-cities`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (response?.status === 200) {
            return { status: true, data: data?.cities || [] };
        }
    } catch (error: any) {
        console.error("Error fetching brands cities:", error);
        return { status: false, message: error?.response?.data?.message || "Network Error" };
    }
}