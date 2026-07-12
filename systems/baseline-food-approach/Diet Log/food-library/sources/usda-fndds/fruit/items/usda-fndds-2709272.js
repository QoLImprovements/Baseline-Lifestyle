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
  "id": "usda-fndds-2709272",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Berries, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 12.5,
    "energy_kcal": 52.0,
    "fat_g": 0.34,
    "fibre_g": 4.1,
    "folate_ug": 20.0,
    "iron_mg": 0.55,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 124.0,
    "protein_g": 0.76,
    "salt_g": 0.0025,
    "sat_fat_g": 0.023,
    "sodium_mg": 1.0,
    "sugar_g": 6.59,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 17.4,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709272",
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
