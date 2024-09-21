'use client';
import dynamic from 'next/dynamic';
import { type AuthToken } from 'semaphor';
import 'semaphor/style.css'; // IMPORTANT! Impport the CSS file. This is the default style, you can customize it.
import NavBar from './nav-bar';

// This is a dynamic import. It will not be included in the server-side rendering.
const Dashboard = dynamic(
  () => import('semaphor').then((mod) => mod.Dashboard),
  {
    ssr: false,
  }
);

type DashboardProps = {
  authToken: AuthToken;
};

export default function DashboardComponent({ authToken }: DashboardProps) {
  return <Dashboard authToken={authToken} />;
}
