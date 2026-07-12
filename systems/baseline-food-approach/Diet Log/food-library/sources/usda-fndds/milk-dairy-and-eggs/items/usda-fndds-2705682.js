/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pudding",
  "id": "usda-fndds-2705682",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Custard",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 11.0,
    "energy_kcal": 97.0,
    "fat_g": 3.64,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.3,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 121.0,
    "potassium_mg": 158.0,
    "protein_g": 5.08,
    "salt_g": 0.21,
    "sat_fat_g": 1.65,
    "sodium_mg": 84.0,
    "sugar_g": 10.9,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705682",
  "state": "Unspecified",
  "subcategory": "Pudding",
  "tags": [
    "milk-dairy-and-eggs",
    "pudding",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
