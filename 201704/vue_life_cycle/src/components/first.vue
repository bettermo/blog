<template>
	<div>
		first
	</div>
</template>

<script>
	export default {
		activated() {
			console.log("%c%s", "color:red",'----- first activated -----')
		},
		deactivated() {
			console.log("%c%s", "color:red",'----- first deactivated -----')
		},
        beforeDestroy() {
            console.log("%c%s", "color:red",'----- first beforeDestroy -----')
        },
        destroyed() {
            console.log("%c%s", "color:red",'----- first destroyed -----')
        },		
	}
</script>