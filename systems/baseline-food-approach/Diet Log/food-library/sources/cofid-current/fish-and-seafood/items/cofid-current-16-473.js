/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-375 using 21.8% weight loss (taken from smoked haddock, poached in 2013 fish survey)",
  "id": "cofid-current-16-473",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haddock, flesh only, poached",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 96.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.15,
    "magnesium_mg": 32.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 208.0,
    "potassium_mg": 403.0,
    "protein_g": 22.8,
    "salt_g": 0.2175,
    "sat_fat_g": 0.11,
    "sodium_mg": 87.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-473",
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
