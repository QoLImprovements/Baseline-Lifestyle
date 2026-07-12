/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cocktail-miniature",
  "description": "Frankfurters",
  "id": "usda-fndds-2706170",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cocktail-miniature",
      "kind": "unit",
      "label": "1 cocktail/miniature"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-bun-length-jumbo",
      "kind": "unit",
      "label": "1 bun length/jumbo"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-footlong",
      "kind": "unit",
      "label": "1 footlong"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup-sliced",
      "kind": "unit",
      "label": "1 cup, sliced"
    }
  ],
  "name": "Hot dog, turkey",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 3.81,
    "energy_kcal": 223.0,
    "fat_g": 17.3,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.47,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 163.0,
    "potassium_mg": 372.0,
    "protein_g": 12.2,
    "salt_g": 2.1625,
    "sat_fat_g": 4.03,
    "sodium_mg": 865.0,
    "sugar_g": 1.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706170",
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
