/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709304",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit salad, including citrus fruits, with nondairy whipped topping",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 16.6,
    "energy_kcal": 148.0,
    "fat_g": 8.45,
    "fibre_g": 2.1,
    "folate_ug": 21.0,
    "iron_mg": 0.29,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 216.0,
    "protein_g": 2.03,
    "salt_g": 0.0075,
    "sat_fat_g": 2.25,
    "sodium_mg": 3.0,
    "sugar_g": 12.5,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 18.8,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709304",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "fruit",
    "other-fruits-and-fruit-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
