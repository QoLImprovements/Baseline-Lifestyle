/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708027",
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
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Crisp, cherry",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 34.7,
    "energy_kcal": 234.0,
    "fat_g": 9.61,
    "fibre_g": 2.8,
    "folate_ug": 9.0,
    "iron_mg": 1.06,
    "magnesium_mg": 33.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 92.0,
    "potassium_mg": 147.0,
    "protein_g": 3.13,
    "salt_g": 0.2975,
    "sat_fat_g": 4.78,
    "sodium_mg": 119.0,
    "sugar_g": 20.6,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708027",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
