/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "3-scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172314",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "3-scoop",
      "kind": "unit",
      "label": "3 scoop"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, NEXT STEP, PROSOBEE LIPIL, powder, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 920.0,
    "carbs_g": 57.1,
    "energy_kcal": 480.0,
    "fat_g": 21.0,
    "fibre_g": 0.0,
    "folate_ug": 76.0,
    "iron_mg": 9.5,
    "magnesium_mg": 52.0,
    "omega3_g": 0.081,
    "phosphorus_mg": 620.0,
    "potassium_mg": 570.0,
    "protein_g": 15.6,
    "salt_g": 0.4275,
    "sat_fat_g": 8.9,
    "sodium_mg": 171.0,
    "sugar_g": 56.0,
    "vitamin_a_ug": 430.0,
    "vitamin_c_mg": 57.0,
    "vitamin_e_mg": 6.4,
    "vitamin_k_ug": 38.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172314",
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
