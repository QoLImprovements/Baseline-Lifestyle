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
  "id": "usda-fndds-2706617",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef, rice, and vegetables excluding carrots, broccoli, and dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 20.0,
    "energy_kcal": 149.0,
    "fat_g": 4.29,
    "fibre_g": 0.9,
    "folate_ug": 44.0,
    "iron_mg": 1.32,
    "magnesium_mg": 16.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 74.0,
    "potassium_mg": 113.0,
    "protein_g": 7.62,
    "salt_g": 0.8325,
    "sat_fat_g": 1.0,
    "sodium_mg": 333.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706617",
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
