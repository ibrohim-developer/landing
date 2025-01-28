"use server"

interface FormData {
    name: string
    phone: string
    message: string
  }

export async function sendToTelegram(formData: FormData) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.error("Telegram bot token or chat ID is not set")
    return { success: false, message: "Configuration error" }
  }

  const message = `
New form submission:
Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}
  `.trim()

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })

  if (!response.ok) {
    console.error("Failed to send message to Telegram")
    return { success: false, message: "Failed to send message" }
  }

  return { success: true, message: "Message sent successfully" }
}

