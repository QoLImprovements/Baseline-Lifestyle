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
  "id": "usda-fndds-2706619",
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
  "name": "Beef, rice, and vegetables excluding carrots, broccoli, and/or dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 16.1,
    "energy_kcal": 132.0,
    "fat_g": 4.99,
    "fibre_g": 1.0,
    "folate_ug": 34.0,
    "iron_mg": 1.22,
    "magnesium_mg": 16.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 61.0,
    "potassium_mg": 162.0,
    "protein_g": 5.91,
    "salt_g": 0.755,
    "sat_fat_g": 0.98,
    "sodium_mg": 302.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706619",
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
