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
  "id": "cofid-current-12-939",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, chicken, yolk, raw",
  "nutritionPerBasis": {
    "calcium_mg": 149.0,
    "carbs_g": 0.0,
    "energy_kcal": 347.0,
    "fat_g": 31.3,
    "fibre_g": 0.0,
    "folate_ug": 122.0,
    "iron_mg": 6.24,
    "magnesium_mg": 12.0,
    "omega3_g": 0.45,
    "phosphorus_mg": 600.0,
    "potassium_mg": 124.0,
    "protein_g": 16.4,
    "salt_g": 0.13,
    "sat_fat_g": 8.81,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 447.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.21,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-939",
  "state": "Raw",
  "subcategory": "CA",
  "tags": [
    "ca",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
