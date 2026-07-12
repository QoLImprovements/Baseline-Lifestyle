/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "4 samples. 50-60% meat",
  "id": "cofid-old-19-117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken breast in crumbs, chilled, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 11.4,
    "energy_kcal": 191.0,
    "fat_g": 8.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.1,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 280.0,
    "protein_g": 18.3,
    "salt_g": 1.05,
    "sat_fat_g": 1.7,
    "sodium_mg": 420.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-117",
  "state": "Raw",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
