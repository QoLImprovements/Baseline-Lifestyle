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
  "id": "usda-sr-legacy-169786",
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
  "name": "Infant Formula, GERBER GOOD START 2, GENTLE PLUS, powder",
  "nutritionPerBasis": {
    "calcium_mg": 935.0,
    "carbs_g": 57.1,
    "energy_kcal": 492.0,
    "fat_g": 25.1,
    "fibre_g": 0.0,
    "folate_ug": 74.0,
    "iron_mg": 9.8,
    "magnesium_mg": 34.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 522.0,
    "potassium_mg": 531.0,
    "protein_g": 10.8,
    "salt_g": 0.3325,
    "sat_fat_g": 10.5,
    "sodium_mg": 133.0,
    "sugar_g": 57.1,
    "vitamin_a_ug": 447.0,
    "vitamin_c_mg": 59.0,
    "vitamin_e_mg": 4.41,
    "vitamin_k_ug": 39.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169786",
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
