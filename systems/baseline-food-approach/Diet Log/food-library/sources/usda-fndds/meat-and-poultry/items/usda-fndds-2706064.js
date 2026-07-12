/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-wing-any-size",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706064",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-wing-any-size",
      "kind": "unit",
      "label": "1 wing, any size"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-drummette",
      "kind": "unit",
      "label": "1 drummette"
    }
  ],
  "name": "Chicken wing, sauteed",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 265.0,
    "fat_g": 18.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.82,
    "magnesium_mg": 18.0,
    "omega3_g": 0.022,
    "phosphorus_mg": 143.0,
    "potassium_mg": 206.0,
    "protein_g": 23.1,
    "salt_g": 1.005,
    "sat_fat_g": 5.1,
    "sodium_mg": 402.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706064",
  "state": "Unspecified",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
