/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-376 using edible conversion factor of 0.88",
  "id": "cofid-current-16-471",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haddock, flesh only, grilled, fillets weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 87.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.15,
    "magnesium_mg": 29.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 204.0,
    "potassium_mg": 381.0,
    "protein_g": 21.0,
    "salt_g": 0.2025,
    "sat_fat_g": 0.05,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-471",
  "state": "Grilled",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "grilled",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
