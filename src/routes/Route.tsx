import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { Loader2 } from "lucide-react";
import React from "react";
import Layout from "../shared/Layout/Layout";

const LoadingFallback = () => <div className="min-w-screen min-h-screen bg-gray-100/70  flex justify-center items-center">
    <Loader2 className="animate-spin text-blue-500" />
</div>;
const Home = React.lazy(() => import("../features/home/Home"));
const Required = React.lazy(() => import("../features/required/Required"));

const withSuspense = (Component: React.ReactNode) => (
    <Suspense fallback={<LoadingFallback />}>{Component}</Suspense>
);

export const Routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <div>Ocurrio un error </div>,
        children: [
            {
                index: true,
                element: withSuspense(<Home />),
            },
            {
                path: "inicio",
                element: withSuspense(<Home />),
            },
            {
                path: "requisitos",
                element: withSuspense(<Required />),
            },
        ],
    },
];