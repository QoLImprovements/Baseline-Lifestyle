/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Pork Products",
  "id": "usda-foundation-749420",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, cured, bacon, cooked, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 2.1,
    "energy_kcal": 500.0,
    "fat_g": 36.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.28,
    "magnesium_mg": 36.5,
    "omega3_g": 0.26,
    "phosphorus_mg": 415.0,
    "potassium_mg": 557.0,
    "protein_g": 40.9,
    "salt_g": 4.575,
    "sat_fat_g": 12.6,
    "sodium_mg": 1830.0,
    "sugar_g": 3.14,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "749420",
  "state": "Cooked",
  "subcategory": "Pork Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
