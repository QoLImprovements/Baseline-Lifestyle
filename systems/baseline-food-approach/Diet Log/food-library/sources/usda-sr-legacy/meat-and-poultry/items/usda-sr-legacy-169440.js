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
  "id": "usda-sr-legacy-169440",
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
      "gramsPerUnit": 293.0,
      "key": "steak-yield-from-448-g-raw-meat",
      "kind": "unit",
      "label": "steak (Yield from 448 g raw meat)"
    }
  ],
  "name": "Beef, brisket, flat half, separable lean and fat, trimmed to 0\" fat, choice, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 221.0,
    "fat_g": 9.24,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.75,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 191.0,
    "potassium_mg": 254.0,
    "protein_g": 32.2,
    "salt_g": 0.13,
    "sat_fat_g": 3.64,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169440",
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
