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
  "id": "usda-fndds-2706383",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 186.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Creamed chipped or dried beef",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 7.57,
    "energy_kcal": 133.0,
    "fat_g": 8.05,
    "fibre_g": 0.1,
    "folate_ug": 8.0,
    "iron_mg": 0.56,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 118.0,
    "potassium_mg": 174.0,
    "protein_g": 7.65,
    "salt_g": 1.195,
    "sat_fat_g": 2.32,
    "sodium_mg": 478.0,
    "sugar_g": 4.58,
    "vitamin_a_ug": 109.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706383",
  "state": "Dried",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "dried",
    "meat-and-poultry",
    "meat-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
