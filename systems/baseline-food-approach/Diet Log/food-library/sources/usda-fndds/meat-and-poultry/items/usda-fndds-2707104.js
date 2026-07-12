/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-budget-gourmet-8-5-oz",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2707104",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "1-budget-gourmet-8-5-oz",
      "kind": "unit",
      "label": "1 Budget Gourmet (8.5 oz)"
    },
    {
      "gramsPerUnit": 298.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 298.0,
      "key": "1-stouffer-s-meal-10-5-oz",
      "kind": "unit",
      "label": "1 Stouffer's meal (10.5 oz)"
    }
  ],
  "name": "Beef with spaetzle or rice, vegetable, frozen meal",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 12.2,
    "energy_kcal": 118.0,
    "fat_g": 4.37,
    "fibre_g": 0.6,
    "folate_ug": 25.0,
    "iron_mg": 1.05,
    "magnesium_mg": 13.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 71.0,
    "potassium_mg": 149.0,
    "protein_g": 6.92,
    "salt_g": 0.695,
    "sat_fat_g": 1.23,
    "sodium_mg": 278.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 17.4,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707104",
  "state": "Frozen",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "meat-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
