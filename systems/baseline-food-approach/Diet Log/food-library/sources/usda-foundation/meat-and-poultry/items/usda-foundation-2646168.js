/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "racc",
  "description": "Pork Products",
  "id": "usda-foundation-2646168",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Pork, loin, boneless, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.11,
    "carbs_g": 0.0,
    "energy_kcal": 168.0,
    "fat_g": 9.47,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.452,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 197.0,
    "potassium_mg": 361.0,
    "protein_g": 21.1,
    "salt_g": 0.1005,
    "sat_fat_g": 3.28,
    "sodium_mg": 40.2,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2646168",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
