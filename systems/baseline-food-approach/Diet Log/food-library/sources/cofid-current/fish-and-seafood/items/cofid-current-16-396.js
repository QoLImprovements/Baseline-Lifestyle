/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "9 samples, 9 products, frozen and chilled",
  "id": "cofid-current-16-396",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Trout, rainbow, flesh only, baked",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.0,
    "energy_kcal": 150.0,
    "fat_g": 6.1,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.4,
    "magnesium_mg": 29.0,
    "omega3_g": 1.72,
    "phosphorus_mg": 254.0,
    "potassium_mg": 434.0,
    "protein_g": 23.8,
    "salt_g": 0.2325,
    "sat_fat_g": 1.44,
    "sodium_mg": 93.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-396",
  "state": "Baked",
  "subcategory": "JC",
  "tags": [
    "baked",
    "fish-and-seafood",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
