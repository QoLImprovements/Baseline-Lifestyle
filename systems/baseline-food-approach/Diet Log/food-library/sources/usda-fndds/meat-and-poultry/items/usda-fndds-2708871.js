/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708871",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pasta with cream sauce, poultry, and added vegetables, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 17.0,
    "energy_kcal": 146.0,
    "fat_g": 5.68,
    "fibre_g": 1.1,
    "folate_ug": 42.0,
    "iron_mg": 0.8,
    "magnesium_mg": 14.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 73.0,
    "potassium_mg": 89.0,
    "protein_g": 6.3,
    "salt_g": 0.4975,
    "sat_fat_g": 2.82,
    "sodium_mg": 199.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708871",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "meat-and-poultry",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
