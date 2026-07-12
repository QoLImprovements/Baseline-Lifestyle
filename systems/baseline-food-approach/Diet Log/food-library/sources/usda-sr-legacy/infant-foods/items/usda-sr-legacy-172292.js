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
  "id": "usda-sr-legacy-172292",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.7,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, Enfamil Reguline Powder, with ARA and DHA, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 420.0,
    "carbs_g": 55.9,
    "energy_kcal": 513.0,
    "fat_g": 27.0,
    "fibre_g": 0.0,
    "folate_ug": 81.0,
    "iron_mg": 2.6,
    "magnesium_mg": 41.0,
    "omega3_g": 0.086,
    "phosphorus_mg": 230.0,
    "potassium_mg": 550.0,
    "protein_g": 11.7,
    "salt_g": 0.4575,
    "sat_fat_g": 11.3,
    "sodium_mg": 183.0,
    "sugar_g": 30.0,
    "vitamin_a_ug": 460.0,
    "vitamin_c_mg": 61.0,
    "vitamin_e_mg": 4.6,
    "vitamin_k_ug": 46.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172292",
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
