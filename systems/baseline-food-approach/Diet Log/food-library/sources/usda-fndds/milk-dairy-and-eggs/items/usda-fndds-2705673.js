/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-sicle",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705673",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-sicle",
      "kind": "unit",
      "label": "1 sicle"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Creamsicle",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 32.8,
    "energy_kcal": 165.0,
    "fat_g": 3.08,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.0,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 174.0,
    "protein_g": 1.54,
    "salt_g": 0.115,
    "sat_fat_g": 1.81,
    "sodium_mg": 46.0,
    "sugar_g": 18.5,
    "vitamin_a_ug": 93.0,
    "vitamin_c_mg": 13.8,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705673",
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
