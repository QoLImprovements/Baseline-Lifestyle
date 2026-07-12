/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "each",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "each",
      "kind": "unit",
      "label": "each"
    }
  ],
  "name": "Fast foods, miniature cinnamon rolls",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 53.4,
    "energy_kcal": 403.0,
    "fat_g": 18.0,
    "fibre_g": 2.2,
    "folate_ug": 0.0,
    "iron_mg": 2.55,
    "magnesium_mg": 13.0,
    "omega3_g": 0.128,
    "phosphorus_mg": 180.0,
    "potassium_mg": 131.0,
    "protein_g": 7.02,
    "salt_g": 1.385,
    "sat_fat_g": 4.7,
    "sodium_mg": 554.0,
    "sugar_g": 18.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172079",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
