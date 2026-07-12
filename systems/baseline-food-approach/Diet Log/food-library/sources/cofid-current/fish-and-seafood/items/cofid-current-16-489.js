/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-396 using edible conversion factor of 0.87",
  "id": "cofid-current-16-489",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Trout, rainbow, baked, flesh only, fillets weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 131.0,
    "fat_g": 5.3,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.35,
    "magnesium_mg": 25.0,
    "omega3_g": 1.5,
    "phosphorus_mg": 221.0,
    "potassium_mg": 378.0,
    "protein_g": 20.7,
    "salt_g": 0.2025,
    "sat_fat_g": 1.25,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-489",
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
