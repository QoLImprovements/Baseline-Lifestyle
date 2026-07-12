/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup-dry-yields",
  "description": "Oatmeal",
  "id": "usda-fndds-2708383",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 485.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    }
  ],
  "name": "Oatmeal, regular or quick, made with milk, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 16.2,
    "energy_kcal": 116.0,
    "fat_g": 3.25,
    "fibre_g": 1.7,
    "folate_ug": 5.0,
    "iron_mg": 0.68,
    "magnesium_mg": 35.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 169.0,
    "potassium_mg": 215.0,
    "protein_g": 5.56,
    "salt_g": 0.2625,
    "sat_fat_g": 1.44,
    "sodium_mg": 105.0,
    "sugar_g": 5.08,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708383",
  "state": "Unspecified",
  "subcategory": "Oatmeal",
  "tags": [
    "milk-dairy-and-eggs",
    "oatmeal",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
