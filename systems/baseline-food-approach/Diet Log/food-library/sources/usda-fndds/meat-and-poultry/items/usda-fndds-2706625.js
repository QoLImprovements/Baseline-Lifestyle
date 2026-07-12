/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706625",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, rice, and vegetables excluding carrots, broccoli, and dark-green leafy; cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 15.8,
    "energy_kcal": 143.0,
    "fat_g": 5.24,
    "fibre_g": 0.7,
    "folate_ug": 34.0,
    "iron_mg": 1.04,
    "magnesium_mg": 17.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 113.0,
    "potassium_mg": 119.0,
    "protein_g": 8.18,
    "salt_g": 0.755,
    "sat_fat_g": 2.58,
    "sodium_mg": 302.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706625",
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
