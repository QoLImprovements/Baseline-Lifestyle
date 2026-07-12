/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708795",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-cannelloni",
      "kind": "unit",
      "label": "1 cannelloni"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cannelloni, cheese- and spinach-filled, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 18.4,
    "energy_kcal": 157.0,
    "fat_g": 6.51,
    "fibre_g": 1.1,
    "folate_ug": 48.0,
    "iron_mg": 1.51,
    "magnesium_mg": 35.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 100.0,
    "potassium_mg": 225.0,
    "protein_g": 6.31,
    "salt_g": 1.545,
    "sat_fat_g": 2.62,
    "sodium_mg": 618.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 116.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708795",
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
