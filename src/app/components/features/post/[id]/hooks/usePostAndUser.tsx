'use client';

import { useState, useEffect, useCallback } from 'react';
import {  getUserByIdAction } from '@/app/actions/post.actions';
import { notFound } from 'next/navigation';
import { Post } from '@/app/application/core/models/post';
import { User } from '@/app/application/core/models/user';

interface UsePostAndUserResult {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
}

export function usePostAndUser(post: Post): UsePostAndUserResult {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedUser = await getUserByIdAction(post.userId);
      if (!fetchedUser) {
        notFound();
      }
      setUser(fetchedUser);

    } catch (e) {
      setError(e as Error);
    } finally {
      setIsLoading(false);
    }
  }, [post]);

  useEffect(() => {
    fetchData();
  }, [post, fetchData]);

  return { user, isLoading, error };
}
