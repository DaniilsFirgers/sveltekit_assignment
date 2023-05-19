<script>
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import "../tailwind.css";
</script>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex flex-1 flex-col justify-center">
    <slot />
  </main>

  <Footer />
</div>
