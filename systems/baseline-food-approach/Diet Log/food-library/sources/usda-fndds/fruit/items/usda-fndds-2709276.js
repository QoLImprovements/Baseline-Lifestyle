/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Blueberries and other berries",
  "id": "usda-fndds-2709276",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Bluberries, canned",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 22.7,
    "energy_kcal": 88.0,
    "fat_g": 0.4,
    "fibre_g": 2.6,
    "folate_ug": 2.0,
    "iron_mg": 0.43,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 54.0,
    "protein_g": 1.04,
    "salt_g": 0.0075,
    "sat_fat_g": 0.028,
    "sodium_mg": 3.0,
    "sugar_g": 17.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 19.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709276",
  "state": "Canned",
  "subcategory": "Blueberries and other berries",
  "tags": [
    "blueberries-and-other-berries",
    "canned",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
