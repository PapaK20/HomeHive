import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import listingsData from '@/assets/data/airbnb-listings.json';
import Listings from '@/components/Listings';
import ExploreHeader from '@/components/ExploreHeader';

const HomeScreen = () => {
  const items = useMemo(() => listingsData as any[], []);
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      <ExploreHeader onCategoryChanged={onDataChanged} />
      <View style={{ flex: 1 }}>
        <Listings items={items} category={category} />
      </View>
    </View>
  );
};

export default HomeScreen;
