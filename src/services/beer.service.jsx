/* eslint-disable camelcase */
import api_base from './api/api';

export const getBeers = async (page, per_page) => {
  try {
    const response = await api_base.get('beers', {
      params: {
        page,
        per_page,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getBeerDetail = async (id) => {
  try {
    const response = await api_base.get(`beers/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
