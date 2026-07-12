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
  "id": "usda-fndds-2708762",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ravioli, NS as to filling, with cream sauce",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 15.2,
    "energy_kcal": 169.0,
    "fat_g": 8.38,
    "fibre_g": 0.5,
    "folate_ug": 27.0,
    "iron_mg": 1.4,
    "magnesium_mg": 14.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 116.0,
    "potassium_mg": 147.0,
    "protein_g": 8.12,
    "salt_g": 0.585,
    "sat_fat_g": 2.96,
    "sodium_mg": 234.0,
    "sugar_g": 1.69,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708762",
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
