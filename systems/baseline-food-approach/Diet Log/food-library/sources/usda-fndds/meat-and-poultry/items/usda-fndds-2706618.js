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
  "id": "usda-fndds-2706618",
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
  "name": "Beef, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 14.9,
    "energy_kcal": 131.0,
    "fat_g": 5.4,
    "fibre_g": 1.1,
    "folate_ug": 35.0,
    "iron_mg": 1.22,
    "magnesium_mg": 14.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 58.0,
    "potassium_mg": 156.0,
    "protein_g": 5.85,
    "salt_g": 0.765,
    "sat_fat_g": 1.03,
    "sodium_mg": 306.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 1.41,
    "vitamin_k_ug": 13.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706618",
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
