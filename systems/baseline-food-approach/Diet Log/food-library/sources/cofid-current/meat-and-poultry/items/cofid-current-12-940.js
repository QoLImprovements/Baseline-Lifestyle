/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "12 samples from 3 egg distribution centres, including enriched cage, barn, free-range and organic",
  "id": "cofid-current-12-940",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, chicken, whole, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 0.0,
    "energy_kcal": 143.0,
    "fat_g": 9.6,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 1.97,
    "magnesium_mg": 14.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 205.0,
    "potassium_mg": 141.0,
    "protein_g": 14.1,
    "salt_g": 0.375,
    "sat_fat_g": 2.7,
    "sodium_mg": 150.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-940",
  "state": "Boiled",
  "subcategory": "CA",
  "tags": [
    "boiled",
    "ca",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
