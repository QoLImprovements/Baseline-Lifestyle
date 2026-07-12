/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products, frozen and chilled",
  "id": "cofid-current-16-373",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cod, flesh only, baked",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 100.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.15,
    "magnesium_mg": 30.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 189.0,
    "potassium_mg": 367.0,
    "protein_g": 23.9,
    "salt_g": 0.2275,
    "sat_fat_g": 0.12,
    "sodium_mg": 91.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-373",
  "state": "Baked",
  "subcategory": "JA",
  "tags": [
    "baked",
    "fish-and-seafood",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
