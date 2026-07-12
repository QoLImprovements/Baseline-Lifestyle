/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-2-pepper-with-filling",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "1-2-pepper-with-filling",
      "kind": "unit",
      "label": "1/2 pepper with filling"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stuffed pepper, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 4.23,
    "energy_kcal": 198.0,
    "fat_g": 15.9,
    "fibre_g": 0.7,
    "folate_ug": 19.0,
    "iron_mg": 0.79,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 108.0,
    "potassium_mg": 190.0,
    "protein_g": 9.2,
    "salt_g": 0.72,
    "sat_fat_g": 4.74,
    "sodium_mg": 288.0,
    "sugar_g": 1.59,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 48.2,
    "vitamin_e_mg": 1.87,
    "vitamin_k_ug": 14.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709072",
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
