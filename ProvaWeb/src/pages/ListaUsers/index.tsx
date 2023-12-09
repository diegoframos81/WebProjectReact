import React from "react";
import { AppBanner } from "../../components/AppBanner";
import { Header } from "../../components/Header";
import { HeroBanner } from "../../components/HeroBanner";
import { HowItWorks } from "../../components/HowItWorks";
import { Pricing } from "../../components/Pricing";
import { Contact } from "../../components/Contact";

import { Container } from "../Main/styles";
import { Footer } from "../../components/Footer";
import UserList from "../../components/UserList";

export const UserLists: React.FC = () => {
  return (
    <Container>
      <UserList/>
    </Container>
  );
};
