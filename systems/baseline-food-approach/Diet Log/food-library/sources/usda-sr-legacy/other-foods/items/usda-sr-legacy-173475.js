/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "2-tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-173475",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.4,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    },
    {
      "gramsPerUnit": 0.3,
      "key": "2-leaves",
      "kind": "unit",
      "label": "2 leaves"
    }
  ],
  "name": "Spearmint, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 199.0,
    "carbs_g": 8.41,
    "energy_kcal": 44.0,
    "fat_g": 0.73,
    "fibre_g": 6.8,
    "folate_ug": 105.0,
    "iron_mg": 11.9,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 458.0,
    "protein_g": 3.29,
    "salt_g": 0.075,
    "sat_fat_g": 0.191,
    "sodium_mg": 30.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 203.0,
    "vitamin_c_mg": 13.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173475",
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
