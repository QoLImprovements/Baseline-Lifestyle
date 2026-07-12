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
  "id": "usda-sr-legacy-169787",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.4,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, GERBER, GOOD START 2, PROTECT PLUS, powder",
  "nutritionPerBasis": {
    "calcium_mg": 956.0,
    "carbs_g": 56.3,
    "energy_kcal": 501.0,
    "fat_g": 25.7,
    "fibre_g": 0.0,
    "folate_ug": 77.0,
    "iron_mg": 10.0,
    "magnesium_mg": 36.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 543.0,
    "potassium_mg": 553.0,
    "protein_g": 11.1,
    "salt_g": 0.345,
    "sat_fat_g": 11.0,
    "sodium_mg": 138.0,
    "sugar_g": 56.3,
    "vitamin_a_ug": 457.0,
    "vitamin_c_mg": 61.0,
    "vitamin_e_mg": 4.5,
    "vitamin_k_ug": 41.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169787",
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
