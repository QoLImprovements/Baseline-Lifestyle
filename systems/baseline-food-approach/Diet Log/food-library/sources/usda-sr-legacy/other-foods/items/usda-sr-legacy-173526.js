/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173526",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.3,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Toddler formula, MEAD JOHNSON, Nutramigen Toddler with LGG Powder, with ARA and DHA, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 620.0,
    "carbs_g": 62.0,
    "energy_kcal": 2030.0,
    "fat_g": 21.0,
    "fibre_g": 0.0,
    "folate_ug": 77.0,
    "iron_mg": 7.7,
    "magnesium_mg": 48.0,
    "omega3_g": 0.082,
    "phosphorus_mg": 350.0,
    "potassium_mg": 590.0,
    "protein_g": 12.0,
    "salt_g": 0.445,
    "sat_fat_g": 8.6,
    "sodium_mg": 178.0,
    "sugar_g": 25.0,
    "vitamin_a_ug": 430.0,
    "vitamin_c_mg": 91.0,
    "vitamin_e_mg": 3.6,
    "vitamin_k_ug": 62.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173526",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
