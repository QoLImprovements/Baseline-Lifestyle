/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, including After Eights and equivalent (or 'similar') products",
  "id": "cofid-current-17-650",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate, dark, with crème or mint fondant centres",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 71.9,
    "energy_kcal": 431.0,
    "fat_g": 16.3,
    "fibre_g": 4.7,
    "folate_ug": 1.0,
    "iron_mg": 0.67,
    "magnesium_mg": 13.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 104.0,
    "potassium_mg": 389.0,
    "protein_g": 3.7,
    "salt_g": 0.015,
    "sat_fat_g": 9.8,
    "sodium_mg": 6.0,
    "sugar_g": 62.9,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-650",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "sea",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
