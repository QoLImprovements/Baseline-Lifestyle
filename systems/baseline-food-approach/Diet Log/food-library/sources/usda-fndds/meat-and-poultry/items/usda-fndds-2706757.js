/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706757",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-frankfurter-with-sauerkraut",
      "kind": "unit",
      "label": "1 frankfurter with sauerkraut"
    }
  ],
  "name": "Frankfurters or hot dogs and sauerkraut",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 3.42,
    "energy_kcal": 198.0,
    "fat_g": 17.3,
    "fibre_g": 1.1,
    "folate_ug": 9.0,
    "iron_mg": 1.27,
    "magnesium_mg": 12.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 83.0,
    "potassium_mg": 266.0,
    "protein_g": 7.56,
    "salt_g": 1.91,
    "sat_fat_g": 7.04,
    "sodium_mg": 764.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706757",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
