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
  "id": "usda-fndds-2708785",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tortellini, meat-filled, with tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 15.8,
    "energy_kcal": 134.0,
    "fat_g": 4.92,
    "fibre_g": 1.0,
    "folate_ug": 50.0,
    "iron_mg": 1.19,
    "magnesium_mg": 19.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 93.0,
    "potassium_mg": 124.0,
    "protein_g": 6.62,
    "salt_g": 1.545,
    "sat_fat_g": 1.39,
    "sodium_mg": 618.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708785",
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
