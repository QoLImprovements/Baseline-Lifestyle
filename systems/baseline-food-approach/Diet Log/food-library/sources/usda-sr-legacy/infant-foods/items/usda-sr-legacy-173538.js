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
  "id": "usda-sr-legacy-173538",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.8,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, PREGESTIMIL, with iron, powder, with ARA and DHA, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 470.0,
    "carbs_g": 52.2,
    "energy_kcal": 517.0,
    "fat_g": 28.0,
    "fibre_g": 0.0,
    "folate_ug": 80.0,
    "iron_mg": 9.0,
    "magnesium_mg": 40.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 260.0,
    "potassium_mg": 550.0,
    "protein_g": 14.0,
    "salt_g": 0.6,
    "sat_fat_g": 16.5,
    "sodium_mg": 240.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 530.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 13.4,
    "vitamin_k_ug": 60.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173538",
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
