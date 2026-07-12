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
  "id": "usda-fndds-2709298",
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
  "name": "Fruit salad, excluding citrus fruits, with nondairy whipped topping",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 17.3,
    "energy_kcal": 153.0,
    "fat_g": 8.67,
    "fibre_g": 1.7,
    "folate_ug": 18.0,
    "iron_mg": 0.28,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 205.0,
    "protein_g": 1.93,
    "salt_g": 0.0075,
    "sat_fat_g": 2.3,
    "sodium_mg": 3.0,
    "sugar_g": 13.1,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 19.4,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709298",
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
