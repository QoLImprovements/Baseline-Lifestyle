/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cubic-inch",
  "description": "Pizza",
  "id": "usda-fndds-2708685",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 424.0,
      "key": "1-calzone-or-stromboli",
      "kind": "unit",
      "label": "1 calzone or stromboli"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-calizza",
      "kind": "unit",
      "label": "1 Calizza"
    }
  ],
  "name": "Calzone, with meat and cheese",
  "nutritionPerBasis": {
    "calcium_mg": 177.0,
    "carbs_g": 31.3,
    "energy_kcal": 343.0,
    "fat_g": 17.7,
    "fibre_g": 1.4,
    "folate_ug": 87.0,
    "iron_mg": 2.64,
    "magnesium_mg": 22.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 209.0,
    "potassium_mg": 169.0,
    "protein_g": 14.8,
    "salt_g": 1.085,
    "sat_fat_g": 5.72,
    "sodium_mg": 434.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 113.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708685",
  "state": "Unspecified",
  "subcategory": "Pizza",
  "tags": [
    "meat-and-poultry",
    "pizza",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
