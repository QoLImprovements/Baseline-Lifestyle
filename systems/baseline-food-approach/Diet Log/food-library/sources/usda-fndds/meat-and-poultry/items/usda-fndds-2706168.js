/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-footlong",
  "description": "Frankfurters",
  "id": "usda-fndds-2706168",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-footlong",
      "kind": "unit",
      "label": "1 footlong"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-bun-length-jumbo",
      "kind": "unit",
      "label": "1 bun length/jumbo"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cocktail-miniature",
      "kind": "unit",
      "label": "1 cocktail/miniature"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup-sliced",
      "kind": "unit",
      "label": "1 cup, sliced"
    }
  ],
  "name": "Hot dog, meat and poultry",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 5.02,
    "energy_kcal": 277.0,
    "fat_g": 24.2,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.04,
    "magnesium_mg": 10.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 166.0,
    "potassium_mg": 341.0,
    "protein_g": 9.72,
    "salt_g": 2.07,
    "sat_fat_g": 7.58,
    "sodium_mg": 828.0,
    "sugar_g": 2.75,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706168",
  "state": "Unspecified",
  "subcategory": "Frankfurters",
  "tags": [
    "frankfurters",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
