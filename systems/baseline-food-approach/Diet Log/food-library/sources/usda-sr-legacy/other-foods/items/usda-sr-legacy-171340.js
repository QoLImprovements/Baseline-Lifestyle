/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171340",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-first-foods-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber First Foods (2.5 oz)"
    }
  ],
  "name": "Babyfood, prunes, without vitamin c, strained",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 23.5,
    "energy_kcal": 100.0,
    "fat_g": 0.2,
    "fibre_g": 2.7,
    "folate_ug": 1.0,
    "iron_mg": 0.4,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 306.0,
    "protein_g": 1.0,
    "salt_g": 0.0025,
    "sat_fat_g": 0.02,
    "sodium_mg": 1.0,
    "sugar_g": 14.3,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 22.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171340",
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
