<template>
    <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <!-- <li class="breadcrumb-item active" aria-current="page">Library</li> -->
    <li class="breadcrumb-item active" aria-current="page">
        <slot></slot>
    </li>
  </ol>
</nav>
</template>