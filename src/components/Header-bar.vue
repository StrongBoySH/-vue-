<template>
<header>
    <slot name="home"></slot>
    <slot name="care"></slot>
    <slot name="selfpage"></slot>
    <slot name="collect"></slot>
    <slot name="editprofile-header"></slot>
    <slot name="setup-header"></slot>
    <slot name="detail-header"></slot>
    <slot name="search"></slot>
</header>
</template>

<script>
export default {}
</script>

<style lang="less">
header {
    height: 0.6rem;
    width: 100%;
    line-height: 0.6rem;
    background: #d43d3d;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    z-index: 999;
}
</style>
