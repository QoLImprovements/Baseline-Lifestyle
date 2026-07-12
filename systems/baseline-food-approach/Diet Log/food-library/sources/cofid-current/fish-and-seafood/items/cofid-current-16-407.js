/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "12 samples, 12 products, frozen and chilled",
  "id": "cofid-current-16-407",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fishcakes, white fish, coated in breadcrumbs, baked",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 22.6,
    "energy_kcal": 206.0,
    "fat_g": 9.4,
    "fibre_g": 1.7,
    "folate_ug": 6.0,
    "iron_mg": 0.76,
    "magnesium_mg": 19.0,
    "omega3_g": 0.55,
    "phosphorus_mg": 102.0,
    "potassium_mg": 233.0,
    "protein_g": 9.3,
    "salt_g": 0.89,
    "sat_fat_g": 1.0,
    "sodium_mg": 356.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.98,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-407",
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
