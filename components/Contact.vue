<template>
  <section id="contact">
    <div class="contact-container">
      <h2>Contact</h2>
      <form
        ref="formContact"
        class="contact-form"
        @submit.prevent="submitContact"
      >
        <div class="form-group">
          <label for="name">Nom</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            autocomplete="name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Votre email"
            required
            autocomplete="email"
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            required
            autocomplete="off"
          ></textarea>
        </div>
        <button type="submit" :disabled="isSending">
          {{ isSending ? "Envoi..." : "Envoyer" }}
        </button>
        <p v-if="isSuccess" class="success-message">
          Votre message a bien été envoyé.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
const formContact = ref(null);
const isSending = ref(false);
const isSuccess = ref(false);

const submitContact = async () => {
  if (!formContact.value) return;

  const message = formContact.value.message.value.trim();
  if (message.length < 15 || message.length > 500) {
    alert(
      "Votre message doit contenir entre 15 et 600 caractères. Le votre fait " +
        message.length
    );
    return;
  }
  isSending.value = true;
  isSuccess.value = false;

  const formData = new FormData(formContact.value);

  try {
    const response = await fetch("https://formspree.io/f/manonggj", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      isSuccess.value = true;
      formContact.value.reset();
    } else {
      alert("Erreur lors de l'envoi.");
    }
  } catch (err) {
    alert("Problème de connexion.");
  } finally {
    isSending.value = false;
  }
};
</script>

<style lang="scss" scoped>
#contact {
  min-height: 100vh;
  background-color: #001e3e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  .contact-container {
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    text-align: center;

    h2 {
      color: #0ac37f;
      margin-bottom: 2rem;
      font-size: 2rem;
    }
    p {
      color: white;
      margin-bottom: 2rem;
      font-size: 1.2rem;
      font-style: italic;
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .form-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        label {
          color: white;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        input,
        textarea {
          width: 100%;
          padding: 0.8rem;
          background: transparent;
          border: 2px solid white;
          border-radius: 4px;
          color: #0ac37f;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s ease;

          &::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }

          &:focus {
            border-color: #0ac37f;
          }
        }

        textarea {
          resize: vertical;
          min-height: 150px;
        }
      }

      button {
        background-color: white;
        color: #001e3e;
        padding: 0.8rem;
        border: none;
        border-radius: 4px;
        font-size: 1.2rem;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 30%;

        &:hover {
          background-color: #0ac37f;
          color: #001e3e;
        }
      }
      .success-message {
        color: #0ac37f;
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
      }
    }
  }
}
@media (max-width: 768px) {
  #contact {
    padding: 1rem;
    .contact-container {
      padding: 1rem;
      p {
        font-size: 1rem;
      }
      .contact-form {
        gap: 1rem;
        button {
          width: 40%;
          font-size: 1rem;
        }
        input,
        textarea {
          width: 90% !important;
        }
      }
    }
  }
}
</style>
