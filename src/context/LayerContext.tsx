import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LayerState {
  visible?: boolean;
  // TO_DO add more properties to change specific layer
}

interface LayerContextType {
  layerStates: Record<string, LayerState>;
  updateLayerState: (layerId: string, updates: LayerState) => void;
}

const LayerContext = createContext<LayerContextType | undefined>(undefined);

interface LayerProviderProps {
  children: ReactNode;
}

export const LayerProvider: React.FC<LayerProviderProps> = ({ children }) => {
  const [layerStates, setLayerStates] = useState<Record<string, LayerState>>({});

  const updateLayerState = (layerId: string, updates: LayerState) => {
    setLayerStates((prevStates) => ({
      ...prevStates,
      [layerId]: {
        ...prevStates[layerId],
        ...updates,
      },
    }));
  };

  const contextValue: LayerContextType = { layerStates, updateLayerState };

  return <LayerContext.Provider value={contextValue}>{children}</LayerContext.Provider>;
};

export const useLayerContext = (): LayerContextType => {
  const context = useContext(LayerContext);
  if (!context) {
    throw new Error('useLayerContext must be used within a LayerProvider');
  }
  return context;
};
