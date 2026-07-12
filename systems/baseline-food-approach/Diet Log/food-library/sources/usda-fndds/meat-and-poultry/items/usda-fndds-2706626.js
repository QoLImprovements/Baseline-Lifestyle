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
  "id": "usda-fndds-2706626",
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
  "name": "Beef, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 15.0,
    "energy_kcal": 131.0,
    "fat_g": 5.18,
    "fibre_g": 0.8,
    "folate_ug": 33.0,
    "iron_mg": 1.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 57.0,
    "potassium_mg": 90.0,
    "protein_g": 5.77,
    "salt_g": 0.7675,
    "sat_fat_g": 1.08,
    "sodium_mg": 307.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706626",
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
