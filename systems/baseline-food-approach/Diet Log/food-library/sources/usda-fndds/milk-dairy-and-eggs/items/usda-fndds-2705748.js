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
  "id": "usda-fndds-2705748",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cheese, cottage, creamed, large or small curd",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 4.6,
    "energy_kcal": 103.0,
    "fat_g": 4.22,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 154.0,
    "potassium_mg": 124.0,
    "protein_g": 11.6,
    "salt_g": 0.875,
    "sat_fat_g": 2.6,
    "sodium_mg": 350.0,
    "sugar_g": 2.67,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705748",
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
