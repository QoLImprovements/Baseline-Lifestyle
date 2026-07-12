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
  "id": "usda-fndds-2709271",
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
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Berries, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 9.94,
    "energy_kcal": 44.0,
    "fat_g": 0.25,
    "fibre_g": 2.0,
    "folate_ug": 7.0,
    "iron_mg": 0.28,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 138.0,
    "protein_g": 0.66,
    "salt_g": 0.0,
    "sat_fat_g": 0.008,
    "sodium_mg": 0.0,
    "sugar_g": 6.21,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 44.2,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709271",
  "state": "Unspecified",
  "subcategory": "Blueberries and other berries",
  "tags": [
    "blueberries-and-other-berries",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
