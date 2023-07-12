<template>
        <button class="danger-btn">
                <slot />
        </button>
</template>

<style>
.danger-btn{
        padding: 1rem;
        color: white;
        background-color: red;
        text-transform: uppercase;
        border: none;
        border-radius: 5px;
}
</style>
