import * as React from "react";
import { StyleSheet } from "react-nativescript";

type StatCardProps = {
    title: string;
    count: number;
    color: string;
};

export function StatCard({ title, count, color }: StatCardProps) {
    return (
        <flexboxLayout style={[styles.card, { backgroundColor: color }]}>
            <label className="text-xl font-bold text-white text-center">
                {title}
            </label>
            <label className="text-3xl font-bold text-white text-center mt-2">
                {count}
            </label>
        </flexboxLayout>
    );
}