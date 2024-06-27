import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Item from './Item';

const INITIAL_ITEMS_TO_RENDER = 4;
const WINDOW_SIZE = 5;
const END_THRESHOLD = 3;

interface ItemListProps {
  initialSize?: number;
  threshold?: number;
}

interface ItemModel {
  id: string;
  title: string;
}

/**
 * Adds additional items to the array.
 * @param items Array of items
 * @param start The start index for adding new items
 * @param end The total number of new items to add to the array
 */
function buildMoreItems(items: ItemModel[], start: number, end: number) {
  for (let i = start; i < end; i++) {
    items.push({id: String(i), title: `Item ${i}`});
  }
}

const ItemList: React.FC<ItemListProps> = ({
  initialSize = 100,
  threshold = END_THRESHOLD,
}) => {
  const initialState: ItemModel[] = [];
  buildMoreItems(initialState, 0, initialSize);

  const [items, setItems] = useState<ItemModel[]>(
    initialState.map<ItemModel>((_item, index) => ({
      id: String(index),
      title: `Item ${index + 1}`,
    })),
  );

  /**
   * Fetches additional items and adds them to the items
   */
  const getMoreItems = () => {
    const startCounter = items.length + 1;
    const endCounter = startCounter + initialSize;
    const newItems: ItemModel[] = [];
    buildMoreItems(newItems, startCounter, endCounter);

    setItems(prev => [...prev, ...newItems]);
  };

  return (
    <FlatList
      data={items}
      initialNumToRender={INITIAL_ITEMS_TO_RENDER}
      renderItem={({item, index}) => (
        <Item title={item.title} key={item.id} index={index} />
      )}
      keyExtractor={item => item.id}
      windowSize={WINDOW_SIZE}
      onEndReached={getMoreItems}
      onEndReachedThreshold={threshold}
    />
  );
};

export default ItemList;
