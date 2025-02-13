import { NavBar } from './nav-bar';
import Wrapper from './wrapper';

export function Header() {
  return (
    <header className="w-full">
      <Wrapper>
        <NavBar />
      </Wrapper>
    </header>
  );
}
