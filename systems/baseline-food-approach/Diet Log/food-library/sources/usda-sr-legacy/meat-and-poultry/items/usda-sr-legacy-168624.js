/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168624",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 391.0,
      "key": "piece-cooked-excluding-refuse",
      "kind": "unit",
      "label": "piece, cooked, excluding refuse"
    }
  ],
  "name": "Beef, variety meats and by-products, brain, cooked, simmered",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.48,
    "energy_kcal": 630.0,
    "fat_g": 10.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 2.3,
    "magnesium_mg": 12.0,
    "omega3_g": 1.238,
    "phosphorus_mg": 335.0,
    "potassium_mg": 244.0,
    "protein_g": 11.7,
    "salt_g": 0.27,
    "sat_fat_g": 2.39,
    "sodium_mg": 108.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 1.67,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168624",
  "state": "Cooked",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "cooked",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
