import { component$, PropsOf, Slot } from '@builder.io/qwik';

export type NavigationBarProps = PropsOf<'div'>;

export const NavigationBar = component$((props: NavigationBarProps) => {
  return (
    <div {...props}>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
});