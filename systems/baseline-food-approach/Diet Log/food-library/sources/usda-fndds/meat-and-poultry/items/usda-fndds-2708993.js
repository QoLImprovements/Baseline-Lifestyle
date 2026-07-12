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
  "id": "usda-fndds-2708993",
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
  "name": "Kidney beans and white rice",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 23.9,
    "energy_kcal": 158.0,
    "fat_g": 4.29,
    "fibre_g": 4.3,
    "folate_ug": 92.0,
    "iron_mg": 2.12,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 239.0,
    "protein_g": 5.9,
    "salt_g": 0.5725,
    "sat_fat_g": 0.592,
    "sodium_mg": 229.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708993",
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
