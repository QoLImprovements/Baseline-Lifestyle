/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "20 samples",
  "id": "cofid-current-18-349",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey, light meat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 105.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.3,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 360.0,
    "protein_g": 24.4,
    "salt_g": 0.125,
    "sat_fat_g": 0.3,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-349",
  "state": "Raw",
  "subcategory": "MCO",
  "tags": [
    "mco",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
