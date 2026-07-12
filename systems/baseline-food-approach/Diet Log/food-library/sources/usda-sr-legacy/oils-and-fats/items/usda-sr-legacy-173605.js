/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173605",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Margarine, industrial, non-dairy, cottonseed, soy oil (partially hydrogenated ), for flaky pastries",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 0.0,
    "energy_kcal": 714.0,
    "fat_g": 80.2,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.0,
    "magnesium_mg": 6.0,
    "omega3_g": 0.313,
    "phosphorus_mg": 51.0,
    "potassium_mg": 94.0,
    "protein_g": 1.9,
    "salt_g": 2.1975,
    "sat_fat_g": 20.4,
    "sodium_mg": 879.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1030.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 4.6,
    "vitamin_k_ug": 106.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173605",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
