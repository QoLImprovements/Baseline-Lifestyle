/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171514",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "4-pieces",
      "kind": "unit",
      "label": "4 pieces"
    }
  ],
  "name": "Chicken breast tenders, breaded, cooked, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 17.6,
    "energy_kcal": 1050.0,
    "fat_g": 12.9,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.0,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 216.0,
    "potassium_mg": 225.0,
    "protein_g": 16.4,
    "salt_g": 1.115,
    "sat_fat_g": 3.2,
    "sodium_mg": 446.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171514",
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
