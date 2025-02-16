import Wrapper from './wrapper';

export function Footer() {
  return (
    <footer className="w-full py-8 mt-12 border-t border-border/5">
      <Wrapper>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-lg font-medium">Miracle Tree Test App</p>
          <p className="text-sm text-gray-500">
            Built with 💚 and probably too much coffee ☕
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
