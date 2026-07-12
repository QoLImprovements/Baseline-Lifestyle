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
  "id": "usda-fndds-2708779",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-shell-jumbo",
      "kind": "unit",
      "label": "1 shell (jumbo)"
    }
  ],
  "name": "Stuffed shells, cheese-filled, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 175.0,
    "carbs_g": 22.2,
    "energy_kcal": 205.0,
    "fat_g": 8.51,
    "fibre_g": 0.7,
    "folate_ug": 37.0,
    "iron_mg": 1.66,
    "magnesium_mg": 19.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 172.0,
    "potassium_mg": 151.0,
    "protein_g": 9.93,
    "salt_g": 1.07,
    "sat_fat_g": 4.47,
    "sodium_mg": 428.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708779",
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
