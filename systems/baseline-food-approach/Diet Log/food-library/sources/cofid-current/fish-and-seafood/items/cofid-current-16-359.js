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
  "id": "cofid-current-16-359",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, farmed, flesh only, baked",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 232.0,
    "fat_g": 14.6,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.45,
    "magnesium_mg": 30.0,
    "omega3_g": 3.1,
    "phosphorus_mg": 262.0,
    "potassium_mg": 412.0,
    "protein_g": 25.2,
    "salt_g": 0.1225,
    "sat_fat_g": 2.76,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-359",
  "state": "Baked",
  "subcategory": "J",
  "tags": [
    "baked",
    "fish-and-seafood",
    "j"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
