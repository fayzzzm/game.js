import "./styles/styles.scss";
import * as ViewPack from "./view/index";

type GreetFunction = (name: string) => string;

const foo: GreetFunction = (name) => `Hello ${name}`;
ViewPack.obj.greet();
