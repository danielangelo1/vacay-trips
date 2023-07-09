<h1 align="center">
	<img alt="Logo" src="./public/logo.png" width="200px" />

</h1>

<h3 align="center">
Vacay trips
</h3>

<p align="center">Sistema de reserva de viagens</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/danielangelo1/vacay-trips">

  <a href="https://www.linkedin.com/in/daniel%C3%A2ngelo/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Daniel%20Ângelo-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/danielangelo1/vacay-trips">
  
  <a href="https://github.com/danielangelo1/vacay-trips/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danielangelo1/vacay-trips">
  </a>
  
  <a href="https://github.com/danielangelo1/vacay-trips/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/danielangelo1/vacay-trips">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/danielangelo1/vacay-trips">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 About the project

- <p style="color: red;">Sistema web de reservas de Viagens, estilo AirBnB. Projeto desenvolvido durante a Full Stack Week ministrada por Felipe Rocha. A plataforma possibilita aos usuários procurar e agendar viagens, explorar informações detalhadas sobre os trajetos, controlar suas reservas, fazer login com suas contas do Google e efetuar pagamentos através da integração com a ferramenta Stripe.</p>

## 🚀 Technologies

Technologies that I used to develop this web client

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [NodeJS](https://nodejs.org/en)
- [TailwindCSS](https://tailwindcss.com/)
- [PostgreeSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Next Auth](https://next-auth.js.org/)
- [Stripe](https://stripe.com/)
- and more!

## 💻 Getting started

### Requirements


**Clone the project and access the folder**

```bash
$ git clone https://github.com/danielangelo1/vacay-trips.git && cd vacay-trips
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Update  the environment variable

DATABASE_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_STRIPE_KEY=
STRIPE_SECRET_KEY=

HOST_URL=http://localhost:3000
NEXTAUTH_SECRET=

# Configure the database
npx prisma migrate dev


# Start the client
$ yarn dev

```


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

---

Made with 💜 &nbsp;by Daniel Ângelo 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/daniel%C3%A2ngelo/)
