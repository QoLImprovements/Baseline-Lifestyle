/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "packet",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168958",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Pasta mix, Italian four cheese lasagna, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 70.3,
    "energy_kcal": 1490.0,
    "fat_g": 2.7,
    "fibre_g": 2.6,
    "folate_ug": 140.0,
    "iron_mg": 3.12,
    "magnesium_mg": 42.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 162.0,
    "potassium_mg": 271.0,
    "protein_g": 12.5,
    "salt_g": 5.225,
    "sat_fat_g": 0.697,
    "sodium_mg": 2090.0,
    "sugar_g": 6.7,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168958",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
