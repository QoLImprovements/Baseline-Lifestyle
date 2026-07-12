/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 84% lean and 15% fat",
  "id": "cofid-current-18-085",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, topside, raw, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 198.0,
    "fat_g": 12.9,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 1.7,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 340.0,
    "protein_g": 20.4,
    "salt_g": 0.1675,
    "sat_fat_g": 5.4,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-085",
  "state": "Raw",
  "subcategory": "MAC",
  "tags": [
    "mac",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
