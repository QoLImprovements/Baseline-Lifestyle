/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708794",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tortellini, spinach-filled, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 21.4,
    "energy_kcal": 188.0,
    "fat_g": 7.4,
    "fibre_g": 0.9,
    "folate_ug": 52.0,
    "iron_mg": 2.06,
    "magnesium_mg": 22.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 127.0,
    "potassium_mg": 134.0,
    "protein_g": 8.94,
    "salt_g": 0.5025,
    "sat_fat_g": 2.48,
    "sodium_mg": 201.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 110.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 50.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708794",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
