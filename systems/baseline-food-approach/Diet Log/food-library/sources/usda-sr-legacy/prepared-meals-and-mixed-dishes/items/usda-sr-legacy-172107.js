/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "hot-pocket-1-nlea-serving",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172107",
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
    }
  ],
  "name": "HOT POCKETS, meatballs & mozzarella stuffed sandwich, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 181.0,
    "carbs_g": 30.7,
    "energy_kcal": 252.0,
    "fat_g": 10.2,
    "fibre_g": 2.2,
    "folate_ug": 76.0,
    "iron_mg": 2.08,
    "magnesium_mg": 22.0,
    "omega3_g": 0.261,
    "phosphorus_mg": 186.0,
    "potassium_mg": 204.0,
    "protein_g": 9.32,
    "salt_g": 0.945,
    "sat_fat_g": 3.93,
    "sodium_mg": 378.0,
    "sugar_g": 7.73,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172107",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "prepared-meals-and-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
