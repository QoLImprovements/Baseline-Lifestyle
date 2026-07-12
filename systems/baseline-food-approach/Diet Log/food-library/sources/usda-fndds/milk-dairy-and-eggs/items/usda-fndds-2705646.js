/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705646",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cone",
      "kind": "unit",
      "label": "1 cone"
    }
  ],
  "name": "Ice cream cone, scooped, vanilla, waffle cone",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 27.2,
    "energy_kcal": 218.0,
    "fat_g": 10.6,
    "fibre_g": 0.8,
    "folate_ug": 13.0,
    "iron_mg": 0.34,
    "magnesium_mg": 15.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 105.0,
    "potassium_mg": 196.0,
    "protein_g": 3.76,
    "salt_g": 0.2325,
    "sat_fat_g": 6.42,
    "sodium_mg": 93.0,
    "sugar_g": 21.5,
    "vitamin_a_ug": 111.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705646",
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
