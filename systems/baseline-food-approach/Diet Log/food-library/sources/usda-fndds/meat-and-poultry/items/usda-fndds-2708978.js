/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708978",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice with vienna sausage, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 33.5,
    "energy_kcal": 269.0,
    "fat_g": 11.6,
    "fibre_g": 0.8,
    "folate_ug": 67.0,
    "iron_mg": 1.98,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 72.0,
    "potassium_mg": 115.0,
    "protein_g": 6.46,
    "salt_g": 2.3975,
    "sat_fat_g": 3.3,
    "sodium_mg": 959.0,
    "sugar_g": 0.41,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708978",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "meat-and-poultry",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
