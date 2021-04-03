import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./src/store/index";

const Store = ({ element }) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>{element}</Provider>
        </QueryClientProvider>
    );
};

export default Store;
