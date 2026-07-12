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
  "id": "usda-fndds-2705661",
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
  "name": "Ice cream sundae, hot fudge topping",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 31.9,
    "energy_kcal": 243.0,
    "fat_g": 11.2,
    "fibre_g": 1.1,
    "folate_ug": 5.0,
    "iron_mg": 0.36,
    "magnesium_mg": 21.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 102.0,
    "potassium_mg": 215.0,
    "protein_g": 3.7,
    "salt_g": 0.3425,
    "sat_fat_g": 6.51,
    "sodium_mg": 137.0,
    "sugar_g": 23.9,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705661",
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
