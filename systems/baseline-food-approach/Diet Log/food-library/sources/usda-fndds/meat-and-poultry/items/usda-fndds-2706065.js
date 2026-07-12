/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-drummette",
      "kind": "unit",
      "label": "1 drummette"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-wing-any-size",
      "kind": "unit",
      "label": "1 wing, any size"
    }
  ],
  "name": "Chicken wing, fried, coated, from raw",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 5.96,
    "energy_kcal": 289.0,
    "fat_g": 20.2,
    "fibre_g": 0.2,
    "folate_ug": 19.0,
    "iron_mg": 1.11,
    "magnesium_mg": 17.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 125.0,
    "potassium_mg": 176.0,
    "protein_g": 19.4,
    "salt_g": 1.0475,
    "sat_fat_g": 4.83,
    "sodium_mg": 419.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.87,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706065",
  "state": "Fried",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
