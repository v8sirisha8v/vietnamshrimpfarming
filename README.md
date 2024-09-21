# vietnamshrimpfarming

**Documented work**

<img src="https://github.com/user-attachments/assets/07abecb3-e28c-41ab-8143-ee230fa71426" width="180px" height="400px" />
<img src="https://github.com/user-attachments/assets/ba7a0d83-54aa-40df-bf2b-8b461d55b17a" width="180px" height="400px" />
<img src="https://github.com/user-attachments/assets/f479645d-834e-419c-883f-dbe0f12a53f6" width="180px" height="400px" />
<img src="https://github.com/user-attachments/assets/8c3cf52c-7d98-488c-ab0f-56250fcb87b1" width="180px" height="400px" />
<img src="https://github.com/user-attachments/assets/cbbde362-4a22-4ffe-83b2-e7a37d024b58" width="180px" height="400px" />
<img src="https://github.com/user-attachments/assets/4b8600a6-a030-4489-8cee-711d1454bdda" width="180px" height="400px" />

**Guide before starting to contribute!**

1) Install Git Bash https://git-scm.com/download/win 
Install Node https://nodejs.org/en/download/prebuilt-installer 
Go to command prompt and type
node -v
npm -v
	To make sure that Git Bash and Node have been installed!
Do wsl –install so that you can use sudo commands if you’re on windows (not having sudo commands is a pain in the ass when you’re following tutorials). Launch Ubuntu in command prompt it's way easier
OR if you’re running Windows 11 Insider Preview Build 26052 or higher you can enable sudo https://learn.microsoft.com/en-us/windows/sudo/ → follow this 
Install ngrok 

**These next steps will also be in command prompt:**

Type “git clone https://github.com/v8sirisha8v/vietnamshrimpfarming.git”
cd means current directory, it's the name to slide into the current directory. type “cd vietnamshrimpfarming” 
Type npm install
Idk if you need to do these put also do npm install react-native and npm install expo-cli in case

**App Running Simulation**

Install the Expo Go app on your phone!

Command Prompt (continue)

**Front End**

Type cd vietnamshrimpfarming one more time. The directory should be cd vietnamshrimpfarming/vietnamshrimpfarming at this point. This is the folder with the frontend stuff
Type npx expo start –tunnel (there are 2 dashes before “tunnel”)
Say yes to the “required to use tunnels, would you like to install it globally?”
Scan the QR code that shows up on your terminal and it should load on Expo Go! You’re done with the setup!

**Common Errors**

If it says “Could not connect to the development server”, just keep retrying it by loading the app a few times or starting it up again.
“Address already in use” - there is an instance of the server running. To kill it so that the port can be used, type taskkill /F /IM node.exe (for windows), and it should kill any processes so that you can run the backend server. I think the Mac/Linux version is killall node.

**Other info that’ll have to be troubleshooted later for the backend**

Backend was not connecting to frontend (Axios Error: Network Error / Request error)
What I tried:
Sending http request on Postman (it works)
Making sure url uses IP address not localhost
Implementing CORs
Configuring firewall to port 3001
Server does start when i go to ip address, but says cannot GET request at API endpoint (/register)

Figured out that the server had to take https requests instead of http requests for security purposes, and that requires an SSL cert which requires a domain name, both which may have to be purchased. Have to use Certbot and stuff as well and it’s kinda complicated so will have research that.
Let’s Encrypt - free ssl cert

For now we use Firebase
