/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-042 using edible conversion factor of 0.88",
  "id": "cofid-current-16-475",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haddock, flesh only, smoked, poached, fillets weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 80.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.15,
    "magnesium_mg": 22.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 144.0,
    "potassium_mg": 233.0,
    "protein_g": 19.2,
    "salt_g": 1.02,
    "sat_fat_g": 0.08,
    "sodium_mg": 408.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-475",
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
