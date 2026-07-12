/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-3-heaping-tsp-or-1-envelope",
  "description": "Beverages",
  "id": "usda-sr-legacy-173220",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "serving-3-heaping-tsp-or-1-envelope",
      "kind": "unit",
      "label": "serving (3 heaping tsp or 1 envelope)"
    }
  ],
  "name": "Beverages, Malted drink mix, natural, powder, dairy based.",
  "nutritionPerBasis": {
    "calcium_mg": 298.0,
    "carbs_g": 71.2,
    "energy_kcal": 428.0,
    "fat_g": 9.52,
    "fibre_g": 0.1,
    "folate_ug": 46.0,
    "iron_mg": 0.7,
    "magnesium_mg": 93.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 358.0,
    "potassium_mg": 758.0,
    "protein_g": 14.3,
    "salt_g": 1.0125,
    "sat_fat_g": 4.76,
    "sodium_mg": 405.0,
    "sugar_g": 47.6,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173220",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
