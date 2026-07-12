/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chili with meat, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 6.68,
    "energy_kcal": 160.0,
    "fat_g": 9.35,
    "fibre_g": 1.9,
    "folate_ug": 31.0,
    "iron_mg": 1.79,
    "magnesium_mg": 20.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 113.0,
    "potassium_mg": 263.0,
    "protein_g": 12.0,
    "salt_g": 1.0325,
    "sat_fat_g": 2.85,
    "sodium_mg": 413.0,
    "sugar_g": 1.39,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706374",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
