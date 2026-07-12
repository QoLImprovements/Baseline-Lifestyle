/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "racc",
  "description": "Beef Products",
  "id": "usda-foundation-2646175",
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
  "name": "Beef, flank, steak, boneless, choice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.84,
    "carbs_g": 0.0,
    "energy_kcal": 164.0,
    "fat_g": 9.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.83,
    "magnesium_mg": 18.9,
    "omega3_g": 0.0,
    "phosphorus_mg": 167.0,
    "potassium_mg": 332.0,
    "protein_g": 20.1,
    "salt_g": 0.12825,
    "sat_fat_g": 3.55,
    "sodium_mg": 51.3,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2646175",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
