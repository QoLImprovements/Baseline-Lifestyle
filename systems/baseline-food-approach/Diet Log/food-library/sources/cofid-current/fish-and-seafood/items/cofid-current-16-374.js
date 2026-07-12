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
  "id": "cofid-current-16-374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cod, flesh only, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 98.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.16,
    "magnesium_mg": 32.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 216.0,
    "potassium_mg": 427.0,
    "protein_g": 23.5,
    "salt_g": 0.27,
    "sat_fat_g": 0.08,
    "sodium_mg": 108.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-374",
  "state": "Unspecified",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "ja",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
