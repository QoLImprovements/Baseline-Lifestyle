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
  "id": "usda-fndds-2706977",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Pork sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 112.0,
    "carbs_g": 25.4,
    "energy_kcal": 226.0,
    "fat_g": 5.47,
    "fibre_g": 1.2,
    "folate_ug": 57.0,
    "iron_mg": 2.04,
    "magnesium_mg": 26.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 166.0,
    "potassium_mg": 230.0,
    "protein_g": 17.7,
    "salt_g": 1.0075,
    "sat_fat_g": 1.57,
    "sodium_mg": 403.0,
    "sugar_g": 2.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706977",
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
