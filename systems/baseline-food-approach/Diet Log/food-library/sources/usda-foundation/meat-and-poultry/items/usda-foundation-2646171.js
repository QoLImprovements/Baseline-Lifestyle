/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "racc",
  "description": "Poultry Products",
  "id": "usda-foundation-2646171",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Chicken, thigh, boneless, skinless, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.65,
    "carbs_g": 0.0,
    "energy_kcal": 144.0,
    "fat_g": 7.92,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.602,
    "magnesium_mg": 21.8,
    "omega3_g": 0.0,
    "phosphorus_mg": 178.0,
    "potassium_mg": 272.0,
    "protein_g": 18.6,
    "salt_g": 0.15575,
    "sat_fat_g": 1.66,
    "sodium_mg": 62.3,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2646171",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
