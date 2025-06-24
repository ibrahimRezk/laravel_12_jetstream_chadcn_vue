<script setup pages>
import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
// import type { BreadcrumbItemType } from '@/types';

// interface Props {
//     breadcrumbs;
// }

// withDefaults(defineProps(), {
//     breadcrumbs: () => [],
// });

// defineProps({
//     breadcrumbs: () => [],
// });


    defineProps ({
    breadcrumbs: Array,
});

</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <slot />
    </AppLayout>
</template>
