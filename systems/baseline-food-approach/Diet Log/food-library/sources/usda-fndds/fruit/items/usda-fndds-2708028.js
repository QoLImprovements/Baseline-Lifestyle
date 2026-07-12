/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708028",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Crisp, peach",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 29.6,
    "energy_kcal": 214.0,
    "fat_g": 9.59,
    "fibre_g": 2.7,
    "folate_ug": 9.0,
    "iron_mg": 1.09,
    "magnesium_mg": 32.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 91.0,
    "potassium_mg": 159.0,
    "protein_g": 2.98,
    "salt_g": 0.3025,
    "sat_fat_g": 4.78,
    "sodium_mg": 121.0,
    "sugar_g": 15.5,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708028",
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
