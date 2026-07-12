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
  "id": "usda-sr-legacy-172308",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, NUTRAMIGEN WITH LGG, with iron, powder, not reconstituted, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 470.0,
    "carbs_g": 53.6,
    "energy_kcal": 2150.0,
    "fat_g": 27.0,
    "fibre_g": 0.0,
    "folate_ug": 79.0,
    "iron_mg": 9.1,
    "magnesium_mg": 40.0,
    "omega3_g": 0.086,
    "phosphorus_mg": 260.0,
    "potassium_mg": 560.0,
    "protein_g": 14.1,
    "salt_g": 0.6,
    "sat_fat_g": 11.3,
    "sodium_mg": 240.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 450.0,
    "vitamin_c_mg": 61.0,
    "vitamin_e_mg": 4.5,
    "vitamin_k_ug": 45.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172308",
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
