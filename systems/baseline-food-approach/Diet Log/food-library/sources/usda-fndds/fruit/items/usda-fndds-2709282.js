/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Blueberries and other berries",
  "id": "usda-fndds-2709282",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-berry",
      "kind": "unit",
      "label": "1 berry"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Raspberries, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 12.9,
    "energy_kcal": 57.0,
    "fat_g": 0.19,
    "fibre_g": 6.5,
    "folate_ug": 21.0,
    "iron_mg": 0.45,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 156.0,
    "protein_g": 1.01,
    "salt_g": 0.0,
    "sat_fat_g": 0.019,
    "sodium_mg": 0.0,
    "sugar_g": 2.68,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709282",
  "state": "Frozen",
  "subcategory": "Blueberries and other berries",
  "tags": [
    "blueberries-and-other-berries",
    "frozen",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
