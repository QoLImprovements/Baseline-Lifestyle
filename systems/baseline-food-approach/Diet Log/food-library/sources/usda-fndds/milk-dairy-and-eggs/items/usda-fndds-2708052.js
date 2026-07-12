/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708052",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-pastry",
      "kind": "unit",
      "label": "1 pastry"
    }
  ],
  "name": "Pastry, Italian, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 35.1,
    "energy_kcal": 267.0,
    "fat_g": 10.9,
    "fibre_g": 0.8,
    "folate_ug": 29.0,
    "iron_mg": 1.45,
    "magnesium_mg": 22.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 131.0,
    "potassium_mg": 190.0,
    "protein_g": 7.52,
    "salt_g": 0.1675,
    "sat_fat_g": 5.14,
    "sodium_mg": 67.0,
    "sugar_g": 13.1,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708052",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
