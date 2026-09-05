import { useNavigate, useLocation, useSearchParams as useRRSearchParams } from 'react-router-dom';

export { useNavigate, useLocation };

export function useRouter() {
  const navigate = useNavigate();
  return {
    push: (url: string) => navigate(url),
    replace: (url: string) => navigate(url, { replace: true }),
    back: () => navigate(-1),
  };
}

export function usePathname() {
  const location = useLocation();
  return location.pathname;
}

export function useSearchParams() {
  const [searchParams] = useRRSearchParams();
  return {
    get: (key: string) => searchParams.get(key),
    toString: () => searchParams.toString(),
  };
}
