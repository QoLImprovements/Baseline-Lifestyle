/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705659",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-sundae",
      "kind": "unit",
      "label": "1 sundae"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ice cream sundae, fruit topping",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 32.7,
    "energy_kcal": 221.0,
    "fat_g": 9.2,
    "fibre_g": 0.7,
    "folate_ug": 5.0,
    "iron_mg": 0.13,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 81.0,
    "potassium_mg": 163.0,
    "protein_g": 2.72,
    "salt_g": 0.1625,
    "sat_fat_g": 5.63,
    "sodium_mg": 65.0,
    "sugar_g": 22.2,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705659",
  "state": "Unspecified",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
