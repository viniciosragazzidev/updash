"use client";
import HeaderTitle from "@/app/tools/components/HeaderTitle";
import { User } from "@phosphor-icons/react";
import { Password } from "@phosphor-icons/react/dist/ssr/Password";
import { GoogleLogo } from "@phosphor-icons/react";
import React, { useContext, useState } from "react";
import { Checkbox } from "@nextui-org/react";
import { AppContext } from "@/app/tools/context/AppContext";
import InputReusable from "@/app/tools/components/Input";

const Login = () => {
  const { modeLogin, setModeLogin } = useContext(AppContext);
  const [userLogin, setUserLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  return (
    <div
      className={`flex w-full h-full justify-around items-center transition-all duration-1000 ${
        !modeLogin
          ? " translate-x-[-100vw] fixed opacity-0"
          : "traslate-x-0  show"
      } `}
    >
      <div className="formulario  flex flex-col gap-7 font-semibold">
        <HeaderTitle
          text="Faça login para
acessar a plataforma"
        />

        <form className="flex flex-col gap-4" action="">
          <InputReusable
            label="Login"
            icon={<User size={16} weight="duotone" />}
            type="text"
            name="userLogin"
            placeholder="Digite seu usuario ou email"
            value={userLogin}
            onChange={(e: any) => {
              setUserLogin(e.target.value);
            }}
          />
          <InputReusable
            label="Senha"
            icon={<Password size={16} weight="duotone" />}
            type="password"
            name="senhaLogin"
            placeholder="Digite sua senha"
            value={senhaLogin}
            onChange={(e: any) => {
              setSenhaLogin(e.target.value);
            }}
          />

          <div className="flex justify-between items-center gap-8 max-sm:flex-col">
            <Checkbox
              defaultSelected
              radius="full"
              size="sm"
              className="text-white"
            >
              <span className="text-white text-xs">Lembrar senha</span>
            </Checkbox>

            <span className="text-xs text-primary-blue cursor-pointer hover:text-primary-blue-2 transition-colors">
              Esqueceu usuário ou senha?
            </span>
          </div>
          <button
            onClick={() => {
              console.log(userLogin, senhaLogin);
            }}
            className="w-full h-8 text-sm text-white bg-primary-blue rounded-md mt-4"
          >
            Entrar
          </button>
        </form>

        <div className="button flex flex-col gap-2">
          <div className="wrapper flex items-center gap-2">
            <div className="line w-full h-[1px] bg-input"></div>
            <span className="text-xs text-primary-blue whitespace-nowrap">
              Entre de outras formas
            </span>
            <div className="line w-full h-[1px] bg-input"></div>
          </div>
          <button className="w-full h-12 gap-2 active:scale-95 active:border border-primary-blue transition-all text-white bg-input rounded-md flex items-center justify-center">
            <span className="text-primary-blue">
              <GoogleLogo size={32} weight="duotone" />
            </span>{" "}
            Google
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <span className="text-xs text-white">
            Não tem uma conta?{" "}
            <span
              className="text-primary-blue cursor-pointer font-bold self-center"
              onClick={() => setModeLogin(!modeLogin)}
            >
              Cadastre-se
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
