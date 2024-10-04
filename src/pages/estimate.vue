<template>
    <v-data-iterator :items="estimates" :items-per-page="9" :search="search">
        <template v-slot:header>
            <v-toolbar flat class="pa-3">
                <v-text-field v-model="search" label="Pesquisar" prepend-inner-icon="mdi-magnify" variant="outlined"
                    hide-details single-line></v-text-field>

                <v-divider class="mx-4" inset vertical></v-divider>

                <v-btn variant="tonal">
                   Adicionar
                </v-btn>

            </v-toolbar>
        </template>

        <template v-slot:default="{ items }">
            <v-container class="pa-2" fluid>
                <v-row dense>
                    <v-col v-for="item in items" :key="item.raw.title" cols="auto" md="4">
                        <v-card class="pb-3" border hover>
                            <v-card-title>{{ item.raw.title }}</v-card-title>
                            <v-card-subtitle>Valor: {{ item.raw.total }}</v-card-subtitle>
                            <v-card-text class="ga-2">
                                <p>{{ item.raw.description }}</p>
                                <p>Data: {{ item.raw.date }}</p>
                                <p>Validade: {{ item.raw.expirationDate }}</p>
                                <p>Observações: {{ item.raw.observation }}</p>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions class="ga-0">
                                <v-btn>
                                    <v-icon size="large">mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn>
                                    <v-icon size="large">mdi-delete</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </template>

        <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
            <div class="d-flex align-center justify-center pa-4">
                <v-btn :disabled="page === 1" density="comfortable" icon="mdi-arrow-left" variant="tonal" rounded
                    @click="prevPage"></v-btn>

                <div class="mx-2 text-caption">
                    Page {{ page }} of {{ pageCount }}
                </div>

                <v-btn :disabled="page >= pageCount" density="comfortable" icon="mdi-arrow-right" variant="tonal"
                    rounded @click="nextPage"></v-btn>
            </div>
        </template>
    </v-data-iterator>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('');
const estimates = ref([
    {
        title: "Estimate for project A",
        description: "Initial estimate for project A development",
        date: new Date("2024-09-30"),
        total: 5000.75,
        expirationDate: new Date("2024-10-30"),
        observation: "Subject to approval"
    },
    {
        title: "Estimate for project B",
        description: "Design and implementation of backend services",
        date: new Date("2024-09-29"),
        total: 3500.00,
        expirationDate: new Date("2024-10-15"),
        observation: "Pending client review"
    },
    {
        title: "Estimate for website redesign",
        description: "Full UI/UX overhaul",
        date: new Date("2024-09-28"),
        total: 6200.50,
        expirationDate: new Date("2024-10-25"),
        observation: "Includes mobile optimization"
    },
    {
        title: "Estimate for mobile app",
        description: "Development of Android and iOS app",
        date: new Date("2024-09-27"),
        total: 15000.99,
        expirationDate: new Date("2024-11-01"),
        observation: "Requires API integration"
    },
    {
        title: "Estimate for software maintenance",
        description: "Quarterly maintenance package",
        date: new Date("2024-09-26"),
        total: 2000.00,
        expirationDate: new Date("2024-10-26"),
        observation: "Does not include new feature requests"
    },
    {
        title: "Estimate for cloud migration",
        description: "Migration of existing services to cloud infrastructure",
        date: new Date("2024-09-25"),
        total: 7000.25,
        expirationDate: new Date("2024-11-05"),
        observation: "AWS infrastructure included"
    },
    {
        title: "Estimate for security audit",
        description: "Full security audit of web and mobile apps",
        date: new Date("2024-09-24"),
        total: 4500.00,
        expirationDate: new Date("2024-10-24"),
        observation: "Includes penetration testing"
    },
    {
        title: "Estimate for database optimization",
        description: "Performance tuning and optimization",
        date: new Date("2024-09-23"),
        total: 3200.75,
        expirationDate: new Date("2024-10-23"),
        observation: "Focus on query optimization"
    },
    {
        title: "Estimate for API development",
        description: "Creation of custom APIs",
        date: new Date("2024-09-22"),
        total: 8000.00,
        expirationDate: new Date("2024-11-02"),
        observation: "Includes documentation"
    },
    {
        title: "Estimate for e-commerce platform",
        description: "Development of a full e-commerce solution",
        date: new Date("2024-09-21"),
        total: 20000.00,
        expirationDate: new Date("2024-12-01"),
        observation: "Payment gateway integration included"
    },
    {
        title: "Estimate for CRM system",
        description: "Implementation of a custom CRM solution",
        date: new Date("2024-09-20"),
        total: 15000.75,
        expirationDate: new Date("2024-11-15"),
        observation: "Cloud-based system"
    },
    {
        title: "Estimate for analytics dashboard",
        description: "Development of a custom analytics dashboard",
        date: new Date("2024-09-19"),
        total: 5000.50,
        expirationDate: new Date("2024-10-19"),
        observation: "Real-time data visualization included"
    },
    {
        title: "Estimate for data migration",
        description: "Migration of legacy data to new platform",
        date: new Date("2024-09-18"),
        total: 7500.00,
        expirationDate: new Date("2024-11-01"),
        observation: "Ensures data integrity"
    },
    {
        title: "Estimate for DevOps setup",
        description: "CI/CD pipeline and infrastructure setup",
        date: new Date("2024-09-17"),
        total: 9500.25,
        expirationDate: new Date("2024-11-10"),
        observation: "Kubernetes integration included"
    },
    {
        title: "Estimate for social media app",
        description: "Development of a new social media platform",
        date: new Date("2024-09-16"),
        total: 22000.50,
        expirationDate: new Date("2024-12-15"),
        observation: "Focus on scalability"
    },
    {
        title: "Estimate for IoT solution",
        description: "Custom IoT development and integration",
        date: new Date("2024-09-15"),
        total: 18000.00,
        expirationDate: new Date("2024-12-05"),
        observation: "Hardware costs included"
    },
    {
        title: "Estimate for AI integration",
        description: "Machine learning model integration",
        date: new Date("2024-09-14"),
        total: 12000.00,
        expirationDate: new Date("2024-11-20"),
        observation: "Includes training data preparation"
    },
    {
        title: "Estimate for blockchain project",
        description: "Implementation of a blockchain solution",
        date: new Date("2024-09-13"),
        total: 25000.75,
        expirationDate: new Date("2024-12-30"),
        observation: "Smart contract development included"
    },
    {
        title: "Estimate for game development",
        description: "Development of a mobile game",
        date: new Date("2024-09-12"),
        total: 10000.50,
        expirationDate: new Date("2024-11-10"),
        observation: "Includes in-app purchases"
    },
    {
        title: "Estimate for SaaS platform",
        description: "Development of a SaaS platform",
        date: new Date("2024-09-11"),
        total: 30000.00,
        expirationDate: new Date("2024-12-20"),
        observation: "Subscription model included"
    },
    {
        title: "Estimate for VR project",
        description: "Development of a VR training solution",
        date: new Date("2024-09-10"),
        total: 28000.00,
        expirationDate: new Date("2024-12-25"),
        observation: "Supports multiple VR headsets"
    }
]);
</script>