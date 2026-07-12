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
  "id": "usda-fndds-2706611",
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
  "name": "Beef, noodles, and vegetables excluding carrots, broccoli, and dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 14.9,
    "energy_kcal": 130.0,
    "fat_g": 5.07,
    "fibre_g": 1.4,
    "folate_ug": 46.0,
    "iron_mg": 1.35,
    "magnesium_mg": 20.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 76.0,
    "potassium_mg": 164.0,
    "protein_g": 6.77,
    "salt_g": 0.765,
    "sat_fat_g": 1.04,
    "sodium_mg": 306.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706611",
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
