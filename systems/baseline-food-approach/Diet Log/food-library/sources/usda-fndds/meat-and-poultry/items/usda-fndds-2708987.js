/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Bean, pea, legume dishes",
  "id": "usda-fndds-2708987",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Kidney beans and rice, from fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 23.2,
    "energy_kcal": 179.0,
    "fat_g": 7.07,
    "fibre_g": 4.2,
    "folate_ug": 89.0,
    "iron_mg": 2.06,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 231.0,
    "protein_g": 5.72,
    "salt_g": 0.74,
    "sat_fat_g": 0.963,
    "sodium_mg": 296.0,
    "sugar_g": 0.19,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 11.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708987",
  "state": "Unspecified",
  "subcategory": "Bean, pea, legume dishes",
  "tags": [
    "bean-pea-legume-dishes",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
