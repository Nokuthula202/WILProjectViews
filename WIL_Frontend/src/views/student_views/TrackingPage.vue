<template>
  <div class="tracking-page">
    <Header />
    <div class="main-content">
      <Sidebar />
      <main class="content">
        <div class="track-application">
          <h2>Track Application</h2>
          <div class="application-info">
            <p><strong>Title:</strong> Software Tester Intern</p>
            <p><strong>Company Name:</strong> CSG</p>
            <p><strong>Date Applied:</strong> 10 November 2024</p>
            <p><strong>Application Status:</strong> Shortlisted</p>
          </div>

          <h3>Interviews</h3>
          <div class="interview-info">
            <p><strong>Date:</strong> 22 November 2024</p>
            <p><strong>Time:</strong> 09:00 am</p>
            <p><strong>Company:</strong> CSG</p>
            <p><strong>Location:</strong> Brooklyn Office Park, Block D</p>
            <p><strong>Virtual Meeting Link:</strong> N/A</p>
            <p>
              Confirm interview attendance:
              <button>Yes</button>
              <button>No</button>
            </p>
          </div>

          <h3>Offer Decision</h3>
          <div class="offer-decision">
            <p><strong>Pending Offers:</strong> 0</p>
            <p><strong>Accepted Offers:</strong> 1</p>
            <p><strong>Declined Offers:</strong> 2</p>
            <div class="actions">
              <button>Accept</button>
              <button>Decline</button>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';

export default {
  name: "TrackingPage",
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>

<style scoped>
.tracking-page {
  font-family: Arial, sans-serif;
  color: #333;
}

.main-content {
  display: flex;
}

.content {
  margin: 20px;
  background-color: #eafaf9;
  padding: 20px;
  border-radius: 5px;
  flex-grow: 1;
}

.application-info,
.interview-info,
.offer-decision {
  margin-bottom: 20px;
}

button {
  margin: 5px;
  padding: 5px 10px;
  background-color: #005f56;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #004d45;
}
</style>