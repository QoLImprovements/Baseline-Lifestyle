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
  "id": "usda-fndds-2706058",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-wing-any-size",
      "kind": "unit",
      "label": "1 wing, any size"
    }
  ],
  "name": "Chicken wing, baked or broiled, from pre-cooked",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.6,
    "energy_kcal": 257.0,
    "fat_g": 18.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.93,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 251.0,
    "potassium_mg": 285.0,
    "protein_g": 23.4,
    "salt_g": 1.4475,
    "sat_fat_g": 4.63,
    "sodium_mg": 579.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706058",
  "state": "Baked",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "baked",
    "chicken-whole-pieces",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
