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
  "id": "usda-fndds-2708930",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Flavored pasta",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 14.4,
    "energy_kcal": 87.0,
    "fat_g": 2.21,
    "fibre_g": 0.4,
    "folate_ug": 18.0,
    "iron_mg": 0.41,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 21.0,
    "protein_g": 2.47,
    "salt_g": 0.435,
    "sat_fat_g": 0.436,
    "sodium_mg": 174.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708930",
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
