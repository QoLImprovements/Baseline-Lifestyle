/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-168971",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.6,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, GO AND GROW, powder, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 998.0,
    "carbs_g": 52.2,
    "energy_kcal": 512.0,
    "fat_g": 27.6,
    "fibre_g": 0.0,
    "folate_ug": 77.0,
    "iron_mg": 10.2,
    "magnesium_mg": 46.0,
    "omega3_g": 0.075,
    "phosphorus_mg": 666.0,
    "potassium_mg": 768.0,
    "protein_g": 15.4,
    "salt_g": 0.385,
    "sat_fat_g": 11.4,
    "sodium_mg": 154.0,
    "sugar_g": 52.2,
    "vitamin_a_ug": 465.0,
    "vitamin_c_mg": 61.0,
    "vitamin_e_mg": 10.3,
    "vitamin_k_ug": 41.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168971",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
