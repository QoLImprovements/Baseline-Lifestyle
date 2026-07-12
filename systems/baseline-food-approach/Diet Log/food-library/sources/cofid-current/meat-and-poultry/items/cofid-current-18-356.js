/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "9 samples; skinless",
  "id": "cofid-current-18-356",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey, breast, fillet, grilled, meat only",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 155.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.6,
    "magnesium_mg": 42.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 380.0,
    "potassium_mg": 550.0,
    "protein_g": 35.0,
    "salt_g": 0.225,
    "sat_fat_g": 0.6,
    "sodium_mg": 90.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-356",
  "state": "Grilled",
  "subcategory": "MCO",
  "tags": [
    "grilled",
    "mco",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
