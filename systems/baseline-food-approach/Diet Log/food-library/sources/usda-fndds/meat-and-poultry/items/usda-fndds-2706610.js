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
  "id": "usda-fndds-2706610",
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
  "name": "Beef, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.7,
    "energy_kcal": 126.0,
    "fat_g": 5.06,
    "fibre_g": 1.5,
    "folate_ug": 47.0,
    "iron_mg": 1.35,
    "magnesium_mg": 18.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 74.0,
    "potassium_mg": 159.0,
    "protein_g": 6.74,
    "salt_g": 0.775,
    "sat_fat_g": 1.04,
    "sodium_mg": 310.0,
    "sugar_g": 1.62,
    "vitamin_a_ug": 88.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 12.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706610",
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
