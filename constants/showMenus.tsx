import { useState } from "react";

const [showIMC, setShowIMC] = useState(false);
const [showContact, setShowContact] = useState(false);
const [showProjects, setProjects] = useState(false);
const [showHome, setHome] = useState(true);
const [showSideMenu, setSideMenu] = useState(true);

type Screen = "home" | "imc" | "contact" | "projects";

export default function Show(screen: Screen){
}