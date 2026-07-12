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
  "id": "usda-fndds-2709073",
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
      "gramsPerUnit": 198.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stuffed pepper, with rice and meat",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 9.93,
    "energy_kcal": 178.0,
    "fat_g": 11.7,
    "fibre_g": 0.7,
    "folate_ug": 23.0,
    "iron_mg": 0.93,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 98.0,
    "potassium_mg": 174.0,
    "protein_g": 7.83,
    "salt_g": 0.8,
    "sat_fat_g": 3.49,
    "sodium_mg": 320.0,
    "sugar_g": 2.22,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 34.6,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 10.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709073",
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
