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
  "id": "usda-foundation-2646170",
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
  "name": "Chicken, breast, boneless, skinless, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.94,
    "carbs_g": 0.0,
    "energy_kcal": 106.0,
    "fat_g": 1.93,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.354,
    "magnesium_mg": 26.2,
    "omega3_g": 0.0,
    "phosphorus_mg": 215.0,
    "potassium_mg": 330.0,
    "protein_g": 22.5,
    "salt_g": 0.1645,
    "sat_fat_g": 0.349,
    "sodium_mg": 65.8,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2646170",
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
