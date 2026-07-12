/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, pre-packed, freshly baked, including granary products",
  "id": "cofid-current-11-984",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread rolls, malted wheat",
  "nutritionPerBasis": {
    "calcium_mg": 209.0,
    "carbs_g": 42.7,
    "energy_kcal": 238.0,
    "fat_g": 4.2,
    "fibre_g": 4.4,
    "folate_ug": 78.0,
    "iron_mg": 1.9,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 138.0,
    "potassium_mg": 191.0,
    "protein_g": 10.0,
    "salt_g": 0.925,
    "sat_fat_g": 1.08,
    "sodium_mg": 370.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-984",
  "state": "Unspecified",
  "subcategory": "AG",
  "tags": [
    "ag",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
