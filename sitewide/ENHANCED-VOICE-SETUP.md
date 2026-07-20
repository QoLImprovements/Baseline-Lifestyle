# Enhanced voice recognition setup

Fitness voice workouts use OpenAI Realtime transcription over WebRTC. The browser sends microphone audio directly through a short-lived Realtime session; the permanent API key remains on the PHP server.

## Hosting requirements

- HTTPS on the website.
- PHP with the cURL extension enabled.
- An OpenAI API project with billing enabled.
- A server environment variable named `OPENAI_API_KEY`.

Set the key in the hosting control panel or process environment. Never add it to this repository, JavaScript, HTML, or a publicly downloadable `.env` file.

An optional `BL_VOICE_SAFETY_SALT` environment variable can be set to a long random value. It is used to create a privacy-preserving safety identifier for each signed-in user.

After deployment, sign in, open Fitness → My Plan, start a voice workout, and wait for the microphone indicator to turn green. “Listening” means the WebRTC data channel is connected. “Reconnecting” means the enhanced transcription session has not connected yet.

The endpoint is limited to signed-in users and rate-limited to 12 new sessions per five minutes per user.

