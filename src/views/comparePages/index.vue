<template>
    <div>
        <h3>
            <ul>
                <li>
                    <router-link to="/comparePage/watch">watch</router-link>
                </li>
                <li>
                    <router-link to="/comparePage/computed">computed</router-link>
                </li>
                <li>
                    <router-link to="/comparePage/fatherChildren">父子传值</router-link>
                </li>
                <li>
                    <router-link to="/comparePage/template">插槽</router-link>
                </li>
                <li>
                    <router-link to="/comparePage/teleport">teleport</router-link>
                </li>
            </ul>
        </h3>

        <router-view></router-view>
    </div>
</template>
