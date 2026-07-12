/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, fresh fillets",
  "id": "cofid-current-16-356",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, farmed, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 217.0,
    "fat_g": 15.0,
    "fibre_g": 0.2,
    "folate_ug": 5.0,
    "iron_mg": 0.33,
    "magnesium_mg": 26.0,
    "omega3_g": 3.25,
    "phosphorus_mg": 226.0,
    "potassium_mg": 357.0,
    "protein_g": 20.4,
    "salt_g": 0.1075,
    "sat_fat_g": 2.77,
    "sodium_mg": 43.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.95,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-356",
  "state": "Raw",
  "subcategory": "J",
  "tags": [
    "fish-and-seafood",
    "j",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
