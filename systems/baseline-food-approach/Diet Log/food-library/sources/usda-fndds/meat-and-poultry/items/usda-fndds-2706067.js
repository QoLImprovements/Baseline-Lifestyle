/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-drummette",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-drummette",
      "kind": "unit",
      "label": "1 drummette"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-wing-any-size",
      "kind": "unit",
      "label": "1 wing, any size"
    }
  ],
  "name": "Chicken wing, fried, coated, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 15.0,
    "energy_kcal": 323.0,
    "fat_g": 21.3,
    "fibre_g": 0.3,
    "folate_ug": 32.0,
    "iron_mg": 1.29,
    "magnesium_mg": 22.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 187.0,
    "potassium_mg": 221.0,
    "protein_g": 17.8,
    "salt_g": 2.1075,
    "sat_fat_g": 4.98,
    "sodium_mg": 843.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.57,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706067",
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
