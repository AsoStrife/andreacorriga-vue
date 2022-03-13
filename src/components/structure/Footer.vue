<template>
    <footer class="footer text-center">
		<div class="container">
			<small class="copyright">
                Andrea Corriga (@Asostrife) &bull; 
                <router-link to="/privacy_policy">Privacy Policy</router-link> 
            </small>
		</div><!--//container-->
	</footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
.footer {
    padding: 20px 0 20px 0;
}

.footer a {
    color: rgba(255, 255, 255, 0.6);
}

</style>