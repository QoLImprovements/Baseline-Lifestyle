/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2706957",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "French dip sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 24.5,
    "energy_kcal": 184.0,
    "fat_g": 3.47,
    "fibre_g": 1.1,
    "folate_ug": 57.0,
    "iron_mg": 2.6,
    "magnesium_mg": 23.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 167.0,
    "potassium_mg": 357.0,
    "protein_g": 13.2,
    "salt_g": 1.5775,
    "sat_fat_g": 1.01,
    "sodium_mg": 631.0,
    "sugar_g": 2.76,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706957",
  "state": "Unspecified",
  "subcategory": "Deli and cured meat sandwiches",
  "tags": [
    "deli-and-cured-meat-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
