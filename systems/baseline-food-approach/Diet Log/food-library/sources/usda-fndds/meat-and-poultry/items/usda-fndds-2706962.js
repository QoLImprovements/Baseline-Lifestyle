/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat and BBQ sandwiches",
  "id": "usda-fndds-2706962",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Gyro sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 18.8,
    "energy_kcal": 184.0,
    "fat_g": 6.76,
    "fibre_g": 1.0,
    "folate_ug": 41.0,
    "iron_mg": 1.48,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 205.0,
    "protein_g": 11.2,
    "salt_g": 0.8075,
    "sat_fat_g": 2.52,
    "sodium_mg": 323.0,
    "sugar_g": 1.74,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706962",
  "state": "Unspecified",
  "subcategory": "Meat and BBQ sandwiches",
  "tags": [
    "meat-and-bbq-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
