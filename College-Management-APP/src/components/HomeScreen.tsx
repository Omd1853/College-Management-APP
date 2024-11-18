import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { StatCard } from "./StatCard";
import { DepartmentCard } from "./DepartmentCard";

const collegeData = {
    name: "ABC Engineering College",
    stats: {
        faculty: 120,
        students: 2500,
        departments: 6
    },
    departmentResults: [
        { name: "Computer Science", passPercentage: 92 },
        { name: "Mechanical", passPercentage: 88 },
        { name: "Electrical", passPercentage: 90 },
        { name: "Civil", passPercentage: 85 },
        { name: "Electronics", passPercentage: 89 },
        { name: "Chemical", passPercentage: 87 }
    ]
};

export function HomeScreen() {
    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl font-bold text-center mb-4">
                    {collegeData.name}
                </label>

                {/* Stats Section */}
                <gridLayout columns="*, *, *" rows="auto" style={styles.statsGrid}>
                    <StatCard
                        col={0}
                        title="Faculty"
                        count={collegeData.stats.faculty}
                        color="#4CAF50"
                    />
                    <StatCard
                        col={1}
                        title="Students"
                        count={collegeData.stats.students}
                        color="#2196F3"
                    />
                    <StatCard
                        col={2}
                        title="Departments"
                        count={collegeData.stats.departments}
                        color="#FF9800"
                    />
                </gridLayout>

                {/* Results Section */}
                <label className="text-xl font-bold mt-6 mb-4">
                    Department Results
                </label>
                <stackLayout style={styles.departmentsContainer}>
                    {collegeData.departmentResults.map((dept, index) => (
                        <DepartmentCard
                            key={index}
                            name={dept.name}
                            passPercentage={dept.passPercentage}
                        />
                    ))}
                </stackLayout>
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: "column"
    },
    statsGrid: {
        marginTop: 16,
        gap: 8
    },
    departmentsContainer: {
        gap: 12
    }
});