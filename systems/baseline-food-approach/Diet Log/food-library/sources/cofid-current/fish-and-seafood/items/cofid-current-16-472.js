/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-377 using edible conversion factor of 0.87",
  "id": "cofid-current-16-472",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haddock, flesh only, steamed, fillets weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 81.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.14,
    "magnesium_mg": 24.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 173.0,
    "potassium_mg": 327.0,
    "protein_g": 19.0,
    "salt_g": 0.1825,
    "sat_fat_g": 0.1,
    "sodium_mg": 73.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-472",
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
