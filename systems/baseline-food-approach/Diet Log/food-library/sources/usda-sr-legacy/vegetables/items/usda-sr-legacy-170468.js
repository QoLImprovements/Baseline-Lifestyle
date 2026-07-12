/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-chopped-or-diced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170468",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "0-5-cup-chopped-or-diced",
      "kind": "unit",
      "label": "0.5 cup, chopped or diced"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Turnip greens, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 3.67,
    "energy_kcal": 92.0,
    "fat_g": 0.31,
    "fibre_g": 2.5,
    "folate_ug": 74.0,
    "iron_mg": 1.51,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 184.0,
    "protein_g": 2.47,
    "salt_g": 0.03,
    "sat_fat_g": 0.073,
    "sodium_mg": 12.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 309.0,
    "vitamin_c_mg": 26.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170468",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
