import * as React from "react";
import { StyleSheet } from "react-nativescript";

type DepartmentCardProps = {
    name: string;
    passPercentage: number;
};

export function DepartmentCard({ name, passPercentage }: DepartmentCardProps) {
    return (
        <flexboxLayout style={styles.card}>
            <label className="text-lg font-bold">
                {name}
            </label>
            <label className="text-md mt-1">
                Pass Rate: {passPercentage}%
            </label>
        </flexboxLayout>
    );
}