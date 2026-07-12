/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products. Salmon that is cured using salt and then smoked at low temperature; most smoked salmon is cold-smoked",
  "id": "cofid-current-16-412",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, smoked (cold-smoked)",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.5,
    "energy_kcal": 184.0,
    "fat_g": 10.1,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.23,
    "magnesium_mg": 31.0,
    "omega3_g": 2.18,
    "phosphorus_mg": 266.0,
    "potassium_mg": 442.0,
    "protein_g": 22.8,
    "salt_g": 2.96,
    "sat_fat_g": 2.15,
    "sodium_mg": 1184.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-412",
  "state": "Unspecified",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "jc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
