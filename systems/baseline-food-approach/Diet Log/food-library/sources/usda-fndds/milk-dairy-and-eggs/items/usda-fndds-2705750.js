/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Cottage/ricotta cheese",
  "id": "usda-fndds-2705750",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cheese, Ricotta",
  "nutritionPerBasis": {
    "calcium_mg": 248.0,
    "carbs_g": 6.0,
    "energy_kcal": 148.0,
    "fat_g": 9.46,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.27,
    "magnesium_mg": 18.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 172.0,
    "potassium_mg": 178.0,
    "protein_g": 9.6,
    "salt_g": 0.255,
    "sat_fat_g": 5.95,
    "sodium_mg": 102.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705750",
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
