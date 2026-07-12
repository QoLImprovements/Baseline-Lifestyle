/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thick-slice-approx-3-x-2-x-3-8",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-168120",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "thick-slice-approx-3-x-2-x-3-8",
      "kind": "unit",
      "label": "thick slice (approx 3\" x 2\" x 3/8\")"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "medium-slice-approx-3-x-2-x-1-4",
      "kind": "unit",
      "label": "medium slice (approx 3\" x 2\" x 1/4\")"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-boneless",
      "kind": "unit",
      "label": "3 oz, boneless"
    }
  ],
  "name": "Turkey, light or dark meat, smoked, cooked, with skin, bone removed",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 0.0,
    "energy_kcal": 870.0,
    "fat_g": 9.7,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.79,
    "magnesium_mg": 25.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 203.0,
    "potassium_mg": 280.0,
    "protein_g": 28.1,
    "salt_g": 2.49,
    "sat_fat_g": 2.83,
    "sodium_mg": 996.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168120",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
