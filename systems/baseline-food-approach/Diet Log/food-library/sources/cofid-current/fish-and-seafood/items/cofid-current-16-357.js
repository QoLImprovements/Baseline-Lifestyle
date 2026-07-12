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
  "id": "cofid-current-16-357",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, farmed, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 239.0,
    "fat_g": 15.6,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.45,
    "magnesium_mg": 30.0,
    "omega3_g": 3.31,
    "phosphorus_mg": 262.0,
    "potassium_mg": 412.0,
    "protein_g": 24.6,
    "salt_g": 0.1225,
    "sat_fat_g": 2.95,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.94,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-357",
  "state": "Grilled",
  "subcategory": "J",
  "tags": [
    "fish-and-seafood",
    "grilled",
    "j"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
