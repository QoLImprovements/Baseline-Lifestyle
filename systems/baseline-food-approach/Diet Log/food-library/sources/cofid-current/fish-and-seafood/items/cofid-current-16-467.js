/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated based on dry matter contents in raw and cooked (23.2% weight loss - haddock in 2013 fish survey)",
  "id": "cofid-current-16-467",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cod, flesh only, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 98.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.1,
    "magnesium_mg": 32.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 220.0,
    "potassium_mg": 420.0,
    "protein_g": 22.8,
    "salt_g": 0.3175,
    "sat_fat_g": 0.21,
    "sodium_mg": 127.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-467",
  "state": "Steamed",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "ja",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
