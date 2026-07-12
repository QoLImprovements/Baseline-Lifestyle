/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709300",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fruit salad, including citrus fruits, with pudding",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 17.5,
    "energy_kcal": 133.0,
    "fat_g": 6.34,
    "fibre_g": 1.8,
    "folate_ug": 18.0,
    "iron_mg": 0.26,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 195.0,
    "protein_g": 1.95,
    "salt_g": 0.0975,
    "sat_fat_g": 0.727,
    "sodium_mg": 39.0,
    "sugar_g": 12.8,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 15.9,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709300",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "other-fruits-and-fruit-salads",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
