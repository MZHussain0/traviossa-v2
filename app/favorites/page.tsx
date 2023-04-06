import React from "react";
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

type Props = {};

const FavoritesPage = async (props: Props) => {
  const currentUser = await getCurrentUser();
  const favorites = await getFavoriteListings();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please log in" />
      </ClientOnly>
    );
  }

  if (favorites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listing."
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavoritesClient favorites={favorites} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritesPage;
