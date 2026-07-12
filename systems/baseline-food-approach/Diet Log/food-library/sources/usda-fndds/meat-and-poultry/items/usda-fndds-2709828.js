/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709828",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lettuce, wilted, with bacon dressing",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 3.44,
    "energy_kcal": 84.0,
    "fat_g": 6.31,
    "fibre_g": 1.0,
    "folate_ug": 29.0,
    "iron_mg": 0.33,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 44.0,
    "potassium_mg": 256.0,
    "protein_g": 2.77,
    "salt_g": 0.295,
    "sat_fat_g": 2.34,
    "sodium_mg": 118.0,
    "sugar_g": 0.66,
    "vitamin_a_ug": 295.0,
    "vitamin_c_mg": 10.9,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 94.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709828",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "meat-and-poultry",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
