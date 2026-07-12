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
  "id": "usda-fndds-2705747",
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
  "name": "Cheese, cottage, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 4.31,
    "energy_kcal": 82.0,
    "fat_g": 2.3,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.13,
    "magnesium_mg": 9.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 148.0,
    "potassium_mg": 120.0,
    "protein_g": 11.0,
    "salt_g": 0.8025,
    "sat_fat_g": 1.26,
    "sodium_mg": 321.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705747",
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
