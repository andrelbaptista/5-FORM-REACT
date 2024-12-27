import "./MyForm.css";
import { useState } from "react";

// recebendo as props
const MyForm = ({ userName, userEmail }) => {
  // gerenciamento dos dados do form e utilizando controlled input
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState("");
  const [role,setRole]= useState("");

  // esta forma de alteração do dado é mais usada quando se quer manipular o dado
  const handleName = (e) => {
    setName(e.target.value);
  };

  // envio do form
  const handleSubmit = (e) => {
    e.preventDefault();
    // validação dos dados
    // envio dos dados
    // limpar os dados no form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  console.log(name, email, bio, role);

  return (
    <div>
      {/* criação do form */}
      {/* envio do form */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* forma tradicional, mas menos usada no react */}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            // controlled input o || e para evitar o warning de valor vazio, pode ser setado no userState(""), ou via props
            value={name || ""}
          />
        </div>
        {/* forma mais usada, o span pode ser suprimido */}
        <label>
          <span>Digite o seu e-mail:</span>
          {/* nesta forma de onChange e usada quando se quer fazer a simples alteracao do dado */}
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            // controlled input o || e para evitar o warning de valor vazio, pode ser setado no userState(""), ou via props
            value={email || ""}
          />
        </label>
        {/* textarea */}
        <label>
          <span>Digite a sua Bio:</span>
          {/* nesta forma de onChange e usada quando se quer fazer a simples alteracao do dado */}
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            // controlled input o || e para evitar o warning de valor vazio, pode ser setado no userState(""), ou via props
            value={bio}
          ></textarea>
        </label>
        {/* select */}
        <label>
          <span>Selecione o seu cargo:</span>
          {/* nesta forma de onChange e usada quando se quer fazer a simples alteracao do dado */}
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            // controlled input o || e para evitar o warning de valor vazio, pode ser setado no userState(""), ou via props
            value={role}
          >
            <option value="support">Suporte</option>
            <option value="manager">Gerente</option>
            <option value="director">Diretor</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
