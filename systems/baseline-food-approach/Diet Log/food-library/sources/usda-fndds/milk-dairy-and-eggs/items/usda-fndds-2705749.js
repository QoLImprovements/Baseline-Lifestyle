/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cottage/ricotta cheese",
  "id": "usda-fndds-2705749",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cottage cheese, farmer's",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 4.33,
    "energy_kcal": 148.0,
    "fat_g": 9.73,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.0,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 145.0,
    "potassium_mg": 117.0,
    "protein_g": 11.0,
    "salt_g": 0.825,
    "sat_fat_g": 6.03,
    "sodium_mg": 330.0,
    "sugar_g": 2.52,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705749",
  "state": "Unspecified",
  "subcategory": "Cottage/ricotta cheese",
  "tags": [
    "cottage-ricotta-cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
