/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "hot-pocket-1-nlea-serving",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "hot-pocket-1-nlea-serving",
      "kind": "unit",
      "label": "hot pocket (1 NLEA serving)"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "each-analytical-measurement",
      "kind": "unit",
      "label": "each (analytical measurement)"
    }
  ],
  "name": "LEAN POCKETS, Ham N Cheddar",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 32.5,
    "energy_kcal": 230.0,
    "fat_g": 6.53,
    "fibre_g": 1.7,
    "folate_ug": 54.0,
    "iron_mg": 2.15,
    "magnesium_mg": 21.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 197.0,
    "potassium_mg": 203.0,
    "protein_g": 10.3,
    "salt_g": 1.0575,
    "sat_fat_g": 2.39,
    "sodium_mg": 423.0,
    "sugar_g": 7.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172108",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
