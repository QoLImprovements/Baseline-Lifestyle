/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from raw whole eggs (12-937) and old code (12-809)",
  "id": "cofid-current-12-962",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, chicken, whole, fried, without fat",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 0.0,
    "energy_kcal": 167.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 42.0,
    "iron_mg": 2.18,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 227.0,
    "potassium_mg": 184.0,
    "protein_g": 16.0,
    "salt_g": 0.4875,
    "sat_fat_g": 3.2,
    "sodium_mg": 195.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 160.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-962",
  "state": "Fried",
  "subcategory": "CA",
  "tags": [
    "ca",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
