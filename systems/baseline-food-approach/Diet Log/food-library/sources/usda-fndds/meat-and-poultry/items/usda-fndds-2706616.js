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
  "id": "usda-fndds-2706616",
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
  "name": "Beef, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 18.4,
    "energy_kcal": 149.0,
    "fat_g": 4.86,
    "fibre_g": 1.0,
    "folate_ug": 44.0,
    "iron_mg": 1.31,
    "magnesium_mg": 14.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 70.0,
    "potassium_mg": 106.0,
    "protein_g": 7.54,
    "salt_g": 0.78,
    "sat_fat_g": 1.07,
    "sodium_mg": 312.0,
    "sugar_g": 0.69,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 15.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706616",
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
