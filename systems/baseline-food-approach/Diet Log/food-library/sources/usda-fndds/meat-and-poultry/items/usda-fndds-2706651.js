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
  "id": "usda-fndds-2706651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pork, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 15.0,
    "energy_kcal": 129.0,
    "fat_g": 5.07,
    "fibre_g": 1.1,
    "folate_ug": 34.0,
    "iron_mg": 1.03,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 179.0,
    "protein_g": 5.61,
    "salt_g": 0.775,
    "sat_fat_g": 0.992,
    "sodium_mg": 310.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706651",
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
