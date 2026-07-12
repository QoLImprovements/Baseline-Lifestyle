/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast-yield-from-1675-g-raw-meat",
  "description": "Beef Products",
  "id": "usda-sr-legacy-170616",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1236.0,
      "key": "roast-yield-from-1675-g-raw-meat",
      "kind": "unit",
      "label": "roast (yield from 1675 g raw meat)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, chuck, arm pot roast, separable lean only, trimmed to 0\" fat, select, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 195.0,
    "fat_g": 5.8,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 2.77,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 207.0,
    "potassium_mg": 270.0,
    "protein_g": 33.4,
    "salt_g": 0.1375,
    "sat_fat_g": 2.19,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170616",
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
