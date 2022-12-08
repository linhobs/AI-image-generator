const { createApp } = Vue
createApp({
  data() {
    return {
      showSpinner: false,
      size: "small",
      prompt: "",
      errors: [],
      imgUrl: "",
    }
  },
  methods: {
    async onFormSubmit(e) {
      e.preventDefault()
      this.errors = []
      this.showSpinner = true
      const that = this
      //  TODO: invoke call to api (ideally use vuex and dispatch some action with axios for api call)-> an overkill for a small app tho
      try {
        const response = await fetch("/openai/generateimage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: this.prompt,
            size: this.size,
          }),
        })
        if (!response.ok) {
          this.showSpinner = false
          this.errors.push("oh no! you went too far! try something else!")
        }
        const data = await response.json()
        this.imgUrl = data.data
        this.showSpinner = false
      } catch (error) {
        console.log("eror")
        console.log(error.message)
        this.showSpinner = false
        this.errors.push(error.message)
      }
    },
  },
}).mount("#app")
