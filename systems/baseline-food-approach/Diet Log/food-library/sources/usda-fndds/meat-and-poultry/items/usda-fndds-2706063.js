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
  "id": "usda-fndds-2706063",
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
      "gramsPerUnit": 55.0,
      "key": "1-wing-any-size",
      "kind": "unit",
      "label": "1 wing, any size"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-drummette",
      "kind": "unit",
      "label": "1 drummette"
    }
  ],
  "name": "Chicken wing, grilled with sauce",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 7.28,
    "energy_kcal": 250.0,
    "fat_g": 15.5,
    "fibre_g": 0.2,
    "folate_ug": 8.0,
    "iron_mg": 0.78,
    "magnesium_mg": 17.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 120.0,
    "potassium_mg": 210.0,
    "protein_g": 19.0,
    "salt_g": 1.42,
    "sat_fat_g": 4.22,
    "sodium_mg": 568.0,
    "sugar_g": 5.94,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706063",
  "state": "Grilled",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
