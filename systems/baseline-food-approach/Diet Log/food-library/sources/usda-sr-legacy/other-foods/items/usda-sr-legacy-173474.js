/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "2-leaves",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-173474",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.1,
      "key": "2-leaves",
      "kind": "unit",
      "label": "2 leaves"
    },
    {
      "gramsPerUnit": 3.2,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Peppermint, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 243.0,
    "carbs_g": 14.9,
    "energy_kcal": 293.0,
    "fat_g": 0.94,
    "fibre_g": 8.0,
    "folate_ug": 114.0,
    "iron_mg": 5.08,
    "magnesium_mg": 80.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 569.0,
    "protein_g": 3.75,
    "salt_g": 0.0775,
    "sat_fat_g": 0.246,
    "sodium_mg": 31.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 212.0,
    "vitamin_c_mg": 31.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173474",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "other-foods",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
