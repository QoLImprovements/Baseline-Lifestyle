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
  "id": "usda-fndds-2708726",
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
      "gramsPerUnit": 28.0,
      "key": "1-pastry",
      "kind": "unit",
      "label": "1 pastry"
    }
  ],
  "name": "Pastry, cheese-filled",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 15.4,
    "energy_kcal": 274.0,
    "fat_g": 19.2,
    "fibre_g": 0.4,
    "folate_ug": 30.0,
    "iron_mg": 0.98,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 170.0,
    "potassium_mg": 115.0,
    "protein_g": 9.92,
    "salt_g": 1.3275,
    "sat_fat_g": 6.14,
    "sodium_mg": 531.0,
    "sugar_g": 2.19,
    "vitamin_a_ug": 177.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 13.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708726",
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
