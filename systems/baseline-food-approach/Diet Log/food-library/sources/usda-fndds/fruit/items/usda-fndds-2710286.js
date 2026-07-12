/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Jams, syrups, toppings",
  "id": "usda-fndds-2710286",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Topping, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 66.3,
    "energy_kcal": 254.0,
    "fat_g": 0.1,
    "fibre_g": 0.7,
    "folate_ug": 6.0,
    "iron_mg": 0.28,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 51.0,
    "protein_g": 0.2,
    "salt_g": 0.0525,
    "sat_fat_g": 0.005,
    "sodium_mg": 21.0,
    "sugar_g": 27.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 13.7,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710286",
  "state": "Unspecified",
  "subcategory": "Jams, syrups, toppings",
  "tags": [
    "fruit",
    "jams-syrups-toppings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
