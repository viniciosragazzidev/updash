"use client";
import HeaderTitle from "@/tools/components/HeaderTitle";
import { Envelope, User } from "@phosphor-icons/react";
import { Password } from "@phosphor-icons/react/dist/ssr/Password";
import { GoogleLogo } from "@phosphor-icons/react";
import React, { useContext, useState } from "react";
import { Checkbox } from "@nextui-org/react";
import InputReusable from "@/tools/components/Input";
import { AppContext } from "@/tools/context/AppContext";

const Register = () => {
  const { modeLogin, setModeLogin } = useContext(AppContext);
  const [nameUser, setNameUser] = useState("");
  const [surnameUser, setSurnameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [confirmPasswordUser, setConfirmPasswordUser] = useState("");

  return (
    <div
      className={`flex w-full h-full  px-5  justify-around items-center transition-all duration-1000 ${
        modeLogin
          ? " translate-x-[-100vw] fixed opacity-0"
          : "traslate-x-0 show"
      } `}
    >
      <div className="formulario   flex flex-col gap-7 font-semibold">
        <HeaderTitle text="Crie sua conta" />

        <form className="flex flex-col gap-4" action="">
          <div className="flex items-center gap-4">
            <InputReusable
              label="Nome"
              icon={<User size={16} weight="duotone" />}
              type="text"
              name="nameUser"
              placeholder="Nome"
              value={nameUser}
              onChange={(e: any) => {
                setNameUser(e.target.value);
              }}
            />
            <InputReusable
              label="Sobrenome"
              icon={<User size={16} weight="duotone" />}
              type="text"
              name="surnameUser"
              placeholder="Sobrenome"
              value={surnameUser}
              onChange={(e: any) => {
                setSurnameUser(e.target.value);
              }}
            />
          </div>
          <InputReusable
            label="Email"
            icon={<Envelope size={16} weight="duotone" />}
            type="email"
            name="emailUser"
            placeholder="Digite seu email"
            value={emailUser}
            onChange={(e: any) => {
              setEmailUser(e.target.value);
            }}
          />
          <div className="flex items-center gap-4">
            <InputReusable
              label="Senha"
              icon={<Password size={16} weight="duotone" />}
              type="password"
              name="passwordUser"
              placeholder="**********"
              value={passwordUser}
              onChange={(e: any) => {
                setPasswordUser(e.target.value);
              }}
            />
            <InputReusable
              label="Repita a senha"
              icon={<Password size={16} weight="duotone" />}
              type="password"
              name="confirmPasswordUser"
              placeholder="**********"
              value={confirmPasswordUser}
              onChange={(e: any) => {
                setConfirmPasswordUser(e.target.value);
              }}
            />
          </div>

          <button className="w-full h-8 text-sm text-white bg-primary-blue rounded-md mt-4">
            Criar conta
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
              className="text-primary-blue cursor-pointer font-bold self-center "
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

export default Register;
