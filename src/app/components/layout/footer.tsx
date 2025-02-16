import { Body } from '../shared/body';
import { Title } from '../shared/title';
import Wrapper from './wrapper';

export function Footer() {
  return (
    <footer className="w-full py-8 mt-12 border-t border-border/5">
      <Wrapper>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <Title title="Miracle Tree Test App" className="text-lg font-medium" />
          <Body body="Built with 💚 and probably too much coffee ☕" className="text-sm text-gray-500" />
        </div>
      </Wrapper>
    </footer>
  );
}