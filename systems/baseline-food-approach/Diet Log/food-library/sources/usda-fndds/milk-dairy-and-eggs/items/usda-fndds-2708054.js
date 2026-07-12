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
  "id": "usda-fndds-2708054",
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
      "key": "1-napoleon",
      "kind": "unit",
      "label": "1 Napoleon"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-cream-horn",
      "kind": "unit",
      "label": "1 cream horn"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature-napoleon",
      "kind": "unit",
      "label": "1 miniature Napoleon"
    }
  ],
  "name": "Pastry, puff, custard or cream filled, iced or not iced",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 30.1,
    "energy_kcal": 410.0,
    "fat_g": 29.7,
    "fibre_g": 0.8,
    "folate_ug": 34.0,
    "iron_mg": 1.52,
    "magnesium_mg": 13.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 72.0,
    "potassium_mg": 90.0,
    "protein_g": 5.68,
    "salt_g": 0.4125,
    "sat_fat_g": 7.66,
    "sodium_mg": 165.0,
    "sugar_g": 4.7,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708054",
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
