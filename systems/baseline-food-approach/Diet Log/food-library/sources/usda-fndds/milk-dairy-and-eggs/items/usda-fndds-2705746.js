/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cheese",
  "id": "usda-fndds-2705746",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 6.2,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Queso cotija",
  "nutritionPerBasis": {
    "calcium_mg": 700.0,
    "carbs_g": 2.72,
    "energy_kcal": 351.0,
    "fat_g": 27.2,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.0,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 486.0,
    "potassium_mg": 117.0,
    "protein_g": 23.8,
    "salt_g": 4.05,
    "sat_fat_g": 15.9,
    "sodium_mg": 1620.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 166.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705746",
  "state": "Unspecified",
  "subcategory": "Cheese",
  "tags": [
    "cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
