/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706472",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stewed, seasoned, ground beef and pork, Mexican style",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 1.45,
    "energy_kcal": 139.0,
    "fat_g": 6.98,
    "fibre_g": 0.2,
    "folate_ug": 6.0,
    "iron_mg": 1.23,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 154.0,
    "potassium_mg": 279.0,
    "protein_g": 16.7,
    "salt_g": 0.845,
    "sat_fat_g": 2.56,
    "sodium_mg": 338.0,
    "sugar_g": 0.46,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706472",
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
