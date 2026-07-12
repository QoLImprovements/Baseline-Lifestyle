/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, frozen and chilled",
  "id": "cofid-current-16-369",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cod, in batter, baked",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 19.7,
    "energy_kcal": 229.0,
    "fat_g": 11.8,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 0.51,
    "magnesium_mg": 21.0,
    "omega3_g": 0.67,
    "phosphorus_mg": 158.0,
    "potassium_mg": 230.0,
    "protein_g": 12.3,
    "salt_g": 1.06,
    "sat_fat_g": 1.71,
    "sodium_mg": 424.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-369",
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
