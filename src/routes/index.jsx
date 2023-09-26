import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useLoading } from '../hooks/useLoading';

import { AuthRoutes } from './auth.routes';
import { AuthenticatedRoutes } from './athenticated.routes';
import { Loading } from '../components/Loading';

export function AppRoutes() {
  const { user } = useAuth();

  const { loading } = useLoading();

  if (loading) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );
  }

  return <BrowserRouter>{Object.keys(user).length ? <AuthenticatedRoutes /> : <AuthRoutes />}</BrowserRouter>;
}

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
