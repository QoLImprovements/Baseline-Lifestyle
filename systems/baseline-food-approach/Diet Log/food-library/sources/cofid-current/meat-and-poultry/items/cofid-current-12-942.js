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
  "id": "cofid-current-12-942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, chicken, yolk, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 0.0,
    "energy_kcal": 360.0,
    "fat_g": 32.6,
    "fibre_g": 0.0,
    "folate_ug": 101.0,
    "iron_mg": 6.21,
    "magnesium_mg": 12.0,
    "omega3_g": 0.47,
    "phosphorus_mg": 600.0,
    "potassium_mg": 119.0,
    "protein_g": 16.7,
    "salt_g": 0.13,
    "sat_fat_g": 9.21,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 410.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-942",
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
