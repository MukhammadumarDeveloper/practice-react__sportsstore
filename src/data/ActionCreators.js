import { ActionTypes, DataTypes } from './Types';
import { RestDataSource } from './RestDataSource';

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType,
        data: dataSource.GetData(dataType, params)
            .then(response => ({
                    dataType,
                    data: response.data,
                    total: Number(response.headers['x-total-count']),
                    params
                })
            )
    }
});

export const setPageSize = (newSize) => ({type: ActionTypes.DATA_SET_PAGESIZE, payload: newSize});

export const setSortProperty = (newProperty) => ({type: ActionTypes.DATA_SET_SORT_PROPERTY, payload: newProperty});

export const placeOrder = (order) => ({
    type: ActionTypes.DATA_STORE,
    payload: dataSource.StoreData(DataTypes.ORDERS, order).then(response => ({
        dataType: DataTypes.ORDERS,
        data: response.data
    }))
});