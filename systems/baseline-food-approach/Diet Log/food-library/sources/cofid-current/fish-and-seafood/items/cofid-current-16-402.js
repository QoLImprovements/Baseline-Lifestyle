/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, frozen and chilled",
  "id": "cofid-current-16-402",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haddock, flesh only, smoked, poached",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.0,
    "energy_kcal": 92.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.17,
    "magnesium_mg": 25.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 164.0,
    "potassium_mg": 265.0,
    "protein_g": 21.8,
    "salt_g": 1.16,
    "sat_fat_g": 0.09,
    "sodium_mg": 464.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-402",
  "state": "Poached",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "ja",
    "poached"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
