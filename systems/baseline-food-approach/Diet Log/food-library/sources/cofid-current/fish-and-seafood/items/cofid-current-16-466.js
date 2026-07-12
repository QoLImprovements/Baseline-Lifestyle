/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated based on dry matter contents in raw and cooked (29.0% weight loss - haddock in 2013 fish survey)",
  "id": "cofid-current-16-466",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cod, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 106.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.1,
    "magnesium_mg": 35.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 238.0,
    "potassium_mg": 453.0,
    "protein_g": 24.6,
    "salt_g": 0.32,
    "sat_fat_g": 0.23,
    "sodium_mg": 128.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-466",
  "state": "Grilled",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "grilled",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
