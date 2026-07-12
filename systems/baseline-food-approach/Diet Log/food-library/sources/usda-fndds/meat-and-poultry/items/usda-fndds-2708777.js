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
  "id": "usda-fndds-2708777",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-manicotti",
      "kind": "unit",
      "label": "1 manicotti"
    }
  ],
  "name": "Manicotti, cheese-filled, with meat sauce",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 15.1,
    "energy_kcal": 160.0,
    "fat_g": 7.28,
    "fibre_g": 0.8,
    "folate_ug": 25.0,
    "iron_mg": 1.41,
    "magnesium_mg": 18.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 142.0,
    "potassium_mg": 200.0,
    "protein_g": 8.83,
    "salt_g": 1.08,
    "sat_fat_g": 3.71,
    "sodium_mg": 432.0,
    "sugar_g": 1.54,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708777",
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
