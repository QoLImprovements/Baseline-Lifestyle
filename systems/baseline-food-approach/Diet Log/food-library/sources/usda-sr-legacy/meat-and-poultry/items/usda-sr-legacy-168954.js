/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "packet",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168954",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Pasta mix, classic beef, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 72.2,
    "energy_kcal": 1480.0,
    "fat_g": 1.78,
    "fibre_g": 2.0,
    "folate_ug": 127.0,
    "iron_mg": 2.71,
    "magnesium_mg": 39.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 127.0,
    "potassium_mg": 342.0,
    "protein_g": 12.3,
    "salt_g": 3.85,
    "sat_fat_g": 0.439,
    "sodium_mg": 1540.0,
    "sugar_g": 4.95,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168954",
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
