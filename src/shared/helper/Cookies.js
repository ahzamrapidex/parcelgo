"use server";
import { cookies } from "next/headers";

export const setCookie = async (
  name = process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  value,
  options = {}
) => {
  try {
    const cookiesStore = await cookies();
    cookiesStore.set(name, value, options);
    return { success: true };
  } catch (error) {
    console.error("Error setting cookie:", error);
    return { success: false, error: error.message };
  }
};

export const getCookie = async (name) => {
  try {
    const cookiesStore = await cookies();
    const cookie = cookiesStore.get(name);
    return cookie || null;
  } catch (error) {
    console.error("Error getting cookie:", error);
    return null;
  }
};

export const removeCookie = async (name) => {
  try {
    const cookiesStore = await cookies();
    cookiesStore.delete(name);
    return { success: true };
  } catch (error) {
    console.error("Error removing cookie:", error);
    return { success: false, error: error.message };
  }
};

export const getCookies = async () => {
  try {
    const cookiesStore = await cookies();
    const tokenName = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    
    // Check if token name exists
    if (!tokenName) {
      console.warn("NEXT_PUBLIC_ACCESS_TOKEN environment variable is not set");
      return {};
    }

    // Get the cookie
    const cookie = cookiesStore.get(tokenName);
    
    // Check if cookie exists and has a value
    if (!cookie || !cookie.value) {
      return {};
    }

    // Try to parse the cookie value
    let parsedCookie = {};
    try {
      parsedCookie = JSON.parse(cookie.value);
    } catch (parseError) {
      console.error("Error parsing cookie JSON:", parseError);
      console.error("Cookie value:", cookie.value);
      return {};
    }

    // Ensure parsedCookie is an object
    if (typeof parsedCookie !== 'object' || parsedCookie === null) {
      console.warn("Parsed cookie is not a valid object:", parsedCookie);
      return {};
    }

    return parsedCookie;
  } catch (error) {
    console.error("Error in getCookies:", error);
    return {};
  }
};

// Additional helper function to safely get specific properties from cookies
export const getUserFromCookies = async () => {
  try {
    const cookieData = await getCookies();
    
    // Return a safe user object with default values
    return {
      name: cookieData?.name || null,
      email: cookieData?.email || null,
      id: cookieData?.id || null,
      role: cookieData?.role || null,
      // Add other expected user properties with safe defaults
      ...cookieData
    };
  } catch (error) {
    console.error("Error getting user from cookies:", error);
    return {
      name: null,
      email: null,
      id: null,
      role: null
    };
  }
};

// Helper function to check if user is logged in
export const isUserLoggedIn = async () => {
  try {
    const userData = await getUserFromCookies();
    return !!(userData?.id || userData?.email);
  } catch (error) {
    console.error("Error checking login status:", error);
    return false;
  }
};